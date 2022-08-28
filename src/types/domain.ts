export namespace Domain {
  export type CellType = 0 | 1 | 2 | 3;

  export type ArtType = ReadonlyArray<ReadonlyArray<CellType>>;

  export type ColorsType = readonly [string, string, string];

  export type LevelType = {
    readonly id: string;
    readonly name: string;
    readonly colors: ColorsType;
    readonly art: ArtType;
  };
}
