import { Grid, GridBlock, GridBlockMinutes, GridColumn } from '../interfaces/grid';

class GridBuilder {
    static build(columns: number, blocks: number): Grid {
        const grid: Grid = Array(columns).fill({
            blocks: Array(blocks).fill({
                minutes: [
                    GridBuilder.getBlockMinutesByIndex(0),
                    GridBuilder.getBlockMinutesByIndex(1),
                    GridBuilder.getBlockMinutesByIndex(2),
                    GridBuilder.getBlockMinutesByIndex(3),
                ]
            } as GridBlock)
        } as GridColumn);
        return grid;
    }

    private static getBlockMinutesByIndex(index: number): GridBlockMinutes {
        return {
            params: {}
        };
    }
}

export { GridBuilder };
