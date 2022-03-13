import { GridBuilder } from './GridBuilder';
import { Grid } from './interfaces/grid';
import { ScheduleParams } from './interfaces/parameters';
import { ParametersManager } from './ParametersManager';
import { ScheduleRender } from './ScheduleRender';

class Schedule {
    paramsManager?: ParametersManager;
    grid?: Grid;
    element?: HTMLDivElement;

    create(element: HTMLDivElement, params: ScheduleParams): void {
        this.paramsManager = new ParametersManager(params);
        this.grid = GridBuilder.build(
            this.paramsManager.getDaysOfWeek(), this.paramsManager.getHoursOfDay()
        );
        this.element = element;
    }

    render(): void {
        if (this.element && this.grid)
            ScheduleRender.render(this.element, this.grid);
    }

    refresh(): void {
        throw new Error('Method not implemented.');
    }
}

export { Schedule };
