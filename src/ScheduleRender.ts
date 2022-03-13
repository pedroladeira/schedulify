import { Grid } from './interfaces/grid';

class ScheduleRender {
    static render(element: HTMLDivElement, grid: Grid): void {
        ScheduleRender.build(grid);
        const container = ScheduleRender.createElement('ss-container');
        grid.map((column) => {
            if (column.element) {
                container.appendChild(column.element);
                column.blocks.map((block) => {
                    if (column.element && block.element) {
                        column.element.appendChild(block.element);
                    }
                });
            }
        });
        element.appendChild(container);
    }

    static build(grid: Grid): void {
        grid.forEach((column, i) => {
            column.element = ScheduleRender.createElement('ss-column');
            column.element.innerHTML = `teste: ${i}`;
            column.blocks.forEach((block) => {
                block.element = ScheduleRender.createElement('ss-block');
            });
        });
    }

    private static createElement(classNames?: string): HTMLDivElement {
        const elem = document.createElement('div');
        classNames && (elem.className = classNames);
        return elem;
    }
}

export { ScheduleRender };
