

interface BlockParams {
    className?: string;
}

interface GridBlock {
    params: BlockParams;
    element?: HTMLDivElement;
}

interface GridColumn {
    className?: string;
    element?: HTMLDivElement;
    blocks: GridBlock[];
}

type Grid = GridColumn[];

export type { Grid, GridColumn, GridBlock };
