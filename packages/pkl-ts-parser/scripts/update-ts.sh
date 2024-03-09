#!/usr/bin/env bash

set -e

dirname=$(basename "$(pwd)")
if [ ! -f "package.json" ] || [ "$dirname" != "pkl-ts-parser" ]; then
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

node ./scripts/update-ts.mjs

jscodeshift --extensions=ts,js --parser=ts -t scripts/add-type.mjs src/antlr4/ts/PklTsParser.ts
#jscodeshift --extensions=ts,js --parser=ts -t scripts/change-import.mjs src/antlr4/ts/*.ts

pnpm exec prettier --write ./src/antlr4/ts/*.ts
