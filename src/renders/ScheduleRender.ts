import { ScheduleGrid } from '../interfaces/schedule';
import { GridBlock } from '../interfaces/grid';
import { Render } from './Render';
import { CalendarManager } from '../managers/CalendarManager';
import moment from 'moment';

class ScheduleRender extends Render {

    render(element: HTMLDivElement, schedule: ScheduleGrid): void {
        ScheduleRender.removeAllEventsNode(element as HTMLDivElement);
        const container = ScheduleRender.createElementContainer();
        // render ui header
        ScheduleRender.renderHeaderUi(element, schedule);
        // render ui header
        ScheduleRender.renderAsideUi(container, schedule);
        // render grid
        this.renderGrid(container, schedule);

        container.appendChild(ScheduleRender.createElement('ss-events-container'));
        element.appendChild(container);
        element.className = 'ss';
    }

    private renderGrid(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const grid = ScheduleRender.createElementGrid();
        schedule.grid.map((column) => {
            const elCol = ScheduleRender.createElementColumn(CalendarManager.isToday(column.params.date));
            column.blocks.map((block) => {
                const elBlk = this.createElementBlock(block);
                elCol.appendChild(elBlk);
            });
            grid.appendChild(elCol);
        });
        element.appendChild(grid);
    }

    static removeAllEventsNode(container: HTMLDivElement): void {
        while (container.childNodes.length > 0) {
            container.removeChild(container.childNodes[0]);
        }
    }

    private static renderHeaderUi(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const elHeader = ScheduleRender.createElementHeader();
        if (schedule.ui.header?.hasAside) {
            const col = ScheduleRender.createElementHeaderColumn();
            elHeader.appendChild(col);
        }
        const colHeaders = ScheduleRender.createElementHeaderColumn();
        schedule.ui.header?.days.map((day: string) => {
            const col = ScheduleRender.createElementHeaderColumnDay(day);
            colHeaders.appendChild(col);
        });
        elHeader.appendChild(colHeaders);
        element.appendChild(elHeader);
    }

    private static renderAsideUi(element: HTMLDivElement, schedule: ScheduleGrid): void {
        const aside = ScheduleRender.createElementAside();
        schedule.ui.sideHours?.hours.map((block: string) => {
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

    private static createElementColumn(isToday: boolean): HTMLDivElement {
        let classnames = 'ss-column';
        isToday && (classnames += ' ss-column--is-today');
        const elem = ScheduleRender.createElement(classnames);
        return elem;
    }

    private createElementBlock(block: GridBlock): HTMLDivElement {
        const elem = ScheduleRender.createElement('ss-block');
        elem.addEventListener('click', () => this.parameters.fireOnClickBlock(block.params.date));
        elem.addEventListener('dblclick', () => this.parameters.fireOnDblClickBlock(block.params.date));
        block.minutes.map((min) => {
            const elMinBlk = ScheduleRender.createElement('ss-block-minutes');
            min.params.date && elMinBlk.setAttribute('data-dt', moment(min.params.date).format());
            min.element = elMinBlk;
            elem.appendChild(elMinBlk);
        });
        return elem;
    }
}

export { ScheduleRender };
