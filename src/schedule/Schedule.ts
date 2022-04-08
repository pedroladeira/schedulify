import { EventsManager } from '../managers/EventsManager';
import { GridBuilder } from '../builders/GridBuilder';
import { InterfaceBuilder } from '../builders/InterfaceBuilder';
import { ScheduleParams } from '../interfaces/parameters';
import { ScheduleGrid } from '../interfaces/schedule';
import { ParametersManager } from '../managers/ParametersManager';
import { ScheduleRender } from '../renders/ScheduleRender';
import { ScheduleEventRender } from '../renders/ScheduleEventRender';
import { CalendarManager } from '../managers/CalendarManager';

class Schedule {
    paramsManager?: ParametersManager;
    calendarManager?: CalendarManager;
    scheduleGrid?: ScheduleGrid;
    scheduleRender?: ScheduleRender;
    scheduleEventRender?: ScheduleEventRender;
    element?: HTMLDivElement;
    created = false;

    create(element: HTMLDivElement, params: ScheduleParams): void {
        this.calendarManager = new CalendarManager(params);
        this.paramsManager = new ParametersManager(params, this.calendarManager);
        this.scheduleRender = new ScheduleRender(this.paramsManager);
        this.scheduleEventRender = new ScheduleEventRender(this.paramsManager);
        EventsManager.addEventsPosition(this.paramsManager.getEvents(), this.paramsManager);

        this.rebuild();

        this.element = element;
        this.created = true;
    }

    rebuild(): void {
        if (!this.paramsManager) return;

        this.scheduleGrid = {
            grid: GridBuilder.build(
                this.paramsManager.getDaysOfWeek(), this.paramsManager.getHoursOfDay(),
                this.paramsManager.getDate(),
                this.paramsManager.getView(),
            ),
            ui: InterfaceBuilder.build(this.paramsManager),
            events: this.paramsManager.getEvents(),
        };
    }

    updateParameters(params: ScheduleParams): void {
        this.paramsManager?.updateParameters(params);
        this.calendarManager?.updateParameters(params);
    }

    render(): void {
        if (this.element && this.scheduleGrid && this.scheduleRender && this.scheduleEventRender) {
            this.scheduleRender.render(this.element, this.scheduleGrid);
            this.scheduleEventRender.renderEvents(this.element, this.scheduleGrid);
        }
    }

    refreshData(): void {
        if (this.element && this.scheduleGrid && this.scheduleEventRender && this.created) {
            this.scheduleEventRender.renderEvents(this.element, this.scheduleGrid);
        }
    }
}

export { Schedule };
