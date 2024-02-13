// Generated from ./src/antlr4/PklTsLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";



class StringInterpolationScope {
  parenLevel: number = 0;
  poundLength: number = 0;
}



export class PklTsLexer extends antlr.Lexer {
    public static readonly ABSTRACT = 1;
    public static readonly AMENDS = 2;
    public static readonly AS = 3;
    public static readonly CLASS = 4;
    public static readonly CONST = 5;
    public static readonly ELSE = 6;
    public static readonly EXTENDS = 7;
    public static readonly EXTERNAL = 8;
    public static readonly FALSE = 9;
    public static readonly FIXED = 10;
    public static readonly FOR = 11;
    public static readonly FUNCTION = 12;
    public static readonly HIDDEN_ = 13;
    public static readonly IF = 14;
    public static readonly IMPORT = 15;
    public static readonly IMPORT_GLOB = 16;
    public static readonly IN = 17;
    public static readonly IS = 18;
    public static readonly LET = 19;
    public static readonly LOCAL = 20;
    public static readonly MODULE = 21;
    public static readonly NEW = 22;
    public static readonly NOTHING = 23;
    public static readonly NULL = 24;
    public static readonly OPEN = 25;
    public static readonly OUT = 26;
    public static readonly OUTER = 27;
    public static readonly READ = 28;
    public static readonly READ_GLOB = 29;
    public static readonly READ_OR_NULL = 30;
    public static readonly SUPER = 31;
    public static readonly THIS = 32;
    public static readonly THROW = 33;
    public static readonly TRACE = 34;
    public static readonly TRUE = 35;
    public static readonly TYPE_ALIAS = 36;
    public static readonly UNKNOWN = 37;
    public static readonly WHEN = 38;
    public static readonly PROTECTED = 39;
    public static readonly OVERRIDE = 40;
    public static readonly RECORD = 41;
    public static readonly DELETE = 42;
    public static readonly CASE = 43;
    public static readonly SWITCH = 44;
    public static readonly VARARG = 45;
    public static readonly LPAREN = 46;
    public static readonly RPAREN = 47;
    public static readonly LBRACE = 48;
    public static readonly RBRACE = 49;
    public static readonly LBRACK = 50;
    public static readonly RBRACK = 51;
    public static readonly LPRED = 52;
    public static readonly COMMA = 53;
    public static readonly DOT = 54;
    public static readonly QDOT = 55;
    public static readonly COALESCE = 56;
    public static readonly NON_NULL = 57;
    public static readonly AT = 58;
    public static readonly ASSIGN = 59;
    public static readonly GT = 60;
    public static readonly LT = 61;
    public static readonly NOT = 62;
    public static readonly QUESTION = 63;
    public static readonly COLON = 64;
    public static readonly ARROW = 65;
    public static readonly EQUAL = 66;
    public static readonly NOT_EQUAL = 67;
    public static readonly LTE = 68;
    public static readonly GTE = 69;
    public static readonly AND = 70;
    public static readonly OR = 71;
    public static readonly PLUS = 72;
    public static readonly MINUS = 73;
    public static readonly POW = 74;
    public static readonly STAR = 75;
    public static readonly DIV = 76;
    public static readonly INT_DIV = 77;
    public static readonly MOD = 78;
    public static readonly UNION = 79;
    public static readonly PIPE = 80;
    public static readonly SPREAD = 81;
    public static readonly QSPREAD = 82;
    public static readonly UNDERSCORE = 83;
    public static readonly SLQuote = 84;
    public static readonly MLQuote = 85;
    public static readonly IntLiteral = 86;
    public static readonly FloatLiteral = 87;
    public static readonly Identifier = 88;
    public static readonly NewlineSemicolon = 89;
    public static readonly Whitespace = 90;
    public static readonly DocComment = 91;
    public static readonly BlockComment = 92;
    public static readonly LineComment = 93;
    public static readonly ShebangComment = 94;
    public static readonly SLEndQuote = 95;
    public static readonly SLInterpolation = 96;
    public static readonly SLUnicodeEscape = 97;
    public static readonly SLCharacterEscape = 98;
    public static readonly SLCharacters = 99;
    public static readonly MLEndQuote = 100;
    public static readonly MLInterpolation = 101;
    public static readonly MLUnicodeEscape = 102;
    public static readonly MLCharacterEscape = 103;
    public static readonly MLNewline = 104;
    public static readonly MLCharacters = 105;
    public static readonly SLString = 1;
    public static readonly MLString = 2;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "NewlineSemicolonChannel", "WhitespaceChannel", 
                                           "CommentsChannel", "ShebangChannel"
    ];

    public static readonly literalNames = [
        null, "'abstract'", "'amends'", "'as'", "'class'", "'const'", "'else'", 
        "'extends'", "'external'", "'false'", "'fixed'", "'for'", "'function'", 
        "'hidden'", "'if'", "'import'", "'import*'", "'in'", "'is'", "'let'", 
        "'local'", "'module'", "'new'", "'nothing'", "'null'", "'open'", 
        "'out'", "'outer'", "'read'", "'read*'", "'read?'", "'super'", "'this'", 
        "'throw'", "'trace'", "'true'", "'typealias'", "'unknown'", "'when'", 
        "'protected'", "'override'", "'record'", "'delete'", "'case'", "'switch'", 
        "'vararg'", "'('", "')'", "'{'", "'}'", "'['", "']'", "'[['", "','", 
        "'.'", "'?.'", "'??'", "'!!'", "'@'", "'='", "'>'", "'<'", "'!'", 
        "'?'", "':'", "'->'", "'=='", "'!='", "'<='", "'>='", "'&&'", "'||'", 
        "'+'", "'-'", "'**'", "'*'", "'/'", "'~/'", "'%'", "'|'", "'|>'", 
        "'...'", "'...?'", "'_'"
    ];

    public static readonly symbolicNames = [
        null, "ABSTRACT", "AMENDS", "AS", "CLASS", "CONST", "ELSE", "EXTENDS", 
        "EXTERNAL", "FALSE", "FIXED", "FOR", "FUNCTION", "HIDDEN_", "IF", 
        "IMPORT", "IMPORT_GLOB", "IN", "IS", "LET", "LOCAL", "MODULE", "NEW", 
        "NOTHING", "NULL", "OPEN", "OUT", "OUTER", "READ", "READ_GLOB", 
        "READ_OR_NULL", "SUPER", "THIS", "THROW", "TRACE", "TRUE", "TYPE_ALIAS", 
        "UNKNOWN", "WHEN", "PROTECTED", "OVERRIDE", "RECORD", "DELETE", 
        "CASE", "SWITCH", "VARARG", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "LBRACK", "RBRACK", "LPRED", "COMMA", "DOT", "QDOT", "COALESCE", 
        "NON_NULL", "AT", "ASSIGN", "GT", "LT", "NOT", "QUESTION", "COLON", 
        "ARROW", "EQUAL", "NOT_EQUAL", "LTE", "GTE", "AND", "OR", "PLUS", 
        "MINUS", "POW", "STAR", "DIV", "INT_DIV", "MOD", "UNION", "PIPE", 
        "SPREAD", "QSPREAD", "UNDERSCORE", "SLQuote", "MLQuote", "IntLiteral", 
        "FloatLiteral", "Identifier", "NewlineSemicolon", "Whitespace", 
        "DocComment", "BlockComment", "LineComment", "ShebangComment", "SLEndQuote", 
        "SLInterpolation", "SLUnicodeEscape", "SLCharacterEscape", "SLCharacters", 
        "MLEndQuote", "MLInterpolation", "MLUnicodeEscape", "MLCharacterEscape", 
        "MLNewline", "MLCharacters"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "SLString", "MLString",
    ];

    public static readonly ruleNames = [
        "ABSTRACT", "AMENDS", "AS", "CLASS", "CONST", "ELSE", "EXTENDS", 
        "EXTERNAL", "FALSE", "FIXED", "FOR", "FUNCTION", "HIDDEN_", "IF", 
        "IMPORT", "IMPORT_GLOB", "IN", "IS", "LET", "LOCAL", "MODULE", "NEW", 
        "NOTHING", "NULL", "OPEN", "OUT", "OUTER", "READ", "READ_GLOB", 
        "READ_OR_NULL", "SUPER", "THIS", "THROW", "TRACE", "TRUE", "TYPE_ALIAS", 
        "UNKNOWN", "WHEN", "PROTECTED", "OVERRIDE", "RECORD", "DELETE", 
        "CASE", "SWITCH", "VARARG", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
        "LBRACK", "RBRACK", "LPRED", "COMMA", "DOT", "QDOT", "COALESCE", 
        "NON_NULL", "AT", "ASSIGN", "GT", "LT", "NOT", "QUESTION", "COLON", 
        "ARROW", "EQUAL", "NOT_EQUAL", "LTE", "GTE", "AND", "OR", "PLUS", 
        "MINUS", "POW", "STAR", "DIV", "INT_DIV", "MOD", "UNION", "PIPE", 
        "SPREAD", "QSPREAD", "UNDERSCORE", "SLQuote", "MLQuote", "IntLiteral", 
        "DecimalLiteral", "DecimalDigitCharacters", "DecimalDigitCharacter", 
        "DecimalDigit", "HexadecimalLiteral", "HexadecimalCharacter", "BinaryLiteral", 
        "BinaryCharacter", "OctalLiteral", "OctalCharacter", "FloatLiteral", 
        "Exponent", "Identifier", "RegularIdentifier", "QuotedIdentifier", 
        "IdentifierStart", "IdentifierPart", "NewlineSemicolon", "Whitespace", 
        "DocComment", "BlockComment", "LineComment", "ShebangComment", "UnicodeEscape", 
        "CharacterEscape", "Pounds", "Newline", "SLEndQuote", "SLInterpolation", 
        "SLUnicodeEscape", "SLCharacterEscape", "SLCharacters", "MLEndQuote", 
        "MLInterpolation", "MLUnicodeEscape", "MLCharacterEscape", "MLNewline", 
        "MLCharacters",
    ];


    interpolationScopes: Array<StringInterpolationScope> = [];
    interpolationScope: StringInterpolationScope = StringInterpolationScope::new();

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
       case 1: return this.inputStream.LA(1) === '#';
       default:
         let poundLength = this.interpolationScope.poundLength;
         for (let i = 1; i <= poundLength; i++) {
           if (this.inputStream.LA(i) !== '#') return false;
         }
         return true;
     }
    }

    isQuote(): boolean {
     return this.inputStream.LA(1) === '"';
    }

    endsWithPounds(text: string): boolean {
     assert(text.length >= 2);

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
     let input = this.inputStream.LA(1);
     return input === '\n' || input === '\r' || input === Token.EOF;
    }


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, PklTsLexer._ATN, PklTsLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "PklTsLexer.g4"; }

    public get literalNames(): (string | null)[] { return PklTsLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return PklTsLexer.symbolicNames; }
    public get ruleNames(): string[] { return PklTsLexer.ruleNames; }

    public get serializedATN(): number[] { return PklTsLexer._serializedATN; }

    public get channelNames(): string[] { return PklTsLexer.channelNames; }

    public get modeNames(): string[] { return PklTsLexer.modeNames; }

    public override action(localContext: antlr.RuleContext | null, ruleIndex: number, actionIndex: number): void {
        switch (ruleIndex) {
        case 45:
            this.LPAREN_action(localContext, actionIndex);
            break;
        case 46:
            this.RPAREN_action(localContext, actionIndex);
            break;
        case 83:
            this.SLQuote_action(localContext, actionIndex);
            break;
        case 84:
            this.MLQuote_action(localContext, actionIndex);
            break;
        case 98:
            this.Identifier_action(localContext, actionIndex);
            break;
        case 114:
            this.SLInterpolation_action(localContext, actionIndex);
            break;
        case 119:
            this.MLInterpolation_action(localContext, actionIndex);
            break;
        }
    }
    private LPAREN_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 0:
             this.incParenLevel(); 
            break;
        }
    }
    private RPAREN_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 1:
             this.decParenLevel(); 
            break;
        }
    }
    private SLQuote_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 2:
             this.interpolationScope.poundLength = this.text.length - 1; 
            break;
        }
    }
    private MLQuote_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 3:
             this.interpolationScope.poundLength = this.text.length - 3; 
            break;
        }
    }
    private Identifier_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 4:
             this.removeBackTicks(); 
            break;
        }
    }
    private SLInterpolation_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 5:
             this.pushInterpolationScope(); 
            break;
        }
    }
    private MLInterpolation_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 6:
             this.pushInterpolationScope(); 
            break;
        }
    }
    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 101:
            return this.IdentifierStart_sempred(localContext, predIndex);
        case 102:
            return this.IdentifierPart_sempred(localContext, predIndex);
        case 107:
            return this.LineComment_sempred(localContext, predIndex);
        case 108:
            return this.ShebangComment_sempred(localContext, predIndex);
        case 111:
            return this.Pounds_sempred(localContext, predIndex);
        case 117:
            return this.SLCharacters_sempred(localContext, predIndex);
        case 123:
            return this.MLCharacters_sempred(localContext, predIndex);
        }
        return true;
    }
    private IdentifierStart_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return Character.isUnicodeIdentifierStart(this.inputStream.LA(-1));
        }
        return true;
    }
    private IdentifierPart_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return Character.isUnicodeIdentifierPart(this.inputStream.LA(-1));
        }
        return true;
    }
    private LineComment_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.isNewlineOrEof();
        }
        return true;
    }
    private ShebangComment_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.isNewlineOrEof();
        }
        return true;
    }
    private Pounds_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return  this.interpolationScope.poundLength == 0 ;
        case 5:
            return  this.interpolationScope.poundLength == 1 ;
        case 6:
            return  this.endsWithPounds(this.text) ;
        }
        return true;
    }
    private SLCharacters_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 7:
            return !this.isPounds();
        }
        return true;
    }
    private MLCharacters_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 8:
            return !this.isPounds();
        case 9:
            return !this.isQuote();
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,0,105,955,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
        4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,
        12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,
        18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,
        25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
        31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
        38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,
        44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,
        51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,
        57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,
        64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
        70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,
        77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,
        83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,
        90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,
        96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,
        102,2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,
        2,108,7,108,2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,
        7,113,2,114,7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,
        2,119,7,119,2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,1,0,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
        1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
        1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
        1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,
        1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
        1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,
        1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,
        1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,
        1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
        1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
        1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,
        1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,
        1,29,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,31,
        1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,
        1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
        1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
        1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,
        1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,
        1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,46,1,46,1,46,1,47,1,47,
        1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,51,1,52,1,52,1,53,1,53,
        1,54,1,54,1,54,1,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,1,58,1,58,
        1,59,1,59,1,60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,64,
        1,65,1,65,1,65,1,66,1,66,1,66,1,67,1,67,1,67,1,68,1,68,1,68,1,69,
        1,69,1,69,1,70,1,70,1,70,1,71,1,71,1,72,1,72,1,73,1,73,1,73,1,74,
        1,74,1,75,1,75,1,76,1,76,1,76,1,77,1,77,1,78,1,78,1,79,1,79,1,79,
        1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,83,5,83,
        628,8,83,10,83,12,83,631,9,83,1,83,1,83,1,83,1,83,1,83,1,84,5,84,
        639,8,84,10,84,12,84,642,9,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,
        1,84,1,85,1,85,1,85,1,85,3,85,656,8,85,1,86,1,86,3,86,660,8,86,1,
        87,4,87,663,8,87,11,87,12,87,664,1,88,1,88,3,88,669,8,88,1,89,1,
        89,1,90,1,90,1,90,1,90,4,90,677,8,90,11,90,12,90,678,1,91,1,91,1,
        92,1,92,1,92,1,92,4,92,687,8,92,11,92,12,92,688,1,93,1,93,1,94,1,
        94,1,94,1,94,4,94,697,8,94,11,94,12,94,698,1,95,1,95,1,96,3,96,704,
        8,96,1,96,1,96,3,96,708,8,96,1,96,1,96,3,96,712,8,96,1,96,1,96,1,
        96,3,96,717,8,96,1,97,1,97,3,97,721,8,97,1,97,3,97,724,8,97,1,97,
        1,97,1,98,1,98,1,98,1,98,3,98,732,8,98,1,99,1,99,5,99,736,8,99,10,
        99,12,99,739,9,99,1,100,1,100,4,100,743,8,100,11,100,12,100,744,
        1,100,1,100,1,101,1,101,1,101,3,101,752,8,101,1,102,1,102,1,102,
        3,102,757,8,102,1,103,4,103,760,8,103,11,103,12,103,761,1,103,1,
        103,1,104,4,104,767,8,104,11,104,12,104,768,1,104,1,104,1,105,5,
        105,774,8,105,10,105,12,105,777,9,105,1,105,1,105,1,105,1,105,1,
        105,5,105,784,8,105,10,105,12,105,787,9,105,1,105,1,105,3,105,791,
        8,105,4,105,793,8,105,11,105,12,105,794,1,106,1,106,1,106,1,106,
        1,106,5,106,802,8,106,10,106,12,106,805,9,106,1,106,1,106,1,106,
        1,106,1,106,1,107,1,107,1,107,1,107,5,107,816,8,107,10,107,12,107,
        819,9,107,1,107,1,107,1,107,1,107,1,108,1,108,1,108,1,108,5,108,
        829,8,108,10,108,12,108,832,9,108,1,108,1,108,1,108,1,108,1,109,
        1,109,1,109,1,109,1,109,1,109,5,109,844,8,109,10,109,12,109,847,
        9,109,1,109,3,109,850,8,109,1,110,1,110,1,110,1,110,1,111,1,111,
        1,111,1,111,4,111,860,8,111,11,111,12,111,861,1,111,3,111,865,8,
        111,1,112,1,112,1,112,3,112,870,8,112,3,112,872,8,112,1,113,1,113,
        1,113,3,113,877,8,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,
        1,114,1,114,1,115,1,115,1,116,1,116,1,117,4,117,893,8,117,11,117,
        12,117,894,1,117,3,117,898,8,117,1,117,1,117,1,117,3,117,903,8,117,
        3,117,905,8,117,1,118,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,121,1,121,
        1,122,1,122,1,123,4,123,929,8,123,11,123,12,123,930,1,123,3,123,
        934,8,123,1,123,1,123,1,123,1,123,3,123,940,8,123,1,123,1,123,3,
        123,944,8,123,1,123,1,123,3,123,948,8,123,1,123,1,123,3,123,952,
        8,123,3,123,954,8,123,4,785,803,817,830,0,124,3,1,5,2,7,3,9,4,11,
        5,13,6,15,7,17,8,19,9,21,10,23,11,25,12,27,13,29,14,31,15,33,16,
        35,17,37,18,39,19,41,20,43,21,45,22,47,23,49,24,51,25,53,26,55,27,
        57,28,59,29,61,30,63,31,65,32,67,33,69,34,71,35,73,36,75,37,77,38,
        79,39,81,40,83,41,85,42,87,43,89,44,91,45,93,46,95,47,97,48,99,49,
        101,50,103,51,105,52,107,53,109,54,111,55,113,56,115,57,117,58,119,
        59,121,60,123,61,125,62,127,63,129,64,131,65,133,66,135,67,137,68,
        139,69,141,70,143,71,145,72,147,73,149,74,151,75,153,76,155,77,157,
        78,159,79,161,80,163,81,165,82,167,83,169,84,171,85,173,86,175,0,
        177,0,179,0,181,0,183,0,185,0,187,0,189,0,191,0,193,0,195,87,197,
        0,199,88,201,0,203,0,205,0,207,0,209,89,211,90,213,91,215,92,217,
        93,219,94,221,0,223,0,225,0,227,0,229,95,231,96,233,97,235,98,237,
        99,239,100,241,101,243,102,245,103,247,104,249,105,3,0,1,2,14,1,
        0,48,57,4,0,48,57,65,70,95,95,97,102,2,0,48,49,95,95,2,0,48,55,95,
        95,2,0,69,69,101,101,2,0,43,43,45,45,1,0,96,96,4,0,36,36,65,90,95,
        95,97,122,5,0,36,36,48,57,65,90,95,95,97,122,3,0,10,10,13,13,59,
        59,3,0,9,9,12,12,32,32,5,0,10,10,13,13,32,32,34,34,125,125,4,0,10,
        10,13,13,34,34,92,92,2,0,34,34,92,92,985,0,3,1,0,0,0,0,5,1,0,0,0,
        0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,
        17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,
        27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,
        37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,
        47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,
        57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,
        67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,
        77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,
        87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,
        97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,
        0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,
        1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,
        0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,
        0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,
        143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,
        0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,
        1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,
        0,171,1,0,0,0,0,173,1,0,0,0,0,195,1,0,0,0,0,199,1,0,0,0,0,209,1,
        0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,
        219,1,0,0,0,1,229,1,0,0,0,1,231,1,0,0,0,1,233,1,0,0,0,1,235,1,0,
        0,0,1,237,1,0,0,0,2,239,1,0,0,0,2,241,1,0,0,0,2,243,1,0,0,0,2,245,
        1,0,0,0,2,247,1,0,0,0,2,249,1,0,0,0,3,251,1,0,0,0,5,260,1,0,0,0,
        7,267,1,0,0,0,9,270,1,0,0,0,11,276,1,0,0,0,13,282,1,0,0,0,15,287,
        1,0,0,0,17,295,1,0,0,0,19,304,1,0,0,0,21,310,1,0,0,0,23,316,1,0,
        0,0,25,320,1,0,0,0,27,329,1,0,0,0,29,336,1,0,0,0,31,339,1,0,0,0,
        33,346,1,0,0,0,35,354,1,0,0,0,37,357,1,0,0,0,39,360,1,0,0,0,41,364,
        1,0,0,0,43,370,1,0,0,0,45,377,1,0,0,0,47,381,1,0,0,0,49,389,1,0,
        0,0,51,394,1,0,0,0,53,399,1,0,0,0,55,403,1,0,0,0,57,409,1,0,0,0,
        59,414,1,0,0,0,61,420,1,0,0,0,63,426,1,0,0,0,65,432,1,0,0,0,67,437,
        1,0,0,0,69,443,1,0,0,0,71,449,1,0,0,0,73,454,1,0,0,0,75,464,1,0,
        0,0,77,472,1,0,0,0,79,477,1,0,0,0,81,487,1,0,0,0,83,496,1,0,0,0,
        85,503,1,0,0,0,87,510,1,0,0,0,89,515,1,0,0,0,91,522,1,0,0,0,93,529,
        1,0,0,0,95,532,1,0,0,0,97,535,1,0,0,0,99,537,1,0,0,0,101,539,1,0,
        0,0,103,541,1,0,0,0,105,543,1,0,0,0,107,546,1,0,0,0,109,548,1,0,
        0,0,111,550,1,0,0,0,113,553,1,0,0,0,115,556,1,0,0,0,117,559,1,0,
        0,0,119,561,1,0,0,0,121,563,1,0,0,0,123,565,1,0,0,0,125,567,1,0,
        0,0,127,569,1,0,0,0,129,571,1,0,0,0,131,573,1,0,0,0,133,576,1,0,
        0,0,135,579,1,0,0,0,137,582,1,0,0,0,139,585,1,0,0,0,141,588,1,0,
        0,0,143,591,1,0,0,0,145,594,1,0,0,0,147,596,1,0,0,0,149,598,1,0,
        0,0,151,601,1,0,0,0,153,603,1,0,0,0,155,605,1,0,0,0,157,608,1,0,
        0,0,159,610,1,0,0,0,161,612,1,0,0,0,163,615,1,0,0,0,165,619,1,0,
        0,0,167,624,1,0,0,0,169,629,1,0,0,0,171,640,1,0,0,0,173,655,1,0,
        0,0,175,657,1,0,0,0,177,662,1,0,0,0,179,668,1,0,0,0,181,670,1,0,
        0,0,183,672,1,0,0,0,185,680,1,0,0,0,187,682,1,0,0,0,189,690,1,0,
        0,0,191,692,1,0,0,0,193,700,1,0,0,0,195,716,1,0,0,0,197,718,1,0,
        0,0,199,731,1,0,0,0,201,733,1,0,0,0,203,740,1,0,0,0,205,751,1,0,
        0,0,207,756,1,0,0,0,209,759,1,0,0,0,211,766,1,0,0,0,213,792,1,0,
        0,0,215,796,1,0,0,0,217,811,1,0,0,0,219,824,1,0,0,0,221,837,1,0,
        0,0,223,851,1,0,0,0,225,864,1,0,0,0,227,871,1,0,0,0,229,876,1,0,
        0,0,231,880,1,0,0,0,233,887,1,0,0,0,235,889,1,0,0,0,237,904,1,0,
        0,0,239,906,1,0,0,0,241,914,1,0,0,0,243,921,1,0,0,0,245,923,1,0,
        0,0,247,925,1,0,0,0,249,953,1,0,0,0,251,252,5,97,0,0,252,253,5,98,
        0,0,253,254,5,115,0,0,254,255,5,116,0,0,255,256,5,114,0,0,256,257,
        5,97,0,0,257,258,5,99,0,0,258,259,5,116,0,0,259,4,1,0,0,0,260,261,
        5,97,0,0,261,262,5,109,0,0,262,263,5,101,0,0,263,264,5,110,0,0,264,
        265,5,100,0,0,265,266,5,115,0,0,266,6,1,0,0,0,267,268,5,97,0,0,268,
        269,5,115,0,0,269,8,1,0,0,0,270,271,5,99,0,0,271,272,5,108,0,0,272,
        273,5,97,0,0,273,274,5,115,0,0,274,275,5,115,0,0,275,10,1,0,0,0,
        276,277,5,99,0,0,277,278,5,111,0,0,278,279,5,110,0,0,279,280,5,115,
        0,0,280,281,5,116,0,0,281,12,1,0,0,0,282,283,5,101,0,0,283,284,5,
        108,0,0,284,285,5,115,0,0,285,286,5,101,0,0,286,14,1,0,0,0,287,288,
        5,101,0,0,288,289,5,120,0,0,289,290,5,116,0,0,290,291,5,101,0,0,
        291,292,5,110,0,0,292,293,5,100,0,0,293,294,5,115,0,0,294,16,1,0,
        0,0,295,296,5,101,0,0,296,297,5,120,0,0,297,298,5,116,0,0,298,299,
        5,101,0,0,299,300,5,114,0,0,300,301,5,110,0,0,301,302,5,97,0,0,302,
        303,5,108,0,0,303,18,1,0,0,0,304,305,5,102,0,0,305,306,5,97,0,0,
        306,307,5,108,0,0,307,308,5,115,0,0,308,309,5,101,0,0,309,20,1,0,
        0,0,310,311,5,102,0,0,311,312,5,105,0,0,312,313,5,120,0,0,313,314,
        5,101,0,0,314,315,5,100,0,0,315,22,1,0,0,0,316,317,5,102,0,0,317,
        318,5,111,0,0,318,319,5,114,0,0,319,24,1,0,0,0,320,321,5,102,0,0,
        321,322,5,117,0,0,322,323,5,110,0,0,323,324,5,99,0,0,324,325,5,116,
        0,0,325,326,5,105,0,0,326,327,5,111,0,0,327,328,5,110,0,0,328,26,
        1,0,0,0,329,330,5,104,0,0,330,331,5,105,0,0,331,332,5,100,0,0,332,
        333,5,100,0,0,333,334,5,101,0,0,334,335,5,110,0,0,335,28,1,0,0,0,
        336,337,5,105,0,0,337,338,5,102,0,0,338,30,1,0,0,0,339,340,5,105,
        0,0,340,341,5,109,0,0,341,342,5,112,0,0,342,343,5,111,0,0,343,344,
        5,114,0,0,344,345,5,116,0,0,345,32,1,0,0,0,346,347,5,105,0,0,347,
        348,5,109,0,0,348,349,5,112,0,0,349,350,5,111,0,0,350,351,5,114,
        0,0,351,352,5,116,0,0,352,353,5,42,0,0,353,34,1,0,0,0,354,355,5,
        105,0,0,355,356,5,110,0,0,356,36,1,0,0,0,357,358,5,105,0,0,358,359,
        5,115,0,0,359,38,1,0,0,0,360,361,5,108,0,0,361,362,5,101,0,0,362,
        363,5,116,0,0,363,40,1,0,0,0,364,365,5,108,0,0,365,366,5,111,0,0,
        366,367,5,99,0,0,367,368,5,97,0,0,368,369,5,108,0,0,369,42,1,0,0,
        0,370,371,5,109,0,0,371,372,5,111,0,0,372,373,5,100,0,0,373,374,
        5,117,0,0,374,375,5,108,0,0,375,376,5,101,0,0,376,44,1,0,0,0,377,
        378,5,110,0,0,378,379,5,101,0,0,379,380,5,119,0,0,380,46,1,0,0,0,
        381,382,5,110,0,0,382,383,5,111,0,0,383,384,5,116,0,0,384,385,5,
        104,0,0,385,386,5,105,0,0,386,387,5,110,0,0,387,388,5,103,0,0,388,
        48,1,0,0,0,389,390,5,110,0,0,390,391,5,117,0,0,391,392,5,108,0,0,
        392,393,5,108,0,0,393,50,1,0,0,0,394,395,5,111,0,0,395,396,5,112,
        0,0,396,397,5,101,0,0,397,398,5,110,0,0,398,52,1,0,0,0,399,400,5,
        111,0,0,400,401,5,117,0,0,401,402,5,116,0,0,402,54,1,0,0,0,403,404,
        5,111,0,0,404,405,5,117,0,0,405,406,5,116,0,0,406,407,5,101,0,0,
        407,408,5,114,0,0,408,56,1,0,0,0,409,410,5,114,0,0,410,411,5,101,
        0,0,411,412,5,97,0,0,412,413,5,100,0,0,413,58,1,0,0,0,414,415,5,
        114,0,0,415,416,5,101,0,0,416,417,5,97,0,0,417,418,5,100,0,0,418,
        419,5,42,0,0,419,60,1,0,0,0,420,421,5,114,0,0,421,422,5,101,0,0,
        422,423,5,97,0,0,423,424,5,100,0,0,424,425,5,63,0,0,425,62,1,0,0,
        0,426,427,5,115,0,0,427,428,5,117,0,0,428,429,5,112,0,0,429,430,
        5,101,0,0,430,431,5,114,0,0,431,64,1,0,0,0,432,433,5,116,0,0,433,
        434,5,104,0,0,434,435,5,105,0,0,435,436,5,115,0,0,436,66,1,0,0,0,
        437,438,5,116,0,0,438,439,5,104,0,0,439,440,5,114,0,0,440,441,5,
        111,0,0,441,442,5,119,0,0,442,68,1,0,0,0,443,444,5,116,0,0,444,445,
        5,114,0,0,445,446,5,97,0,0,446,447,5,99,0,0,447,448,5,101,0,0,448,
        70,1,0,0,0,449,450,5,116,0,0,450,451,5,114,0,0,451,452,5,117,0,0,
        452,453,5,101,0,0,453,72,1,0,0,0,454,455,5,116,0,0,455,456,5,121,
        0,0,456,457,5,112,0,0,457,458,5,101,0,0,458,459,5,97,0,0,459,460,
        5,108,0,0,460,461,5,105,0,0,461,462,5,97,0,0,462,463,5,115,0,0,463,
        74,1,0,0,0,464,465,5,117,0,0,465,466,5,110,0,0,466,467,5,107,0,0,
        467,468,5,110,0,0,468,469,5,111,0,0,469,470,5,119,0,0,470,471,5,
        110,0,0,471,76,1,0,0,0,472,473,5,119,0,0,473,474,5,104,0,0,474,475,
        5,101,0,0,475,476,5,110,0,0,476,78,1,0,0,0,477,478,5,112,0,0,478,
        479,5,114,0,0,479,480,5,111,0,0,480,481,5,116,0,0,481,482,5,101,
        0,0,482,483,5,99,0,0,483,484,5,116,0,0,484,485,5,101,0,0,485,486,
        5,100,0,0,486,80,1,0,0,0,487,488,5,111,0,0,488,489,5,118,0,0,489,
        490,5,101,0,0,490,491,5,114,0,0,491,492,5,114,0,0,492,493,5,105,
        0,0,493,494,5,100,0,0,494,495,5,101,0,0,495,82,1,0,0,0,496,497,5,
        114,0,0,497,498,5,101,0,0,498,499,5,99,0,0,499,500,5,111,0,0,500,
        501,5,114,0,0,501,502,5,100,0,0,502,84,1,0,0,0,503,504,5,100,0,0,
        504,505,5,101,0,0,505,506,5,108,0,0,506,507,5,101,0,0,507,508,5,
        116,0,0,508,509,5,101,0,0,509,86,1,0,0,0,510,511,5,99,0,0,511,512,
        5,97,0,0,512,513,5,115,0,0,513,514,5,101,0,0,514,88,1,0,0,0,515,
        516,5,115,0,0,516,517,5,119,0,0,517,518,5,105,0,0,518,519,5,116,
        0,0,519,520,5,99,0,0,520,521,5,104,0,0,521,90,1,0,0,0,522,523,5,
        118,0,0,523,524,5,97,0,0,524,525,5,114,0,0,525,526,5,97,0,0,526,
        527,5,114,0,0,527,528,5,103,0,0,528,92,1,0,0,0,529,530,5,40,0,0,
        530,531,6,45,0,0,531,94,1,0,0,0,532,533,5,41,0,0,533,534,6,46,1,
        0,534,96,1,0,0,0,535,536,5,123,0,0,536,98,1,0,0,0,537,538,5,125,
        0,0,538,100,1,0,0,0,539,540,5,91,0,0,540,102,1,0,0,0,541,542,5,93,
        0,0,542,104,1,0,0,0,543,544,5,91,0,0,544,545,5,91,0,0,545,106,1,
        0,0,0,546,547,5,44,0,0,547,108,1,0,0,0,548,549,5,46,0,0,549,110,
        1,0,0,0,550,551,5,63,0,0,551,552,5,46,0,0,552,112,1,0,0,0,553,554,
        5,63,0,0,554,555,5,63,0,0,555,114,1,0,0,0,556,557,5,33,0,0,557,558,
        5,33,0,0,558,116,1,0,0,0,559,560,5,64,0,0,560,118,1,0,0,0,561,562,
        5,61,0,0,562,120,1,0,0,0,563,564,5,62,0,0,564,122,1,0,0,0,565,566,
        5,60,0,0,566,124,1,0,0,0,567,568,5,33,0,0,568,126,1,0,0,0,569,570,
        5,63,0,0,570,128,1,0,0,0,571,572,5,58,0,0,572,130,1,0,0,0,573,574,
        5,45,0,0,574,575,5,62,0,0,575,132,1,0,0,0,576,577,5,61,0,0,577,578,
        5,61,0,0,578,134,1,0,0,0,579,580,5,33,0,0,580,581,5,61,0,0,581,136,
        1,0,0,0,582,583,5,60,0,0,583,584,5,61,0,0,584,138,1,0,0,0,585,586,
        5,62,0,0,586,587,5,61,0,0,587,140,1,0,0,0,588,589,5,38,0,0,589,590,
        5,38,0,0,590,142,1,0,0,0,591,592,5,124,0,0,592,593,5,124,0,0,593,
        144,1,0,0,0,594,595,5,43,0,0,595,146,1,0,0,0,596,597,5,45,0,0,597,
        148,1,0,0,0,598,599,5,42,0,0,599,600,5,42,0,0,600,150,1,0,0,0,601,
        602,5,42,0,0,602,152,1,0,0,0,603,604,5,47,0,0,604,154,1,0,0,0,605,
        606,5,126,0,0,606,607,5,47,0,0,607,156,1,0,0,0,608,609,5,37,0,0,
        609,158,1,0,0,0,610,611,5,124,0,0,611,160,1,0,0,0,612,613,5,124,
        0,0,613,614,5,62,0,0,614,162,1,0,0,0,615,616,5,46,0,0,616,617,5,
        46,0,0,617,618,5,46,0,0,618,164,1,0,0,0,619,620,5,46,0,0,620,621,
        5,46,0,0,621,622,5,46,0,0,622,623,5,63,0,0,623,166,1,0,0,0,624,625,
        5,95,0,0,625,168,1,0,0,0,626,628,5,35,0,0,627,626,1,0,0,0,628,631,
        1,0,0,0,629,627,1,0,0,0,629,630,1,0,0,0,630,632,1,0,0,0,631,629,
        1,0,0,0,632,633,5,34,0,0,633,634,6,83,2,0,634,635,1,0,0,0,635,636,
        6,83,3,0,636,170,1,0,0,0,637,639,5,35,0,0,638,637,1,0,0,0,639,642,
        1,0,0,0,640,638,1,0,0,0,640,641,1,0,0,0,641,643,1,0,0,0,642,640,
        1,0,0,0,643,644,5,34,0,0,644,645,5,34,0,0,645,646,5,34,0,0,646,647,
        1,0,0,0,647,648,6,84,4,0,648,649,1,0,0,0,649,650,6,84,5,0,650,172,
        1,0,0,0,651,656,3,175,86,0,652,656,3,183,90,0,653,656,3,187,92,0,
        654,656,3,191,94,0,655,651,1,0,0,0,655,652,1,0,0,0,655,653,1,0,0,
        0,655,654,1,0,0,0,656,174,1,0,0,0,657,659,3,181,89,0,658,660,3,177,
        87,0,659,658,1,0,0,0,659,660,1,0,0,0,660,176,1,0,0,0,661,663,3,179,
        88,0,662,661,1,0,0,0,663,664,1,0,0,0,664,662,1,0,0,0,664,665,1,0,
        0,0,665,178,1,0,0,0,666,669,3,181,89,0,667,669,5,95,0,0,668,666,
        1,0,0,0,668,667,1,0,0,0,669,180,1,0,0,0,670,671,7,0,0,0,671,182,
        1,0,0,0,672,673,5,48,0,0,673,674,5,120,0,0,674,676,1,0,0,0,675,677,
        3,185,91,0,676,675,1,0,0,0,677,678,1,0,0,0,678,676,1,0,0,0,678,679,
        1,0,0,0,679,184,1,0,0,0,680,681,7,1,0,0,681,186,1,0,0,0,682,683,
        5,48,0,0,683,684,5,98,0,0,684,686,1,0,0,0,685,687,3,189,93,0,686,
        685,1,0,0,0,687,688,1,0,0,0,688,686,1,0,0,0,688,689,1,0,0,0,689,
        188,1,0,0,0,690,691,7,2,0,0,691,190,1,0,0,0,692,693,5,48,0,0,693,
        694,5,111,0,0,694,696,1,0,0,0,695,697,3,193,95,0,696,695,1,0,0,0,
        697,698,1,0,0,0,698,696,1,0,0,0,698,699,1,0,0,0,699,192,1,0,0,0,
        700,701,7,3,0,0,701,194,1,0,0,0,702,704,3,175,86,0,703,702,1,0,0,
        0,703,704,1,0,0,0,704,705,1,0,0,0,705,707,5,46,0,0,706,708,5,95,
        0,0,707,706,1,0,0,0,707,708,1,0,0,0,708,709,1,0,0,0,709,711,3,175,
        86,0,710,712,3,197,97,0,711,710,1,0,0,0,711,712,1,0,0,0,712,717,
        1,0,0,0,713,714,3,175,86,0,714,715,3,197,97,0,715,717,1,0,0,0,716,
        703,1,0,0,0,716,713,1,0,0,0,717,196,1,0,0,0,718,720,7,4,0,0,719,
        721,7,5,0,0,720,719,1,0,0,0,720,721,1,0,0,0,721,723,1,0,0,0,722,
        724,5,95,0,0,723,722,1,0,0,0,723,724,1,0,0,0,724,725,1,0,0,0,725,
        726,3,175,86,0,726,198,1,0,0,0,727,732,3,201,99,0,728,729,3,203,
        100,0,729,730,6,98,6,0,730,732,1,0,0,0,731,727,1,0,0,0,731,728,1,
        0,0,0,732,200,1,0,0,0,733,737,3,205,101,0,734,736,3,207,102,0,735,
        734,1,0,0,0,736,739,1,0,0,0,737,735,1,0,0,0,737,738,1,0,0,0,738,
        202,1,0,0,0,739,737,1,0,0,0,740,742,5,96,0,0,741,743,8,6,0,0,742,
        741,1,0,0,0,743,744,1,0,0,0,744,742,1,0,0,0,744,745,1,0,0,0,745,
        746,1,0,0,0,746,747,5,96,0,0,747,204,1,0,0,0,748,752,7,7,0,0,749,
        750,9,0,0,0,750,752,4,101,0,0,751,748,1,0,0,0,751,749,1,0,0,0,752,
        206,1,0,0,0,753,757,7,8,0,0,754,755,9,0,0,0,755,757,4,102,1,0,756,
        753,1,0,0,0,756,754,1,0,0,0,757,208,1,0,0,0,758,760,7,9,0,0,759,
        758,1,0,0,0,760,761,1,0,0,0,761,759,1,0,0,0,761,762,1,0,0,0,762,
        763,1,0,0,0,763,764,6,103,7,0,764,210,1,0,0,0,765,767,7,10,0,0,766,
        765,1,0,0,0,767,768,1,0,0,0,768,766,1,0,0,0,768,769,1,0,0,0,769,
        770,1,0,0,0,770,771,6,104,8,0,771,212,1,0,0,0,772,774,7,10,0,0,773,
        772,1,0,0,0,774,777,1,0,0,0,775,773,1,0,0,0,775,776,1,0,0,0,776,
        778,1,0,0,0,777,775,1,0,0,0,778,779,5,47,0,0,779,780,5,47,0,0,780,
        781,5,47,0,0,781,785,1,0,0,0,782,784,9,0,0,0,783,782,1,0,0,0,784,
        787,1,0,0,0,785,786,1,0,0,0,785,783,1,0,0,0,786,790,1,0,0,0,787,
        785,1,0,0,0,788,791,3,227,112,0,789,791,5,0,0,1,790,788,1,0,0,0,
        790,789,1,0,0,0,791,793,1,0,0,0,792,775,1,0,0,0,793,794,1,0,0,0,
        794,792,1,0,0,0,794,795,1,0,0,0,795,214,1,0,0,0,796,797,5,47,0,0,
        797,798,5,42,0,0,798,803,1,0,0,0,799,802,3,215,106,0,800,802,9,0,
        0,0,801,799,1,0,0,0,801,800,1,0,0,0,802,805,1,0,0,0,803,804,1,0,
        0,0,803,801,1,0,0,0,804,806,1,0,0,0,805,803,1,0,0,0,806,807,5,42,
        0,0,807,808,5,47,0,0,808,809,1,0,0,0,809,810,6,106,9,0,810,216,1,
        0,0,0,811,812,5,47,0,0,812,813,5,47,0,0,813,817,1,0,0,0,814,816,
        9,0,0,0,815,814,1,0,0,0,816,819,1,0,0,0,817,818,1,0,0,0,817,815,
        1,0,0,0,818,820,1,0,0,0,819,817,1,0,0,0,820,821,4,107,2,0,821,822,
        1,0,0,0,822,823,6,107,9,0,823,218,1,0,0,0,824,825,5,35,0,0,825,826,
        5,33,0,0,826,830,1,0,0,0,827,829,9,0,0,0,828,827,1,0,0,0,829,832,
        1,0,0,0,830,831,1,0,0,0,830,828,1,0,0,0,831,833,1,0,0,0,832,830,
        1,0,0,0,833,834,4,108,3,0,834,835,1,0,0,0,835,836,6,108,10,0,836,
        220,1,0,0,0,837,838,5,92,0,0,838,839,3,225,111,0,839,840,5,117,0,
        0,840,841,5,123,0,0,841,845,1,0,0,0,842,844,8,11,0,0,843,842,1,0,
        0,0,844,847,1,0,0,0,845,843,1,0,0,0,845,846,1,0,0,0,846,849,1,0,
        0,0,847,845,1,0,0,0,848,850,5,125,0,0,849,848,1,0,0,0,849,850,1,
        0,0,0,850,222,1,0,0,0,851,852,5,92,0,0,852,853,3,225,111,0,853,854,
        9,0,0,0,854,224,1,0,0,0,855,865,4,111,4,0,856,857,5,35,0,0,857,865,
        4,111,5,0,858,860,5,35,0,0,859,858,1,0,0,0,860,861,1,0,0,0,861,859,
        1,0,0,0,861,862,1,0,0,0,862,863,1,0,0,0,863,865,4,111,6,0,864,855,
        1,0,0,0,864,856,1,0,0,0,864,859,1,0,0,0,865,226,1,0,0,0,866,872,
        5,10,0,0,867,869,5,13,0,0,868,870,5,10,0,0,869,868,1,0,0,0,869,870,
        1,0,0,0,870,872,1,0,0,0,871,866,1,0,0,0,871,867,1,0,0,0,872,228,
        1,0,0,0,873,874,5,34,0,0,874,877,3,225,111,0,875,877,3,227,112,0,
        876,873,1,0,0,0,876,875,1,0,0,0,877,878,1,0,0,0,878,879,6,113,11,
        0,879,230,1,0,0,0,880,881,5,92,0,0,881,882,3,225,111,0,882,883,5,
        40,0,0,883,884,6,114,12,0,884,885,1,0,0,0,885,886,6,114,13,0,886,
        232,1,0,0,0,887,888,3,221,109,0,888,234,1,0,0,0,889,890,3,223,110,
        0,890,236,1,0,0,0,891,893,8,12,0,0,892,891,1,0,0,0,893,894,1,0,0,
        0,894,892,1,0,0,0,894,895,1,0,0,0,895,897,1,0,0,0,896,898,3,237,
        117,0,897,896,1,0,0,0,897,898,1,0,0,0,898,905,1,0,0,0,899,900,7,
        13,0,0,900,902,4,117,7,0,901,903,3,237,117,0,902,901,1,0,0,0,902,
        903,1,0,0,0,903,905,1,0,0,0,904,892,1,0,0,0,904,899,1,0,0,0,905,
        238,1,0,0,0,906,907,5,34,0,0,907,908,5,34,0,0,908,909,5,34,0,0,909,
        910,1,0,0,0,910,911,3,225,111,0,911,912,1,0,0,0,912,913,6,118,11,
        0,913,240,1,0,0,0,914,915,5,92,0,0,915,916,3,225,111,0,916,917,5,
        40,0,0,917,918,6,119,14,0,918,919,1,0,0,0,919,920,6,119,13,0,920,
        242,1,0,0,0,921,922,3,221,109,0,922,244,1,0,0,0,923,924,3,223,110,
        0,924,246,1,0,0,0,925,926,3,227,112,0,926,248,1,0,0,0,927,929,8,
        12,0,0,928,927,1,0,0,0,929,930,1,0,0,0,930,928,1,0,0,0,930,931,1,
        0,0,0,931,933,1,0,0,0,932,934,3,249,123,0,933,932,1,0,0,0,933,934,
        1,0,0,0,934,954,1,0,0,0,935,940,5,92,0,0,936,937,5,34,0,0,937,938,
        5,34,0,0,938,940,5,34,0,0,939,935,1,0,0,0,939,936,1,0,0,0,940,941,
        1,0,0,0,941,943,4,123,8,0,942,944,3,249,123,0,943,942,1,0,0,0,943,
        944,1,0,0,0,944,954,1,0,0,0,945,947,5,34,0,0,946,948,5,34,0,0,947,
        946,1,0,0,0,947,948,1,0,0,0,948,949,1,0,0,0,949,951,4,123,9,0,950,
        952,3,249,123,0,951,950,1,0,0,0,951,952,1,0,0,0,952,954,1,0,0,0,
        953,928,1,0,0,0,953,939,1,0,0,0,953,945,1,0,0,0,954,250,1,0,0,0,
        51,0,1,2,629,640,655,659,664,668,678,688,698,703,707,711,716,720,
        723,731,737,744,751,756,761,768,775,785,790,794,801,803,817,830,
        845,849,861,864,869,871,876,894,897,902,904,930,933,939,943,947,
        951,953,15,1,45,0,1,46,1,1,83,2,5,1,0,1,84,3,5,2,0,1,98,4,0,2,0,
        0,3,0,0,4,0,0,5,0,4,0,0,1,114,5,5,0,0,1,119,6
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!PklTsLexer.__ATN) {
            PklTsLexer.__ATN = new antlr.ATNDeserializer().deserialize(PklTsLexer._serializedATN);
        }

        return PklTsLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(PklTsLexer.literalNames, PklTsLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return PklTsLexer.vocabulary;
    }

    private static readonly decisionsToDFA = PklTsLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}