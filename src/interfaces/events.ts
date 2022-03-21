interface GridEventPosition {
    top: number;
    left: number;
    width: number;
    height: number;
}

interface GridEvent {
    title: string;
    startDate: Date;
    endDate: Date;
    position?: GridEventPosition;
}

export type { GridEvent };
