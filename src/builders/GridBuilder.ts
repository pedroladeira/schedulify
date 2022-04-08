import moment from 'moment';
import { Grid, GridBlock, GridBlockMinutes, GridColumn } from '../interfaces/grid';
import { ScheduleView } from '../interfaces/types';
import { CalendarManager } from '../managers/CalendarManager';

class GridBuilder {
    static build(columns: number, blocks: number, date: Date, view: ScheduleView): Grid {
        const grid: Grid = Array(columns).fill(0).map((_, i) => {
            const colDate = (view === ScheduleView.Week ? CalendarManager.getWeekDateByWeekIndex(i, date) : date);
            const col: GridColumn = {
                blocks: Array(blocks).fill(0).map((_, x) => {
                    const dateBlock = CalendarManager.getDateByHourIndex(colDate, x);
                    const bl: GridBlock = {
                        minutes: [
                            GridBuilder.getBlockMinutesByIndex(0, dateBlock),
                            GridBuilder.getBlockMinutesByIndex(1, dateBlock),
                            GridBuilder.getBlockMinutesByIndex(2, dateBlock),
                            GridBuilder.getBlockMinutesByIndex(3, dateBlock),
                        ],
                        params: {
                            date: dateBlock
                        }
                    };
                    return bl;
                }),
                params: {
                    date: colDate
                }
            };
            return col;
        });
        return grid;
    }

    private static getBlockMinutesByIndex(index: number, date: Date): GridBlockMinutes {
        return {
            params: {
                date: moment(date).clone().set('minutes', 15 * index).format()
            }
        };
    }
}

export { GridBuilder };
