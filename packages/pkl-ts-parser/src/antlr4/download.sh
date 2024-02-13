wget https://raw.githubusercontent.com/apple/pkl/0.25.2/pkl-core/src/main/antlr/PklLexer.g4 -c
wget https://raw.githubusercontent.com/apple/pkl/0.25.2/pkl-core/src/main/antlr/PklParser.g4 -c

mkdir -p .bin
cd .bin || exit
wget https://www.antlr.org/download/antlr-4.13.1-complete.jar -c
