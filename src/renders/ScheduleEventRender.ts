import { EventsManager } from '../managers/EventsManager';
import { ScheduleGrid } from '../interfaces/schedule';
import { ScheduleEvent } from '../interfaces/events';
import { Render } from './Render';

class ScheduleEventRender extends Render {
    selectedElement?: HTMLDivElement;
    selectedEvent?: ScheduleEvent;

    renderEvents(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const elemContainer = element.querySelector('.ss-events-container');
        const elemGrid = element.querySelector('.ss-grid') as HTMLDivElement;
        if (elemContainer && elemGrid) {
            elemGrid.addEventListener('mousemove', (ev) => {
                const target = ev.target as HTMLDivElement;
                if (!target.classList.contains('ss-block-minutes') || !this.selectedElement || !this.selectedEvent) return;
                this.selectedElement.style.top = `${target.offsetTop}px`;
                this.selectedElement.style.left = `${target.offsetLeft}px`;
                EventsManager.setNewEventPosition(this.selectedEvent, target.offsetTop, target.offsetLeft);
            });
            elemGrid.addEventListener('mouseup', (ev) => {
                this.selectedElement = undefined;
            });
            ScheduleEventRender.removeAllEventsNode(elemContainer as HTMLDivElement)
            const collideEvents = EventsManager.groupCollideEvents(schedule.events);
            collideEvents.map((events) => {
                events.map((event, index) => {
                    EventsManager.updatePosition(event, this.parameters.getView(), events.length, index);
                    const elEvent = ScheduleEventRender.createElementEvent(event.title);
                    elEvent.style.top = `${event.position?.top}px`;
                    elEvent.style.left = `${event.position?.left}px`;
                    elEvent.style.width = `${event.position?.width}px`;
                    elEvent.style.height = `${event.position?.height}px`;
                    elEvent.addEventListener('click', () => event.onClick && event.onClick(event));
                    elEvent.addEventListener('dblclick', () => event.onDblClick && event.onDblClick(event));
                    elEvent.addEventListener('mousedown', (ev) => {
                        this.selectedElement = elEvent;
                        this.selectedEvent = event;
                    });
                    elEvent.addEventListener('mouseup', (ev) => {
                        this.selectedElement = undefined;
                        this.selectedEvent = undefined;
                    });
                    elemContainer.appendChild(elEvent);
                });
            });
        }
    }

    static removeAllEventsNode(container: HTMLDivElement): void {
        while (container.childNodes.length > 0) {
            container.removeChild(container.childNodes[0]);
        }
    }

    private static createElementEvent(title: string): HTMLDivElement {
        const elem = ScheduleEventRender.createElement('ss-event');
        elem.innerHTML = `<span>${title}</span>`;
        return elem;
    }
}

export { ScheduleEventRender };
