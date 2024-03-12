import { describe, expect, it } from 'vitest';
import { pklTsAstexplorer } from './pkl-ts-astexplorer';

describe('pklTsAstexplorer', () => {
  it('return pkl-ts-astexplorer', () => {
    expect(pklTsAstexplorer()).toBe('pkl-ts-astexplorer');
  });
});
