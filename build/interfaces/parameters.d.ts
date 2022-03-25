import { GridEvent } from './events';
import { ScheduleView } from './types';
interface ScheduleParams {
    view: ScheduleView;
    hideHeader?: boolean;
    events?: GridEvent[];
    date: Date;
}
export type { ScheduleParams };
