interface GridEventPosition {
    top: number;
    left: number;
    width: number;
    height: number;
}

interface GridEvent {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    position?: GridEventPosition;
    collideIds?: string[];
}

export type { GridEvent };
