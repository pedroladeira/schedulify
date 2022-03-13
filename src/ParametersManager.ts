import { ScheduleParams } from './interfaces/parameters';

class ParametersManager {
    params: ScheduleParams;

    constructor(params: ScheduleParams) {
        this.params = params;
    }

    getHoursOfDay(): number {
        return 24;
    }

    getDaysOfWeek(): number {
        return 7;
    }
}

export { ParametersManager };
