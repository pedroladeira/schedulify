import { FC } from "react";
import { ScheduleEvent } from "./interfaces/events";
import './styles/index.scss';
interface ScheduleProps {
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}
declare const Schedule: FC<ScheduleProps>;
export { Schedule };
export type { ScheduleProps };
