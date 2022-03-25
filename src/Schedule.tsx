import React from "react";
import { ScheduleView } from "./interfaces/types";
import { Schedule as CalSchedule } from "./schedule/Schedule";
import { ScheduleEvent } from "./interfaces/events";
import { uniqueId } from "./helpers/UniqueId";
import './styles/index.scss';

interface ScheduleProps {
    onClickBlock?(date: Date): void;
    onDblClickBlock?(date: Date): void;
    events?: ScheduleEvent[];
    date: Date;
}

interface ScheduleState {
    schedule: CalSchedule;
    isMobile: boolean;
    date: Date;
    events: ScheduleEvent[];
}

class Schedule extends React.Component<ScheduleProps, ScheduleState> {
    refSchedule: React.RefObject<HTMLDivElement>;

    constructor(props: ScheduleProps) {
        super(props);
        this.state = {
            schedule: new CalSchedule(),
            isMobile: false,
            date: props.date || new Date(),
            events: props.events?.map((e) => {
                !e.id && (e.id = uniqueId());
                return e;
            }) || []
        };
        this.refSchedule = React.createRef<HTMLDivElement>();
        this.handleOnResizeWindow = this.handleOnResizeWindow.bind(this);
        this.mediaQueryListener = this.mediaQueryListener.bind(this);
    }

    updateParameters(): void {
        const { onClickBlock, onDblClickBlock } = this.props;
        const { schedule, isMobile, events, date } = this.state;
        schedule.updateParameters({
            view: isMobile ? ScheduleView.Day : ScheduleView.Week,
            events,
            date,
            onClickBlock,
            onDblClickBlock
        });
        schedule.rebuild();
        schedule.render();
    }

    handleOnResizeWindow(ev: any): void {
        const { schedule } = this.state;
        schedule.refreshData();
    }

    mediaQueryListener(event: MediaQueryListEvent) {
        this.setState({ isMobile: !event.matches });
        this.updateParameters();
    };

    componentDidMount() {
        const { onClickBlock, onDblClickBlock } = this.props;
        const { schedule, events, date } = this.state;

        window.addEventListener('resize', this.handleOnResizeWindow);
        const mq = window.matchMedia(`(min-width: 768px)`);
        mq.addEventListener('change', this.mediaQueryListener);
        this.setState({ isMobile: !mq.matches });

        if (schedule && this.refSchedule.current) {
            schedule.create(this.refSchedule.current, {
                view: ScheduleView.Week,
                events,
                date,
                onClickBlock,
                onDblClickBlock
            });
            schedule.render();
        }
    }

    render() {
        return (<div ref={this.refSchedule}>Schedule</div>);
    }
}

export { Schedule };
export type { ScheduleProps };
