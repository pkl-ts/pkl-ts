/**
 * Copyright © 2024 Apple Inc. and the Pkl project authors. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
lexer grammar PklTsLexer;

@header {

class StringInterpolationScope {
  parenLevel: number = 0;
  poundLength: number = 0;
}

}

@members {
interpolationScopes: Array<StringInterpolationScope> = [];
interpolationScope: StringInterpolationScope = new StringInterpolationScope();

pushInterpolationScope(): void {
 this.interpolationScope = new StringInterpolationScope();
 this.interpolationScopes.push(this.interpolationScope);
}

incParenLevel(): void {
 this.interpolationScope.parenLevel += 1;
}

decParenLevel(): void {
 if (this.interpolationScope.parenLevel === 0) {
   if (this.interpolationScopes.length > 1) {
     this.interpolationScopes.pop();
     this.interpolationScope = this.interpolationScopes[this.interpolationScopes.length - 1];
     this.popMode();
   }
 } else {
   this.interpolationScope.parenLevel -= 1;
 }
}

isPounds(): boolean {
 switch (this.interpolationScope.poundLength) {
   case 0: return true;
   case 1: return String.fromCharCode(this.inputStream.LA(1)) === '#';
   default:
     let poundLength = this.interpolationScope.poundLength;
     for (let i = 1; i <= poundLength; i++) {
       if (String.fromCharCode(this.inputStream.LA(i)) !== '#') return false;
     }
     return true;
 }
}

isQuote(): boolean {
 return String.fromCharCode(this.inputStream.LA(1)) === '"';
}

endsWithPounds(text: string): boolean {
 if(text.length >= 2) {
  throw new Error("Pounds should not be used in single or double quotes");
 };

 switch (this.interpolationScope.poundLength) {
   case 0: return true;
   case 1: return text.charAt(text.length - 1) === '#';
   default:
     let poundLength = this.interpolationScope.poundLength;
     let textLength = text.length;
     if (textLength < poundLength) return false;

     let stop = textLength - poundLength;
     for (let i = textLength - 1; i >= stop; i--) {
       if (text.charAt(i) !== '#') return false;
     }

     return true;
 }
}

removeBackTicks(): void {
 let text = this.text;
 this.text = text.substring(1, text.length - 1);
}

isNewlineOrEof(): boolean {
 let input = String.fromCharCode(this.inputStream.LA(1));
 return input === '\n' || input === '\r' || this.inputStream.LA(1) === Token.EOF;
}

isUnicodeIdentifierStart(char: string): boolean {
  return /\p{ID_Start}/u.test(char);
}

isUnicodeIdentifierPart(char: string): boolean {
  return /\p{ID_Continue}/u.test(char);
}
}

channels {
  NewlineSemicolonChannel,
  WhitespaceChannel,
  CommentsChannel,
  ShebangChannel
}

ABSTRACT     : 'abstract';
AMENDS       : 'amends';
AS           : 'as';
CLASS        : 'class';
CONST        : 'const';
ELSE         : 'else';
EXTENDS      : 'extends';
EXTERNAL     : 'external';
FALSE        : 'false';
FIXED        : 'fixed';
FOR          : 'for';
FUNCTION     : 'function';
HIDDEN_      : 'hidden';
IF           : 'if';
IMPORT       : 'import';
IMPORT_GLOB  : 'import*';
IN           : 'in';
IS           : 'is';
LET          : 'let';
LOCAL        : 'local';
MODULE       : 'module';
NEW          : 'new';
NOTHING      : 'nothing';
NULL         : 'null';
OPEN         : 'open';
OUT          : 'out';
OUTER        : 'outer';
READ         : 'read';
READ_GLOB    : 'read*';
READ_OR_NULL : 'read?';
SUPER        : 'super';
THIS         : 'this';
THROW        : 'throw';
TRACE        : 'trace';
TRUE         : 'true';
TYPE_ALIAS   : 'typealias';
UNKNOWN      : 'unknown';
WHEN         : 'when';

// reserved for future use, but not used today
PROTECTED : 'protected';
OVERRIDE  : 'override';
RECORD    : 'record';
DELETE    : 'delete';
CASE      : 'case';
SWITCH    : 'switch';
VARARG    : 'vararg';

LPAREN      : '(' { this.incParenLevel(); };
RPAREN      : ')' { this.decParenLevel(); };
LBRACE      : '{';
RBRACE      : '}';
LBRACK      : '[';
RBRACK      : ']';
LPRED       : '[['; // No RPRED, because that lexes too eager to allow nested index expressions, e.g. foo[bar[baz]]
COMMA       : ',';
DOT         : '.';
QDOT        : '?.';
COALESCE    : '??';
NON_NULL    : '!!';

AT          : '@';
ASSIGN      : '=';
GT          : '>';
LT          : '<';
NOT         : '!';
QUESTION    : '?';
COLON       : ':';
ARROW       : '->';
EQUAL       : '==';
NOT_EQUAL   : '!=';
LTE         : '<=';
GTE         : '>=';
AND         : '&&';
OR          : '||';
PLUS        : '+';
MINUS       : '-';
POW         : '**';
STAR        : '*';
DIV         : '/';
INT_DIV     : '~/';
MOD         : '%';
UNION       : '|';
PIPE        : '|>';
SPREAD      : '...';
QSPREAD     : '...?';
UNDERSCORE  : '_';

SLQuote    : '#'* '"'   { this.interpolationScope.poundLength = this.text.length - 1; } -> pushMode(SLString);
MLQuote    : '#'* '"""' { this.interpolationScope.poundLength = this.text.length - 3; } -> pushMode(MLString);

IntLiteral
  : DecimalLiteral
  | HexadecimalLiteral
  | BinaryLiteral
  | OctalLiteral
;

// leading zeros are allowed (cf. Swift)
fragment DecimalLiteral
  : DecimalDigit DecimalDigitCharacters?
  ;

fragment DecimalDigitCharacters
  : DecimalDigitCharacter+
  ;

fragment DecimalDigitCharacter
  : DecimalDigit
  | '_'
  ;

fragment DecimalDigit
  : [0-9]
  ;

fragment HexadecimalLiteral
  : '0x' HexadecimalCharacter+ // intentionally allow underscore after '0x'; e.g. `0x_ab`. We will throw an error in AstBuilder.
  ;

fragment HexadecimalCharacter
  : [0-9a-fA-F_]
  ;

fragment BinaryLiteral
  : '0b' BinaryCharacter+ // intentionally allow underscore after '0b'; e.g. `0b_11`. We will throw an error in AstBuilder.
  ;

fragment BinaryCharacter
  : [01_]
  ;

fragment OctalLiteral
  : '0o' OctalCharacter+ // intentionally allow underscore after '0o'; e.g. `0o_34`. We will throw an error in AstBuilder.
  ;

fragment OctalCharacter
  : [0-7_]
  ;

FloatLiteral
  : DecimalLiteral? '.' '_'? DecimalLiteral Exponent? // intentionally allow underscore. We will throw an error in AstBuilder.
  | DecimalLiteral Exponent
  ;

fragment Exponent
  : [eE] [+-]? '_'? DecimalLiteral // intentionally allow underscore. We will throw an error in AstBuilder.
  ;

Identifier
  : RegularIdentifier
  | QuotedIdentifier { this.removeBackTicks(); }
  ;

// Note: Keep in sync with Lexer.isRegularIdentifier()
fragment RegularIdentifier
  : IdentifierStart IdentifierPart*
  ;

fragment QuotedIdentifier
  : '`' (~'`')+ '`'
  ;

fragment
IdentifierStart
  : [a-zA-Z$_] // handle common cases without a predicate
  | . {this.isUnicodeIdentifierStart(String.fromCharCode(this.inputStream.LA(-1)))}?
  ;

fragment
IdentifierPart
  : [a-zA-Z0-9$_] // handle common cases without a predicate
  | . {this.isUnicodeIdentifierPart(String.fromCharCode(this.inputStream.LA(-1)))}?
  ;

NewlineSemicolon
  : [\r\n;]+ -> channel(NewlineSemicolonChannel)
  ;

// Note: Java, Scala, and Swift treat \f as whitespace; Dart doesn't.
// Python and C also include vertical tab.
// C# also includes Unicode class Zs (separator, space).
Whitespace
  : [ \t\f]+ -> channel(WhitespaceChannel)
  ;

DocComment
  : ([ \t\f]* '///' .*? (Newline|EOF))+
  ;

BlockComment
  : '/*' (BlockComment | .)*? '*/' -> channel(CommentsChannel)
  ;

LineComment
  : '//' .*? {this.isNewlineOrEof()}? -> channel(CommentsChannel)
  ;

ShebangComment
  : '#!' .*? {this.isNewlineOrEof()}? -> channel(ShebangChannel)
  ;

// strict: '\\' Pounds 'u{' HexDigit (HexDigit (HexDigit (HexDigit (HexDigit (HexDigit (HexDigit HexDigit? )?)?)?)?)?)? '}'
fragment UnicodeEscape
  : '\\' Pounds 'u{' ~[}\r\n "]* '}'?
  ;

// strict: '\\' Pounds [tnr"\\]
fragment CharacterEscape
  : '\\' Pounds .
  ;

fragment Pounds
  :      { this.interpolationScope.poundLength == 0 }?
  | '#'  { this.interpolationScope.poundLength == 1 }?
  | '#'+ { this.endsWithPounds(this.text) }?
  ;

fragment Newline
  : '\n' | '\r' '\n'?
  ;

mode SLString;

// strict: '"' Pounds
SLEndQuote
  : ('"' Pounds | Newline ) -> popMode
  ;

SLInterpolation
  : '\\' Pounds '(' { this.pushInterpolationScope(); } -> pushMode(DEFAULT_MODE)
  ;

SLUnicodeEscape
  : UnicodeEscape
  ;

SLCharacterEscape
  : CharacterEscape
  ;

SLCharacters
  : ~["\\\r\n]+ SLCharacters?
  | ["\\] {!this.isPounds()}? SLCharacters?
  ;

mode MLString;

MLEndQuote
  : '"""' Pounds -> popMode
  ;

MLInterpolation
  : '\\' Pounds '(' { this.pushInterpolationScope(); } -> pushMode(DEFAULT_MODE)
  ;

MLUnicodeEscape
  : UnicodeEscape
  ;

MLCharacterEscape
  : CharacterEscape
  ;

MLNewline
  : Newline
  ;

MLCharacters
  : ~["\\\r\n]+ MLCharacters?
  | ('\\' | '"""') {!this.isPounds()}? MLCharacters?
  | '"' '"'? {!this.isQuote()}? MLCharacters?
  ;
