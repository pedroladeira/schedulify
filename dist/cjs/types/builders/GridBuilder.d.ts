import { Grid } from '../interfaces/grid';
import { ScheduleView } from '../interfaces/types';
declare class GridBuilder {
    static build(columns: number, blocks: number, date: Date, view: ScheduleView): Grid;
    private static getBlockMinutesByIndex;
}
export { GridBuilder };
