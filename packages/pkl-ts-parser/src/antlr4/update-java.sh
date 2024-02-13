mkdir -p java
java -jar ./.bin/antlr-4.13.1-complete.jar \
    -o java \
    -lib java \
    -visitor \
    -no-listener \
    -Dlanguage=Java \
    ./PklLexer.g4

java -jar ./.bin/antlr-4.13.1-complete.jar \
    -o java \
    -lib java \
    -visitor \
    -no-listener \
    -Dlanguage=Java \
    ./PklParser.g4
