import { FC } from 'react';

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

interface SkeduleProps {
    onClickBlock?(date: Date): void;
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}
declare const Skedule: FC<SkeduleProps>;

declare enum ScheduleView {
    Week = "WEEK",
    Day = "DAY"
}

export { ScheduleEvent, ScheduleView, Skedule };
