import { ScheduleParams } from '../interfaces/parameters';
declare abstract class Parameters {
    params: ScheduleParams;
    constructor(params: ScheduleParams);
    updateParameters(params: ScheduleParams): void;
}
export { Parameters };
