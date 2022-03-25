import { GridEvent } from './events';
import { ScheduleView } from './types';
interface ScheduleParams {
    view: ScheduleView;
    hideHeader?: boolean;
    events?: GridEvent[];
    date: Date;
    onClickBlock?: (date: Date) => void;
    onDblClickBlock?: (date: Date) => void;
}
export type { ScheduleParams };
