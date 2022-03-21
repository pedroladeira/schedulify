import React, { FC, useState, useEffect, useRef } from "react";
import { ScheduleView } from "./interfaces/types";
import { Schedule as CalSchedule } from "./schedule/Schedule";
import '../src/styles/index.css';

interface ScheduleProps { }

const Schedule: FC = () => {
    const refSchedule = useRef<HTMLDivElement>(null);
    const [schedule] = useState<CalSchedule>(new CalSchedule());
    const [events] = useState<any[]>([{
        title: 'Hello',
        startDate: (() => {
            const dt = new Date(); dt.setHours(10); return dt;
        })(),
        endDate: (() => {
            const dt = new Date(); dt.setHours(13); return dt;
        })(),
    }
    ]);

    useEffect(() => {
        if (schedule && refSchedule.current) {
            console.log(refSchedule.current)
            schedule.create(refSchedule.current, {
                view: ScheduleView.Week,
                events
            });
            schedule.render();
        }
    }, [refSchedule]);

    return (<div ref={refSchedule} />);
};

export { Schedule };
export type { ScheduleProps };
