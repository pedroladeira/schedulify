import { Grid } from './interfaces/grid';
declare class ScheduleRender {
    static render(element: HTMLDivElement, grid: Grid): void;
    static build(grid: Grid): void;
    private static createElement;
}
export { ScheduleRender };
