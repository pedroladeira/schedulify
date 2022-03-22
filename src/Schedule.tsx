import React, { FC, useState, useEffect, useRef } from "react";
import { ScheduleView } from "./interfaces/types";
import { Schedule as CalSchedule } from "./schedule/Schedule";
import '../src/styles/index.css';
import { GridEvent } from "./interfaces/events";
import { uniqueId } from "./helpers/UniqueId";

interface ScheduleProps { }

const Schedule: FC = () => {
    const refSchedule = useRef<HTMLDivElement>(null);
    const [schedule] = useState<CalSchedule>(new CalSchedule());
    const [events] = useState<GridEvent[]>([{
        id: uniqueId(),
        title: 'Hello',
        startDate: (() => {
            const dt = new Date(); dt.setHours(10); return dt;
        })(),
        endDate: (() => {
            const dt = new Date(); dt.setHours(13); return dt;
        })(),
    }, {
        id: uniqueId(),
        title: 'Hello2',
        startDate: (() => {
            const dt = new Date(); dt.setHours(9); return dt;
        })(),
        endDate: (() => {
            const dt = new Date(); dt.setHours(11); return dt;
        })(),
    }, {
        id: uniqueId(),
        title: 'Hello3',
        startDate: (() => {
            const dt = new Date(); dt.setHours(15); return dt;
        })(),
        endDate: (() => {
            const dt = new Date(); dt.setHours(16); return dt;
        })(),
    }, {
        id: uniqueId(),
        title: 'Hello4',
        startDate: (() => {
            const dt = new Date(); dt.setDate(23); dt.setHours(15); return dt;
        })(),
        endDate: (() => {
            const dt = new Date(); dt.setDate(23); dt.setHours(16); return dt;
        })(),
    }
    ]);

    const handleOnResizeWindow = (): void => {
        schedule && schedule.refreshData();
    }

    useEffect(() => {
        if (schedule && refSchedule.current) {
            schedule.create(refSchedule.current, {
                view: ScheduleView.Week,
                events
            });
            schedule.render();
        }
    }, [refSchedule]);

    useEffect(() => {
        window.addEventListener('resize', handleOnResizeWindow);
        return () => {
            window.removeEventListener('resize', handleOnResizeWindow);
        };
    }, []);

    return (<div ref={refSchedule} />);
};

export { Schedule };
export type { ScheduleProps };
