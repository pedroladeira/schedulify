import { FC } from 'react';
import { ScheduleEvent } from './interfaces/events';
import './styles/index.scss';
interface SkeduleProps {
    onClickBlock?(date: Date): void;
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}
declare const Skedule: FC<SkeduleProps>;
export { Skedule };
export type { SkeduleProps };
