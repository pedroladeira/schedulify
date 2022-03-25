import { Grid } from '../interfaces/grid';
declare class GridBuilder {
    static build(columns: number, blocks: number, date: Date): Grid;
    private static getBlockMinutesByIndex;
}
export { GridBuilder };
