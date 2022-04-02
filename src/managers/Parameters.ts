import { ScheduleParams } from '../interfaces/parameters';

abstract class Parameters {
    params: ScheduleParams;

    constructor(params: ScheduleParams) {
        this.params = params;
    }

    public updateParameters(params: ScheduleParams) {
        this.params = params;
    }
}

export { Parameters };
