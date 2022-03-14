import { ScheduleView } from './interfaces/types';
import { Schedule } from './Schedule';

const initSchedule = (element: HTMLDivElement) => {
    const schedule = new Schedule();
    schedule.create(element, {
        view: ScheduleView.Week
    });
    schedule.render();
};

export { initSchedule };
