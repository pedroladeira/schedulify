import { Grid, GridBlock, GridColumn } from '../interfaces/grid';

class GridBuilder {
    static build(columns: number, blocks: number): Grid {
        const grid: Grid = Array(columns).fill({
            blocks: Array(blocks).fill({} as GridBlock)
        } as GridColumn);
        return grid;
    }
}

export { GridBuilder };
