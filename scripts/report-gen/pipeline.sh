#!/bin/bash
set -e
cd /home/z/my-project/scripts/report-gen
bun run generate.js
cd /home/z/my-project
DOCX_SCRIPTS="/home/z/my-project/skills/docx/scripts"
python3 "$DOCX_SCRIPTS/add_toc_placeholders.py" download/FoC_Shelf_Audit_Report.docx --auto > /dev/null
python3 - << 'PY'
import zipfile, re, shutil
p = 'download/FoC_Shelf_Audit_Report.docx'
z = zipfile.ZipFile(p)
doc = z.read('word/document.xml').decode('utf-8')
# 1) trim duplicated first entry inside the TOC field paragraph
i = doc.find('Table of Contents'); j = doc.find('Update Field', i)
region = doc[i:j]
paras = list(re.finditer(r'<w:p\b.*?</w:p>', region, re.S))
p0 = paras[0]; xml = p0.group(0)
sep = xml.find('fldCharType="separate"')
run_end = xml.find('</w:r>', sep) + len('</w:r>')
new_p0 = xml[:run_end] + '</w:p>'
doc = doc[:i + p0.start()] + new_p0 + doc[i + p0.end():]
# 2) footer format switches + remove empty pgNumType
refs = re.findall(r'<w:footerReference w:type="default" r:id="(rId\d+)"/>', doc)
rels = z.read('word/_rels/document.xml.rels').decode('utf-8')
rid2file = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="(footer\d+\.xml)"', rels))
def patch_footer(xml, fmt):
    return re.sub(r'(<w:instrText[^>]*>)\s*PAGE\s*(</w:instrText>)',
                  lambda m: m.group(1) + f' PAGE \\* {fmt} \\* MERGEFORMAT ' + m.group(2), xml)
doc = doc.replace('<w:pgNumType/>', '')
out = zipfile.ZipFile('download/_tmp.docx', 'w', zipfile.ZIP_DEFLATED)
for item in z.infolist():
    data = z.read(item.filename)
    if item.filename == 'word/document.xml': data = doc.encode('utf-8')
    elif item.filename == f'word/{rid2file[refs[0]]}': data = patch_footer(data.decode('utf-8'), 'ROMAN').encode('utf-8')
    elif item.filename == f'word/{rid2file[refs[1]]}': data = patch_footer(data.decode('utf-8'), 'arabic').encode('utf-8')
    out.writestr(item, data)
out.close(); z.close()
shutil.move('download/_tmp.docx', p)
print('patched: TOC dedup + footers + pgNumType')
PY
python3 "$DOCX_SCRIPTS/postcheck.py" download/FoC_Shelf_Audit_Report.docx | tail -2
cd download && rm -f FoC_Shelf_Audit_Report.pdf
soffice --headless --convert-to pdf FoC_Shelf_Audit_Report.docx > /dev/null 2>&1
echo "PDF rendered"
