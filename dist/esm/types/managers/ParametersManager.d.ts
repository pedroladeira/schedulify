import { GridEvent } from '../interfaces/events';
import { ScheduleParams } from '../interfaces/parameters';
import { ScheduleView } from '../interfaces/types';
import { CalendarManager } from './CalendarManager';
import { Parameters } from './Parameters';
declare class ParametersManager extends Parameters {
    calendarManager: CalendarManager;
    constructor(params: ScheduleParams, calendarManager: CalendarManager);
    getCalendarManager(): CalendarManager;
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
