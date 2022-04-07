import { ParametersManager } from '../managers/ParametersManager';
import { HeaderUi, InterfaceUi, SideHours } from '../interfaces/additional';
declare class InterfaceBuilder {
    static build(params: ParametersManager): InterfaceUi;
    static buildHeader(params: ParametersManager): HeaderUi;
    static buildSideHours(): SideHours;
}
export { InterfaceBuilder };
