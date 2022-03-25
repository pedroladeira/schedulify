import { Grid, GridBlock, GridBlockMinutes, GridColumn } from '../interfaces/grid';
import { CalendarManager } from '../managers/CalendarManager';

class GridBuilder {
    static build(columns: number, blocks: number, date: Date): Grid {
        const grid: Grid = Array(columns).fill(0).map((_, i) => {
            const col: GridColumn = {
                blocks: Array(blocks).fill(0).map((_, x) => {
                    const bl: GridBlock = {
                        minutes: [
                            GridBuilder.getBlockMinutesByIndex(0),
                            GridBuilder.getBlockMinutesByIndex(1),
                            GridBuilder.getBlockMinutesByIndex(2),
                            GridBuilder.getBlockMinutesByIndex(3),
                        ],
                        params: {
                            date: CalendarManager.getHourDateByWeekIndex(i, date, x)
                        }
                    }
                    return bl;
                }),
                params: {
                    date: CalendarManager.getWeekDateByWeekIndex(i, date)
                }
            }
            return col;
        });
        return grid;
    }

    private static getBlockMinutesByIndex(index: number): GridBlockMinutes {
        return {
            params: {}
        };
    }
}

export { GridBuilder };
