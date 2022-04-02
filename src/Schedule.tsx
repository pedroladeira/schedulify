import React, { FC, useEffect, useRef, useState } from 'react';
import { ScheduleView } from './interfaces/types';
import { Schedule as CalSchedule } from './schedule/Schedule';
import { ScheduleEvent } from './interfaces/events';
import { uniqueId } from './helpers/UniqueId';
import './styles/index.scss';
import { ScheduleParams } from './interfaces/parameters';

interface SkeduleProps {
    onClickBlock?(date: Date): void;
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}

const Skedule: FC<SkeduleProps> = ({
    date,
    events,
    onClickBlock,
    onDblClickBlock,
}) => {
    const refSchedule = useRef<HTMLDivElement>(null);
    const [schedule] = useState<CalSchedule>(new CalSchedule());
    const [isMobile, setIsMobile] = useState<boolean>();

    const buildScheduleParams = (): ScheduleParams => {
        return {
            view: isMobile ? ScheduleView.Day : ScheduleView.Week,
            events: events?.map((e) => {
                !e.id && (e.id = uniqueId());
                return e;
            }),
            date,
            onClickBlock,
            onDblClickBlock
        };
    };

    const updateParameters = (): void => {
        schedule.updateParameters(buildScheduleParams());
        schedule.rebuild();
        schedule.render();
    };

    const handleOnResizeWindow = (ev: any): void => {
        schedule.refreshData();
    };

    const mediaQueryListener = (event: MediaQueryListEvent) => {
        setIsMobile(!event.matches);
        updateParameters();
    };

    useEffect(() => {
        window.addEventListener('resize', handleOnResizeWindow);
        const mq = window.matchMedia('(min-width: 768px)');
        mq.addEventListener('change', mediaQueryListener);
        setIsMobile(!mq.matches);

        if (schedule && refSchedule.current) {
            schedule.create(refSchedule.current, buildScheduleParams());
            schedule.render();
        }
    }, []);

    useEffect(() => {
        updateParameters();
    }, [events, date]);

    return (<div ref={refSchedule}>Schedule</div>);
};

export { Skedule };
export type { SkeduleProps };
