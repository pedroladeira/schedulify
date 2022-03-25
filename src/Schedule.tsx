import React, { FC, useState, useEffect, useRef } from "react";
import { ScheduleView } from "./interfaces/types";
import { Schedule as CalSchedule } from "./schedule/Schedule";
import { ScheduleEvent } from "./interfaces/events";
import { uniqueId } from "./helpers/UniqueId";
import './styles/index.scss';

interface ScheduleProps {
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}

const Schedule: FC<ScheduleProps> = ({ events, date }) => {
    const refSchedule = useRef<HTMLDivElement>(null);
    const [schedule] = useState<CalSchedule>(new CalSchedule());
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [currDate, setCurrDate] = useState<Date>(date || new Date());
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
        schedule.updateParameters({
            view: isMobile ? ScheduleView.Day : ScheduleView.Week,
            events: interEvents,
            date: currDate
        });
        schedule.rebuild();
        schedule.render();
    }, [isMobile]);

    useEffect(() => {
        schedule.updateParameters({
            view: isMobile ? ScheduleView.Day : ScheduleView.Week,
            events: interEvents,
            date: date
        });
        schedule.rebuild();
        schedule.render();
    }, [date]);

    useEffect(() => {
        window.addEventListener('resize', handleOnResizeWindow);
        const mq = window.matchMedia(`(min-width: 768px)`);
        mq.addEventListener('change', mediaQueryListener);
        setIsMobile(!mq.matches);

        if (schedule && refSchedule.current) {
            schedule.create(refSchedule.current, {
                view: ScheduleView.Week,
                events: interEvents,
                date: currDate
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
