import { EventsManager } from '../managers/EventsManager';
import { GridBuilder } from '../builders/GridBuilder';
import { InterfaceBuilder } from '../builders/InterfaceBuilder';
import { Grid } from '../interfaces/grid';
import { ScheduleParams } from '../interfaces/parameters';
import { ScheduleGrid } from '../interfaces/schedule';
import { ParametersManager } from '../managers/ParametersManager';
import { ScheduleRender } from '../renders/ScheduleRender';

class Schedule {
    paramsManager?: ParametersManager;
    scheduleGrid?: ScheduleGrid;
    element?: HTMLDivElement;
    created: boolean = false;

    create(element: HTMLDivElement, params: ScheduleParams): void {
        this.paramsManager = new ParametersManager(params);
        EventsManager.setEventsPosition(this.paramsManager.getEvents(), this.paramsManager);

        this.scheduleGrid = {
            grid: GridBuilder.build(
                this.paramsManager.getDaysOfWeek(), this.paramsManager.getHoursOfDay()
            ),
            ui: InterfaceBuilder.build(this.paramsManager),
            events: this.paramsManager.getEvents(),
        }
        this.element = element;
        this.created = true;
    }

    render(): void {
        if (this.element && this.scheduleGrid) {
            ScheduleRender.render(this.element, this.scheduleGrid);
            ScheduleRender.renderEvents(this.element, this.scheduleGrid);
        }
    }

    refreshData(): void {
        if (this.element && this.scheduleGrid && this.created) {
            ScheduleRender.renderEvents(this.element, this.scheduleGrid);
        }
    }
}

export { Schedule };
