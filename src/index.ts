import { ScheduleView } from './interfaces/types';
import { Schedule } from './schedule/Schedule';

const initSchedule = (element: HTMLDivElement, view: ScheduleView) => {
    const schedule = new Schedule();
    schedule.create(element, {
        view: view,
        events: [
            {
                title: 'Hello',
                startDate: (() => {
                    const dt = new Date(); dt.setHours(10); return dt;
                })(),
                endDate: (() => {
                    const dt = new Date(); dt.setHours(13); return dt;
                })(),
            }
        ]
    });
    schedule.render();
};

export { initSchedule };
