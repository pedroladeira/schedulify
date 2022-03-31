import { ParametersManager } from '../managers/ParametersManager';
declare abstract class Render {
    protected parameters: ParametersManager;
    constructor(parameters: ParametersManager);
    protected static createElement(classNames?: string): HTMLDivElement;
}
export { Render };
