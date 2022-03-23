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
    const [isMobile, setIsMobile] = useState<boolean>(false);
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
        title: 'HelloX',
        startDate: (() => {
            const dt = new Date(); dt.setHours(12); return dt;
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
            const dt = new Date(); dt.setDate(22); dt.setHours(15); return dt;
        })(),
        endDate: (() => {
            const dt = new Date(); dt.setDate(22); dt.setHours(16); return dt;
        })(),
    }
    ]);

    const handleOnResizeWindow = (ev: any): void => {
        schedule && schedule.refreshData();
    }

    const mediaQueryListener = (event: MediaQueryListEvent) => {
        setIsMobile(!event.matches);
    };

    useEffect(() => {
        console.log('isMobile', isMobile);
        schedule.updateParameters({
            view: isMobile ? ScheduleView.Day : ScheduleView.Week,
            events
        });
        schedule.rebuild();
        schedule.render();
    }, [isMobile]);

    useEffect(() => {
        window.addEventListener('resize', handleOnResizeWindow);
        const mq = window.matchMedia(`(min-width: 768px)`);
        mq.addEventListener('change', mediaQueryListener);
        setIsMobile(!mq.matches);

        if (schedule && refSchedule.current) {
            schedule.create(refSchedule.current, {
                view: ScheduleView.Week,
                events
            });
            schedule.render();
        }

        return () => {
            window.removeEventListener('resize', handleOnResizeWindow);
            mq.removeEventListener('change', mediaQueryListener);
        };
    }, [refSchedule]);

    return (<div ref={refSchedule} />);
};

export { Schedule };
export type { ScheduleProps };
