import { readFileSync, writeFileSync } from 'node:fs';

main();

function main() {
  const path = 'src/antlr4/ts/PklTsParser.ts'
  const input = readFileSync(path, 'utf8');
  const output = fixErrors(input);
  // write
  writeFileSync(path, output);
}

function fixErrors(input) {
  const errors = [
    '(localContext as FunctionTypeContext)._ps.push((localContext as FunctionTypeContext)._type_);',
    '(localContext as FunctionTypeContext)._errs.push((localContext as FunctionTypeContext)._s53);',
    '(localContext as FunctionTypeContext)._ps.push((localContext as FunctionTypeContext)._type_);',
    '(localContext as ConstrainedTypeContext)._es.push((localContext as ConstrainedTypeContext)._expr);',
    '(localContext as ConstrainedTypeContext)._errs.push((localContext as ConstrainedTypeContext)._s53);',
    '(localContext as ConstrainedTypeContext)._es.push((localContext as ConstrainedTypeContext)._expr);',
  ];
  const fixed = [
    '(localContext as FunctionTypeContext)._ps.push((localContext as FunctionTypeContext)._type_!);',
    '(localContext as FunctionTypeContext)._errs.push((localContext as FunctionTypeContext)._s53!);',
    '(localContext as FunctionTypeContext)._ps.push((localContext as FunctionTypeContext)._type_!);',
    '(localContext as ConstrainedTypeContext)._es.push((localContext as ConstrainedTypeContext)._expr!);',
    '(localContext as ConstrainedTypeContext)._errs.push((localContext as ConstrainedTypeContext)._s53!);',
    '(localContext as ConstrainedTypeContext)._es.push((localContext as ConstrainedTypeContext)._expr!);',
  ];

  for (let i = 0; i < errors.length; i++) {
    input = input.replace(errors[i], fixed[i]);
  }

  return input;
}