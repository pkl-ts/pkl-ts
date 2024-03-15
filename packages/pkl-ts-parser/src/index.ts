export * from './pkl-ts-parser';
export { pklParser } from './pkl-parser';

// @ts-expect-error
export const PKL_TS_VERSION: string = __APP_VERSION__;
export const PKL_VERSION: string = '0.25.2';
