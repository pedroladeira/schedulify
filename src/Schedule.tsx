import React, { FC, useState, useEffect, useRef } from "react";
import { ScheduleView } from "./interfaces/types";
import { Schedule as CalSchedule } from "./schedule/Schedule";
import '../src/styles/index.css';
import { ScheduleEvent } from "./interfaces/events";
import { uniqueId } from "./helpers/UniqueId";

interface ScheduleProps {
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
}

const Schedule: FC<ScheduleProps> = ({ events }) => {
    const refSchedule = useRef<HTMLDivElement>(null);
    const [schedule] = useState<CalSchedule>(new CalSchedule());
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [interEvents] = useState<ScheduleEvent[]>(events?.map((e) => {
        !e.id && (e.id = uniqueId());
        return e;
    }) || []);

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
            events: interEvents
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
                events: interEvents
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
