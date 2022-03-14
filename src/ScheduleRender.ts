import { ScheduleGrid } from './interfaces/schedule';

class ScheduleRender {
    static render(element: HTMLDivElement, schedule: ScheduleGrid): void {
        // render ui header
        ScheduleRender.renderHeaderUi(element, schedule);
        // render grid
        ScheduleRender.renderGrid(element, schedule);
    }

    private static renderGrid(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const container = ScheduleRender.createElementContainer();
        schedule.grid.map((column) => {
            const elCol = ScheduleRender.createElementColumn();
            column.blocks.map((block) => {
                const elBlk = ScheduleRender.createElementBlock();
                elCol.appendChild(elBlk);
            });
            container.appendChild(elCol);
        });
        element.appendChild(container);
    }

    private static renderHeaderUi(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const elHeader = ScheduleRender.createElementHeader();
        schedule.ui.header?.days.map((day) => {
            elHeader.appendChild(ScheduleRender.createElementHeaderColumn(day));
        });
        element.appendChild(elHeader);
    }

    private static createElementHeader(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-header');
        return elem;
    }

    private static createElementHeaderColumn(value: string): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-header-column');
        elem.innerHTML = value;
        return elem;
    }

    private static createElementContainer(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-container');
        return elem;
    }

    private static createElementColumn(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-column');
        return elem;
    }

    private static createElementBlock(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-block');
        return elem;
    }

    private static createElement(classNames?: string): HTMLDivElement {
        const elem = document.createElement('div');
        classNames && (elem.className = classNames);
        return elem;
    }
}

export { ScheduleRender };
