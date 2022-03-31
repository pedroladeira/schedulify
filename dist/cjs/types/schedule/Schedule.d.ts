import { ScheduleParams } from '../interfaces/parameters';
import { ScheduleGrid } from '../interfaces/schedule';
import { ParametersManager } from '../managers/ParametersManager';
import { ScheduleRender } from '../renders/ScheduleRender';
import { ScheduleEventRender } from '../renders/ScheduleEventRender';
import { CalendarManager } from '../managers/CalendarManager';
declare class Schedule {
    paramsManager?: ParametersManager;
    calendarManager?: CalendarManager;
    scheduleGrid?: ScheduleGrid;
    scheduleRender?: ScheduleRender;
    scheduleEventRender?: ScheduleEventRender;
    element?: HTMLDivElement;
    created: boolean;
    create(element: HTMLDivElement, params: ScheduleParams): void;
    rebuild(): void;
    updateParameters(params: ScheduleParams): void;
    render(): void;
    refreshData(): void;
}
export { Schedule };
