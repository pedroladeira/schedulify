import { GridEvent } from "./events";
import { Grid } from "./grid";

interface ScheduleGrid {
    grid: Grid;
    ui: InterfaceUi;
    events: GridEvent[];
}

export type { ScheduleGrid };
