#!/usr/bin/env bash

set -e


# check package.json exists and dirname is pkl-ts-parser
dirname=$(basename "$(pwd)")
if [ ! -f "package.json" ] || [ "$dirname" != "pkl-ts-parser" ]; then
  echo "Please run this script from the root of the project"
  exit 1
fi

mkdir -p ./src/antlr4/java
java -jar ./scripts/.bin/antlr-4.13.1-complete.jar \
    -o ./src/antlr4/java \
    -visitor \
    -no-listener \
    -Dlanguage=Java \
    -Xexact-output-dir \
    ./src/antlr4/PklLexer.g4

java -jar ./scripts/.bin/antlr-4.13.1-complete.jar \
    -o ./src/antlr4/java \
    -lib ./src/antlr4/java \
    -visitor \
    -no-listener \
    -Dlanguage=Java \
    -Xexact-output-dir \
    ./src/antlr4/PklParser.g4
