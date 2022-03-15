import { ScheduleParams } from "./interfaces/parameters";

class InterfaceBuilder {
    static build(params: ScheduleParams): InterfaceUi {
        const ui: InterfaceUi = {};
        if(params.hideHeader) return ui;
        ui.header = InterfaceBuilder.buildHeader();
        ui.sideHours = InterfaceBuilder.buildSideHours();
        return ui;
    }

    static buildHeader(): HeaderUi {
        return {
            days: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab']
        };
    }

    static buildSideHours(): SideHours {
        return {
            hours: Array(24).fill(0).map((_, i) => {
                return `${String(i).padStart(2, '0')}:00`
            }),
        };
    }
}

export { InterfaceBuilder };
