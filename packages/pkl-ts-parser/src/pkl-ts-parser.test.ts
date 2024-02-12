import { describe, expect, it } from 'vitest';
import { pklTsParser } from './pkl-ts-parser';

describe('pklTsParser', () => {
  it('return pkl-ts-parser', () => {
    expect(pklTsParser()).toBe('pkl-ts-parser');
  });
});
