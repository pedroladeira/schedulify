import { ScheduleParams } from '../interfaces/parameters';
import { Parameters } from './Parameters';
declare class CalendarManager extends Parameters {
    constructor(params: ScheduleParams);
    getSelectedDate(): Date;
    getWeekDateByWeekIndex(index: number, date?: Date): Date;
    static getDayOfWeek(date: Date): number;
    static getHourOfDay(date: Date): number;
    static getMinutes(date: Date): number;
    static getSelectedDate(): Date;
    static getWeekDateByWeekIndex(index: number, date?: Date): Date;
    static getHourDateByWeekIndex(index: number, date: Date, hour: number): Date;
    static isToday(date: Date): boolean;
}
export { CalendarManager };
