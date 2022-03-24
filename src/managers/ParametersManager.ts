import { GridEvent } from '../interfaces/events';
import { ScheduleParams } from '../interfaces/parameters';
import { ScheduleView } from '../interfaces/types';

class ParametersManager {
    params: ScheduleParams;

    constructor(params: ScheduleParams) {
        this.params = params;
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
}

export { ParametersManager };
