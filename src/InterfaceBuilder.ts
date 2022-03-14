import { ScheduleParams } from "./interfaces/parameters";

class InterfaceBuilder {
    static build(params: ScheduleParams): InterfaceUi {
        const ui: InterfaceUi = {};
        if(params.hideHeader) return ui;
        ui.header = {
            days: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab']
        }

        return ui;
    }
}

export { InterfaceBuilder };
