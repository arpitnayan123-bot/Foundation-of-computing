#!/usr/bin/env python3
"""Loudness / clipping analysis — robust RIFF parser (walks chunks)."""
import struct, math, glob, os

def read_wav_data(path):
    with open(path, "rb") as fh:
        buf = fh.read()
    if buf[:4] != b"RIFF" or buf[8:12] != b"WAVE":
        raise ValueError("not RIFF/WAVE")
    pos, data, fmt = 12, b"", None
    while pos + 8 <= len(buf):
        cid = buf[pos:pos+4]
        size = struct.unpack("<I", buf[pos+4:pos+8])[0]
        body = buf[pos+8:pos+8+size]
        if cid == b"fmt ":
            fmt = struct.unpack("<HHIIHH", body[:16])
        elif cid == b"data":
            data = body
        pos += 8 + size + (size & 1)
    if fmt is None:
        raise ValueError("no fmt")
    ch, sw, sr = fmt[1], fmt[3 - 1], fmt[2]  # channels, bits at index? fmt: tag,ch,sr,byterate,blockalign,bits
    ch, sr = fmt[1], fmt[2]
    bits = fmt[5]
    return data, ch, bits, sr

for f in sorted(glob.glob("/home/z/my-project/scripts/voice-qa-out/*.wav")):
    try:
        data, ch, bits, sr = read_wav_data(f)
        if bits != 16:
            print(f"{os.path.basename(f)}: {bits}-bit — skip")
            continue
        n = len(data) // 2
        samples = struct.unpack(f"<{n}h", data[:n*2])
        peak = max(abs(s) for s in samples) / 32768.0
        rms = math.sqrt(sum(s*s for s in samples) / n) / 32768.0
        rms_db = 20*math.log10(rms) if rms > 0 else -999
        peak_db = 20*math.log10(peak) if peak > 0 else -999
        clipped = sum(1 for s in samples if abs(s) >= 32767) / n * 100
        dur = n / sr / ch
        print(f"{os.path.basename(f):22s} {dur:5.1f}s  RMS {rms_db:6.1f} dBFS  peak {peak_db:6.1f} dBFS  clip {clipped:5.2f}%  {ch}ch {sr}Hz")
    except Exception as e:
        print(f"{os.path.basename(f)}: ERROR {e}")
