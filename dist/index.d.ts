import { FC } from 'react';

interface ScheduleEvent {
    id?: string;
    title: string;
    startDate: Date;
    endDate: Date;
    data?: unknown;
    onClick?(event: ScheduleEvent): void;
    onDblClick?(event: ScheduleEvent): void;
    onChange?(startDate: Date, endDate?: Date): void;
}

interface ScheduleProps {
    onClickBlock?(date: Date): void;
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}
declare const Schedule: FC<ScheduleProps>;

declare enum ScheduleView {
    Week = "WEEK",
    Day = "DAY"
}

export { Schedule, ScheduleEvent, ScheduleView };
