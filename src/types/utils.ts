export type ObjectWithGivenValues<O extends { [key: string]: any }, T> = {
  [key in keyof O]: T;
};

export type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

export type ProtoExtends<T extends { [key: string]: any }, U extends { [key: string]: any }> = U & Omit<T, keyof U>;

export type Pagination<T> = { count: number; rows: ReadonlyArray<T> };

export type Writable<T> = { -readonly [P in keyof T]: T[P] };

export type PropsType<T> = T extends (...props: infer U) => any ? U : never;
