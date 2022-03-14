import { GridBuilder } from './GridBuilder';
import { InterfaceBuilder } from './InterfaceBuilder';
import { Grid } from './interfaces/grid';
import { ScheduleParams } from './interfaces/parameters';
import { ScheduleGrid } from './interfaces/schedule';
import { ParametersManager } from './ParametersManager';
import { ScheduleRender } from './ScheduleRender';

class Schedule {
    paramsManager?: ParametersManager;
    scheduleGrid?: ScheduleGrid;
    element?: HTMLDivElement;

    create(element: HTMLDivElement, params: ScheduleParams): void {
        this.paramsManager = new ParametersManager(params);
        this.scheduleGrid = {
            grid: GridBuilder.build(
                this.paramsManager.getDaysOfWeek(), this.paramsManager.getHoursOfDay()
            ),
            ui: InterfaceBuilder.build(params),
        }
        this.element = element;
    }

    render(): void {
        if (this.element && this.scheduleGrid) {
            ScheduleRender.render(this.element, this.scheduleGrid);
        }
    }

    refresh(): void {
        throw new Error('Method not implemented.');
    }
}

export { Schedule };
