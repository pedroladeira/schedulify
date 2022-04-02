import moment from 'moment';
import { GridEvent } from '../interfaces/events';
import { ParametersManager } from './ParametersManager';
import { UiHelper } from '../helpers/UiHelper';
import { ScheduleView } from '../interfaces/types';
import { Grid } from '../interfaces/grid';

class EventsManager {

    static addEventsPosition(events: GridEvent[], params: ParametersManager): void {
        events.map((event) => {
            EventsManager.createDefaultPosition(event, params);
        });
    }

    static updatePosition(event: GridEvent, grid: Grid, numCollides = 0): void {
        const colWidth = UiHelper.getGridColumnWidth();
        const evtWidth = colWidth / numCollides;
        const minHeight = UiHelper.getGridBlockHeight() / 4;
        const endHeight = (event.duration * minHeight) / 15;
        grid.forEach((g) => {
            g.blocks.forEach((blk) => {
                blk.minutes.forEach((min) => {
                    const initDate = moment(min.params.date);
                    const endDate = initDate.clone().add(15, 'minutes');
                    if (min.element && moment(event.startDate).isSameOrAfter(initDate) && moment(event.startDate).isBefore(endDate)) {
                        event.position = {
                            top: min.element.offsetTop,
                            left: min.element.offsetLeft,
                            width: evtWidth,
                            height: endHeight,
                        };
                    }
                });
            });
        });
    }

    static groupCollideEvents(events: GridEvent[]): GridEvent[][] {
        const listOfCollides: GridEvent[][] = [];
        const listEvents = [...events];

        for (let a = 0; a < events.length; a++) {
            for (let b = a + 1; b < events.length; b++) {

                if (EventsManager.eventsCollide(events[a], events[b])) {
                    EventsManager.addEventCollision(events[a], events[b]);
                    EventsManager.addEventCollision(events[b], events[a]);
                }
            }
        }

        while (listEvents.length > 0) {
            const event = listEvents.shift();
            if (event) {
                if (event.collideIds) {
                    const group: GridEvent[] = [];
                    group.push(event);
                    while (event.collideIds.length > 0) {
                        const collideId = event.collideIds.shift();
                        if (collideId) {
                            const finded = listEvents.find((ev) => ev.id === collideId);
                            if (finded) {
                                group.push(finded);
                                listEvents.splice(listEvents.indexOf(finded), 1);
                            }
                        }
                    }
                    listOfCollides.push(group);
                } else {
                    listOfCollides.push([event]);
                }
            }
        }

        return listOfCollides;
    }

    private static addEventCollision(event: GridEvent, collision: GridEvent): void {
        !event.collideIds && (event.collideIds = []);
        const id: string = collision.id || '';
        !event.collideIds.includes(id) && (event.collideIds?.push(id));
    }

    private static eventsCollide(a: GridEvent, b: GridEvent): boolean {
        const aEnd = moment(a.startDate).add('minutes', a.duration).toDate();
        const bEnd = moment(b.startDate).add('minutes', b.duration).toDate();
        return (a.startDate < b.startDate && aEnd >= b.startDate) ||
            (a.startDate > b.startDate && a.startDate <= bEnd) ||
            (a.startDate > b.startDate && aEnd <= bEnd);
    }

    private static createDefaultPosition(event: GridEvent, params: ParametersManager): void {
        event.position = {
            top: 0,
            left: 0,
            width: UiHelper.getGridColumnWidth(),
            height: 100,
        };
    }
}

export { EventsManager };
