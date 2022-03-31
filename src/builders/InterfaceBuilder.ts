import { ScheduleView } from "../interfaces/types";
import { ParametersManager } from "../managers/ParametersManager";

class InterfaceBuilder {
    static build(params: ParametersManager): InterfaceUi {
        const ui: InterfaceUi = {};
        if (!params.hasHeader()) return ui;
        ui.header = InterfaceBuilder.buildHeader(params);
        ui.sideHours = InterfaceBuilder.buildSideHours();
        return ui;
    }

    static buildHeader(params: ParametersManager): HeaderUi {
        const date = params.getCalendarManager().getSelectedDate();
        let days: string[] = [];
        const WEEK_DAYS = ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'];
        if (params.getView() === ScheduleView.Week) {
            Array(7).fill(0).forEach((_, i) => {
                const wd = params.getCalendarManager().getWeekDateByWeekIndex(i, date);
                days.push(`${WEEK_DAYS[i]} - ${wd.getDate()}`);
            })
        } else {
            const wd = params.getCalendarManager().getWeekDateByWeekIndex(0, date);
            days.push(`${WEEK_DAYS[0]} - ${wd.getDate()}`);
        }

        return {
            days,
            hasAside: true
        };
    }

    static buildSideHours(): SideHours {
        return {
            hours: Array(24).fill(0).map((_, i) => {
                const hour = i;
                const minutes = '00';
                return `${String(Math.ceil(hour)).padStart(2, '0')}:${minutes}`
            }),
        };
    }
}

export { InterfaceBuilder };
