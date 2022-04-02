import { GridEvent } from '../interfaces/events';
import { ScheduleParams } from '../interfaces/parameters';
import { ScheduleView } from '../interfaces/types';
import { CalendarManager } from './CalendarManager';
import { Parameters } from './Parameters';

class ParametersManager extends Parameters {
    calendarManager: CalendarManager;

    constructor(params: ScheduleParams, calendarManager: CalendarManager) {
        super(params);
        this.calendarManager = calendarManager;
    }

    getCalendarManager(): CalendarManager {
        return this.calendarManager;
    }

    getView(): ScheduleView {
        return this.params.view;
    }

    getHoursOfDay(): number {
        return 24;
    }

    getDaysOfWeek(): number {
        return this.params.view === ScheduleView.Day ? 1 : 7;
    }

    hasHeader(): boolean {
        return !this.params.hideHeader;
    }

    getEvents(): GridEvent[] {
        return this.params.events || [];
    }

    getDate(): Date {
        return this.params.date;
    }

    fireOnClickBlock(date: Date): void {
        this.params.onClickBlock && this.params.onClickBlock(date);
    }

    fireOnDblClickBlock(date: Date): void {
        this.params.onDblClickBlock && this.params.onDblClickBlock(date);
    }
}

export { ParametersManager };
