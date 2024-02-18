#!/usr/bin/env bash

set -e

if [ ! -f "package.json" ]; then
  echo "Please run this script from the root of the project"
  exit 1
fi

pushd src/antlr4

wget https://raw.githubusercontent.com/apple/pkl/0.25.2/pkl-core/src/main/antlr/PklLexer.g4 -c
wget https://raw.githubusercontent.com/apple/pkl/0.25.2/pkl-core/src/main/antlr/PklParser.g4 -c

popd

mkdir -p scripts/.bin
pushd scripts/.bin
wget https://www.antlr.org/download/antlr-4.13.1-complete.jar -c
popd
