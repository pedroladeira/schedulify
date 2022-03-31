import { ScheduleGrid } from '../interfaces/schedule';
import { Render } from './Render';
declare class ScheduleRender extends Render {
    render(element: HTMLDivElement, schedule: ScheduleGrid): void;
    private renderGrid;
    static removeAllEventsNode(container: HTMLDivElement): void;
    private static renderHeaderUi;
    private static renderAsideUi;
    private static createElementHeader;
    private static createElementAside;
    private static createElementHeaderColumnDay;
    private static createElementHeaderColumn;
    private static createElementContainer;
    private static createElementGrid;
    private static createElementColumn;
    private createElementBlock;
}
export { ScheduleRender };
