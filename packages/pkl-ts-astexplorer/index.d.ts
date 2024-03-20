import { PKL_TS_VERSION } from '@pkl-ts/parser';
import { PKL_VERSION } from '@pkl-ts/parser';
import { ReplInputContext } from '@pkl-ts/parser';

export declare function getNodeName(node: unknown): string | undefined;

export declare function getNodeRange(node: unknown): number[] | undefined;

export declare function getProperties(node: unknown): Generator<
  {
    value: any;
    key: string;
    computed: boolean;
  },
  void,
  unknown
>;

export declare function parse(input: string): ReplInputContext;

export { PKL_TS_VERSION };

export { PKL_VERSION };

export {};
