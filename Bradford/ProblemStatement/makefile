export PATH := /usr/local/apps/tex_live/current/bin/x86_64-linux:$(PATH)

default: pdf

all: pdf clean

pdf:
	pdflatex -synctex=1 -interaction=nonstopmode problem_statement.tex

clean:
	rm -f *.ps *.log *.aux *.out *.dvi *.bbl *.blg *.gz *.acn *.ist *.acr *.alg *.toc *.toc *.glg *.pyg
