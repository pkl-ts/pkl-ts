#!/usr/bin/env bash

set -e

if [ ! -f "package.json" ]; then
  echo "Please run this script from the root of the project"
  exit 1
fi

mkdir -p ./src/antlr4/ts/

pnpm exec antlr4ng \
    -Dlanguage=TypeScript \
    -o ./src/antlr4/ts/ \
    -visitor -listener \
    -Xexact-output-dir \
    ./src/antlr4/PklTsLexer.g4 ./src/antlr4/PklTsParser.g4
