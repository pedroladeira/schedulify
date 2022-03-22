import { uniqueId } from './../helpers/UniqueId';
import { GridEvent } from "../interfaces/events";
import { ParametersManager } from "./ParametersManager";
import { UiHelper } from "../helpers/UiHelper";
import { CalendarManager } from "./CalendarManager";

class EventsManager {

    static setEventsPosition(events: GridEvent[], params: ParametersManager): void {
        events.map((event) => {
            EventsManager.createDefaultPosition(event, params);
        });
    }

    static updatePosition(event: GridEvent, numCollides: number = 0, index: number = 0): void {
        const colWidth = UiHelper.getGridColumnWidth();
        const colHeight = UiHelper.getGridColumnHeight();
        const colTop = CalendarManager.getHourOfDay(event.startDate) * colHeight;
        const colNumber = CalendarManager.getDayOfWeek(event.startDate);
        const endHeight = (CalendarManager.getHourOfDay(event.endDate) * colHeight) - colTop;
        const evtWidth = colWidth / numCollides;
        if (event.position) {
            event.position.top = colTop;
            event.position.left = UiHelper.getAsideWidth() + (colWidth * colNumber) + (evtWidth * index);
            event.position.width = evtWidth;
            event.position.height = endHeight;
        }
    }

    static groupCollideEvents(events: GridEvent[]): GridEvent[][] {
        const listOfCollides: GridEvent[][] = [];
        const listEvents = [...events];

        for (var a = 0; a < events.length; a++) {
            for (var b = a + 1; b < events.length; b++) {

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

        console.log({ listOfCollides });
        return listOfCollides;
    }

    private static addEventCollision(event: GridEvent, collision: GridEvent): void {
        !event.collideIds && (event.collideIds = []);
        const id: string = collision.id;
        !event.collideIds.includes(id) && (event.collideIds?.push(id));
    }

    private static eventsCollide(a: GridEvent, b: GridEvent): boolean {
        return (a.startDate < b.startDate && a.endDate >= b.startDate) ||
            (a.startDate > b.startDate && a.startDate <= b.endDate) ||
            (a.startDate > b.startDate && a.endDate <= b.endDate);
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

export { EventsManager }
