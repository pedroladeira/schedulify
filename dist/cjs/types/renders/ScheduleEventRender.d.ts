import { ScheduleGrid } from '../interfaces/schedule';
import { GridEvent } from '../interfaces/events';
import { Render } from './Render';
declare class ScheduleEventRender extends Render {
    selectedElement?: HTMLDivElement;
    selectedEvent?: GridEvent;
    hasMoved?: boolean;
    renderEvents(element: HTMLDivElement, schedule: ScheduleGrid): void;
    static removeAllEventsNode(container: HTMLDivElement): void;
    private static createElementEvent;
}
export { ScheduleEventRender };
