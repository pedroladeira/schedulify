import { ScheduleGrid } from '../interfaces/schedule';
import { GridBlock } from '../interfaces/grid';
import { Render } from './Render';

class ScheduleRender extends Render {

    render(element: HTMLDivElement, schedule: ScheduleGrid): void {
        ScheduleRender.removeAllEventsNode(element as HTMLDivElement)
        const container = ScheduleRender.createElementContainer();
        // render ui header
        ScheduleRender.renderHeaderUi(element, schedule);
        // render ui header
        ScheduleRender.renderAsideUi(container, schedule);
        // render grid
        ScheduleRender.renderGrid(container, schedule);

        container.appendChild(ScheduleRender.createElement('ss-events-container'));
        element.appendChild(container);
        element.className = 'ss';
    }

    static removeAllEventsNode(container: HTMLDivElement): void {
        while (container.childNodes.length > 0) {
            container.removeChild(container.childNodes[0]);
        }
    }

    private static renderGrid(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const grid = ScheduleRender.createElementGrid();
        schedule.grid.map((column) => {
            const elCol = ScheduleRender.createElementColumn();
            column.blocks.map((block) => {
                const elBlk = ScheduleRender.createElementBlock(block);
                elCol.appendChild(elBlk);
            });
            grid.appendChild(elCol);
        });
        element.appendChild(grid);
    }

    private static renderHeaderUi(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const elHeader = ScheduleRender.createElementHeader();
        if (schedule.ui.header?.hasAside) {
            const col = ScheduleRender.createElementHeaderColumn();
            elHeader.appendChild(col);
        }
        const colHeaders = ScheduleRender.createElementHeaderColumn();
        schedule.ui.header?.days.map((day, i) => {
            const col = ScheduleRender.createElementHeaderColumnDay(day);
            colHeaders.appendChild(col);
        });
        elHeader.appendChild(colHeaders);
        element.appendChild(elHeader);
    }

    private static renderAsideUi(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const aside = ScheduleRender.createElementAside();
        schedule.ui.sideHours?.hours.map((block) => {
            const elBlk = ScheduleRender.createElement('ss-aside-block');
            elBlk.innerHTML = block;
            aside.appendChild(elBlk);
        });
        element.appendChild(aside);
    }

    private static createElementHeader(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-header');
        return elem;
    }

    private static createElementAside(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-aside');
        return elem;
    }

    private static createElementHeaderColumnDay(value: string): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-header-column-day');
        elem.innerHTML = value;
        return elem;
    }

    private static createElementHeaderColumn(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-header-column');
        return elem;
    }

    private static createElementContainer(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-container');
        return elem;
    }

    private static createElementGrid(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-grid');
        return elem;
    }

    private static createElementColumn(): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-column');
        return elem;
    }

    private static createElementBlock(block: GridBlock): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-block');
        block.minutes.map(() => {
            elem.appendChild(ScheduleRender.createElement('ss-block-minutes'));
        })
        return elem;
    }
}

export { ScheduleRender };
