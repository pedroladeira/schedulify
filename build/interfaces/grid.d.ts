interface MinutesParams {
    date?: Date;
    className?: string;
}
interface GridBlockMinutes {
    params: MinutesParams;
    element?: HTMLDivElement;
}
interface BlockParams {
    className?: string;
}
interface GridBlock {
    params: BlockParams;
    element?: HTMLDivElement;
    minutes: GridBlockMinutes[];
}
interface ColumnParams {
    date: Date;
}
interface GridColumn {
    params: ColumnParams;
    className?: string;
    element?: HTMLDivElement;
    blocks: GridBlock[];
}
declare type Grid = GridColumn[];
export type { Grid, GridColumn, GridBlock, GridBlockMinutes };
