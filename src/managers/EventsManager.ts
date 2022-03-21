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

    static updatePosition(event: GridEvent): void {
        const colWidth = UiHelper.getGridColumnWidth();
        const colHeight = UiHelper.getGridColumnHeight();
        const colTop = CalendarManager.getHourOfDay(event.startDate) * colHeight;
        const colNumber = CalendarManager.getDayOfWeek(event.startDate);
        const endHeight = (CalendarManager.getHourOfDay(event.endDate) * colHeight) - colTop;
        if (event.position) {
            event.position.top = colTop;
            event.position.left = UiHelper.getAsideWidth() + (colWidth * colNumber);
            event.position.width = colWidth;
            event.position.height = endHeight;
        }
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
