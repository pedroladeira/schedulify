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

interface GridColumn {
    className?: string;
    element?: HTMLDivElement;
    blocks: GridBlock[];
}

type Grid = GridColumn[];

export type { Grid, GridColumn, GridBlock, GridBlockMinutes };
