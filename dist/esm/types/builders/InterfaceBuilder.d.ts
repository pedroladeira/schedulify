import { ParametersManager } from "../managers/ParametersManager";
declare class InterfaceBuilder {
    static build(params: ParametersManager): InterfaceUi;
    static buildHeader(params: ParametersManager): HeaderUi;
    static buildSideHours(): SideHours;
}
export { InterfaceBuilder };
