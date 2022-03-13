import { Grid } from './interfaces/grid';
import { ScheduleParams } from './interfaces/parameters';
import { ParametersManager } from './ParametersManager';
declare class Schedule {
    paramsManager?: ParametersManager;
    grid?: Grid;
    element?: HTMLDivElement;
    create(element: HTMLDivElement, params: ScheduleParams): void;
    render(): void;
    refresh(): void;
}
export { Schedule };
