import { GridEvent } from '../interfaces/events';
import { ParametersManager } from './ParametersManager';
import { Grid } from '../interfaces/grid';
declare class EventsManager {
    static addEventsPosition(events: GridEvent[], params: ParametersManager): void;
    static updatePosition(event: GridEvent, grid: Grid, numCollides?: number): void;
    static groupCollideEvents(events: GridEvent[]): GridEvent[][];
    private static addEventCollision;
    private static eventsCollide;
    private static createDefaultPosition;
}
export { EventsManager };
