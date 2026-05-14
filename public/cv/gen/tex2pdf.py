#!/usr/bin/env python3
"""
tex2pdf.py — Convert Rahman_CV_2026.html (or .tex) to PDF.

Methods tried in order:
  1. Google Chrome headless  (fastest, already installed)
  2. WeasyPrint Python lib    (pip install weasyprint)
  3. Local LaTeX compiler     (pdflatex / xelatex / lualatex)

Usage:
  python3 tex2pdf.py                        # auto-detects HTML or TEX
  python3 tex2pdf.py Rahman_CV_2026.html    # explicit HTML input
  python3 tex2pdf.py Rahman_CV_2026.tex     # explicit TEX input
  python3 tex2pdf.py -o my_cv.pdf          # custom output path
"""

import os
import sys
import shutil
import subprocess
import tempfile
import argparse
from pathlib import Path

HERE = Path(__file__).parent

# Prefer HTML → PDF (better fidelity than LaTeX without install)
DEFAULT_INPUT = HERE / "Rahman_CV_2026.html"
if not DEFAULT_INPUT.exists():
    DEFAULT_INPUT = HERE / "Rahman_CV_2026.tex"

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome",
    "chromium-browser",
    "chromium",
]

LATEX_BINS = ["pdflatex", "xelatex", "lualatex"]
LATEX_EXTRA_PATHS = [
    "/Library/TeX/texbin",
    "/usr/local/texlive/2024/bin/universal-darwin",
    "/usr/local/texlive/2023/bin/universal-darwin",
    "/usr/texbin",
]


# ── Method 1 — Chrome headless ────────────────────────────────────────────────

def find_chrome():
    for c in CHROME_CANDIDATES:
        if shutil.which(c):
            return shutil.which(c)
        if os.path.isfile(c):
            return c
    return None


def html_to_pdf_chrome(html: Path, out: Path):
    chrome = find_chrome()
    if not chrome:
        raise FileNotFoundError("Google Chrome not found.")

    print(f"  Browser : {chrome}")

    cmd = [
        chrome,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-software-rasterizer",
        f"--print-to-pdf={out}",
        "--print-to-pdf-no-header",
        f"--no-pdf-header-footer",
        f"file://{html}",
    ]
    print(f"  Running : headless Chrome print-to-PDF")
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    if not out.exists() or out.stat().st_size < 1000:
        raise RuntimeError(
            f"Chrome failed (exit {result.returncode}).\n{result.stderr[-500:]}"
        )


# ── Method 2 — WeasyPrint ─────────────────────────────────────────────────────

def html_to_pdf_weasyprint(html: Path, out: Path):
    try:
        from weasyprint import HTML
    except ImportError:
        raise ImportError("WeasyPrint not installed. Run: pip install weasyprint")
    print("  Using WeasyPrint …")
    HTML(filename=str(html)).write_pdf(str(out))


# ── Method 3 — Local LaTeX ────────────────────────────────────────────────────

def find_latex():
    for b in LATEX_BINS:
        found = shutil.which(b)
        if found:
            return found
        for base in LATEX_EXTRA_PATHS:
            p = os.path.join(base, b)
            if os.path.isfile(p):
                return p
    return None


def tex_to_pdf_local(tex: Path, out: Path):
    compiler = find_latex()
    if not compiler:
        raise FileNotFoundError(
            "No LaTeX compiler found. Install BasicTeX:\n"
            "  brew install --cask basictex\n"
            "  (requires sudo password in a real terminal)"
        )
    print(f"  Compiler: {compiler}")
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        cmd = [
            compiler, "-interaction=nonstopmode", "-halt-on-error",
            f"-output-directory={tmp}", str(tex),
        ]
        for pass_n in range(1, 3):
            print(f"  Pass {pass_n}/2 …")
            r = subprocess.run(cmd, capture_output=True, text=True, cwd=tex.parent)
            if r.returncode != 0:
                errors = [l for l in r.stdout.splitlines() if l.startswith("!")]
                print("\n  LaTeX errors:\n  " + "\n  ".join(errors or r.stdout.splitlines()[-20:]))
                raise RuntimeError("LaTeX compilation failed.")
        pdf_tmp = tmp / tex.with_suffix(".pdf").name
        if not pdf_tmp.exists():
            raise FileNotFoundError(f"PDF not produced at {pdf_tmp}")
        shutil.copy2(pdf_tmp, out)


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Convert CV to PDF")
    parser.add_argument("input", nargs="?", default=str(DEFAULT_INPUT))
    parser.add_argument("-o", "--output", default=None)
    args = parser.parse_args()

    src = Path(args.input).resolve()
    if not src.exists():
        print(f"Error: file not found: {src}")
        sys.exit(1)

    out = Path(args.output).resolve() if args.output else src.with_suffix(".pdf")

    print(f"\n{'='*56}")
    print(f"  Input  : {src.name}")
    print(f"  Output : {out}")
    print(f"{'='*56}")

    errors = []

    if src.suffix.lower() in (".html", ".htm"):
        # ── HTML path ──────────────────────────────────────────
        print("\n[1/2] Trying Chrome headless …")
        try:
            html_to_pdf_chrome(src, out)
            print(f"\n  ✓ PDF saved → {out}\n")
            return
        except Exception as e:
            errors.append(f"Chrome: {e}")
            print(f"  ✗ {e}")

        print("\n[2/2] Trying WeasyPrint …")
        try:
            html_to_pdf_weasyprint(src, out)
            print(f"\n  ✓ PDF saved → {out}\n")
            return
        except Exception as e:
            errors.append(f"WeasyPrint: {e}")
            print(f"  ✗ {e}")

    else:
        # ── LaTeX path ─────────────────────────────────────────
        print("\n[1/1] Trying local LaTeX compiler …")
        try:
            tex_to_pdf_local(src, out)
            print(f"\n  ✓ PDF saved → {out}\n")
            return
        except Exception as e:
            errors.append(f"LaTeX: {e}")
            print(f"  ✗ {e}")

    print("\n  All methods failed:")
    for err in errors:
        print(f"    • {err}")
    print(
        "\n  Manual option:\n"
        "  1. Open Rahman_CV_2026.html in Chrome\n"
        "  2. Press Cmd+P → Save as PDF → Paper: A4, Margins: None\n"
    )
    sys.exit(1)


if __name__ == "__main__":
    main()
