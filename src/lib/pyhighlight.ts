/* ============================================================
   Tiny dependency-free Python syntax highlighter for the lab
   editor and exam code panels. Regex tokenizer → HTML spans.
   Handles (while you type): comments, triple/normal/f-strings
   (including unterminated ones gracefully), numbers, keywords,
   builtins and call-site function names. HTML is escaped.
   ============================================================ */

const KEYWORDS = new Set([
  "False", "None", "True", "and", "as", "assert", "async", "await",
  "break", "class", "continue", "def", "del", "elif", "else", "except",
  "finally", "for", "from", "global", "if", "import", "in", "is",
  "lambda", "nonlocal", "not", "or", "pass", "raise", "return", "try",
  "while", "with", "yield", "match", "case",
]);

const BUILTINS = new Set([
  "print", "len", "range", "int", "float", "str", "bool", "list", "dict",
  "set", "tuple", "input", "sum", "min", "max", "sorted", "reversed",
  "enumerate", "zip", "abs", "round", "type", "isinstance", "super",
  "open", "map", "filter", "any", "all", "format", "repr", "help",
]);

/* order matters: triple strings → f-strings → plain strings → comments
   → numbers → identifiers. $ / (?=\n) terminators keep unterminated
   strings (mid-typing) from swallowing the rest of the code. */
const TOKEN_RE =
  /("""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$))|([fF](?:"(?:\\.|[^"\\\n])*(?:"|(?=\n)|$)|'(?:\\.|[^'\\\n])*(?:'|(?=\n)|$)))|([bBrRuU]?(?:"(?:\\.|[^"\\\n])*(?:"|(?=\n)|$)|'(?:\\.|[^'\\\n])*(?:'|(?=\n)|$)))|(#[^\n]*)|(\b\d[\d_]*(?:\.\d[\d_]*)?(?:[eE][+-]?\d+)?\b)|([A-Za-z_]\w*)/g;

const ESC: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };
function esc(s: string): string {
  return s.replace(/[&<>]/g, (c) => ESC[c]);
}

export function highlightPython(code: string): string {
  let html = "";
  let last = 0;
  TOKEN_RE.lastIndex = 0;

  for (let m = TOKEN_RE.exec(code); m !== null; m = TOKEN_RE.exec(code)) {
    html += esc(code.slice(last, m.index));
    last = m.index + m[0].length;

    if (m[1] !== undefined) {
      html += `<span class="tok-str">${esc(m[1])}</span>`;
    } else if (m[2] !== undefined) {
      html += `<span class="tok-fstr">${esc(m[2])}</span>`;
    } else if (m[3] !== undefined) {
      html += `<span class="tok-str">${esc(m[3])}</span>`;
    } else if (m[4] !== undefined) {
      html += `<span class="tok-com">${esc(m[4])}</span>`;
    } else if (m[5] !== undefined) {
      html += `<span class="tok-num">${esc(m[5])}</span>`;
    } else {
      const word = m[6];
      if (KEYWORDS.has(word)) {
        html += `<span class="tok-kw">${esc(word)}</span>`;
      } else if (BUILTINS.has(word)) {
        html += `<span class="tok-bi">${esc(word)}</span>`;
      } else if (code[last] === "(") {
        html += `<span class="tok-fn">${esc(word)}</span>`;
      } else {
        html += esc(word);
      }
    }
  }
  html += esc(code.slice(last));
  return html;
}
