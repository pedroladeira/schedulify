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
        let days;
        if (params.getView() === ScheduleView.Week) {
            days = ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'];
        } else {
            days = ['Dom'];
        }

        return {
            days,
            hasAside: true
        };
    }

    static buildSideHours(): SideHours {
        return {
            hours: Array(24 * 2).fill(0).map((_, i) => {
                const hour = (i - 1) / 2;
                const minutes = String(hour).includes('.') ? '00' : '30';
                return `${String(Math.ceil(hour)).padStart(2, '0')}:${minutes}`
            }),
        };
    }
}

export { InterfaceBuilder };
