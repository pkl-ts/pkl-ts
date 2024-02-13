mkdir -p ts

pnpm exec antlr4ng \
    -Dlanguage=TypeScript \
    -o ./src/antlr4/ts/ \
    -visitor -listener \
    -Xexact-output-dir \
    ./src/antlr4/PklTsLexer.g4 ./src/antlr4/PklTsParser.g4
