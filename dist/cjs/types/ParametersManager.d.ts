import { ScheduleParams } from './interfaces/parameters';
declare class ParametersManager {
    params: ScheduleParams;
    constructor(params: ScheduleParams);
    getHoursOfDay(): number;
    getDaysOfWeek(): number;
}
export { ParametersManager };
