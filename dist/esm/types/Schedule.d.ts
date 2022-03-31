import React from "react";
import { Schedule as CalSchedule } from "./schedule/Schedule";
import { ScheduleEvent } from "./interfaces/events";
import './styles/index.scss';
interface ScheduleProps {
    onClickBlock?(date: Date): void;
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}
interface ScheduleState {
    schedule: CalSchedule;
    isMobile: boolean;
    date: Date;
    events: ScheduleEvent[];
}
declare class Schedule extends React.Component<ScheduleProps, ScheduleState> {
    refSchedule: React.RefObject<HTMLDivElement>;
    constructor(props: ScheduleProps);
    updateParameters(): void;
    handleOnResizeWindow(ev: any): void;
    mediaQueryListener(event: MediaQueryListEvent): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export { Schedule };
export type { ScheduleProps };
