interface GridEventPosition {
    top: number;
    left: number;
    width: number;
    height: number;
}

interface ScheduleEvent {
    id?: string;
    title: string;
    startDate: Date;
    duration: number;
    data?: unknown;
    onClick?(event: ScheduleEvent): void;
    onDblClick?(event: ScheduleEvent): void;
    onChange?(startDate: Date): void;
}

interface GridEvent extends ScheduleEvent {
    position?: GridEventPosition;
    collideIds?: string[];
}

export type { GridEvent, ScheduleEvent };
