import { GridEvent } from "../interfaces/events";
import { ParametersManager } from "./ParametersManager";
import { ScheduleView } from '../interfaces/types';
declare class EventsManager {
    static addEventsPosition(events: GridEvent[], params: ParametersManager): void;
    static setNewEventPosition(event: GridEvent, top: number, left: number): void;
    static updatePosition(event: GridEvent, view: ScheduleView, numCollides?: number, index?: number): void;
    static groupCollideEvents(events: GridEvent[]): GridEvent[][];
    private static addEventCollision;
    private static eventsCollide;
    private static createDefaultPosition;
}
export { EventsManager };
