import { GridEvent } from '../interfaces/events';
import { ScheduleParams } from '../interfaces/parameters';
import { ScheduleView } from '../interfaces/types';
declare class ParametersManager {
    params: ScheduleParams;
    constructor(params: ScheduleParams);
    getView(): ScheduleView;
    getHoursOfDay(): number;
    getDaysOfWeek(): number;
    hasHeader(): boolean;
    getEvents(): GridEvent[];
    getDate(): Date;
    fireOnClickBlock(date: Date): void;
    fireOnDblClickBlock(date: Date): void;
}
export { ParametersManager };
