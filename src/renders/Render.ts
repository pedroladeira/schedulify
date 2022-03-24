import { ParametersManager } from '../managers/ParametersManager';

abstract class Render {
    protected parameters: ParametersManager;

    constructor(parameters: ParametersManager) {
        this.parameters = parameters;
    }

    protected static createElement(classNames?: string): HTMLDivElement {
        const elem = document.createElement('div');
        classNames && (elem.className = classNames);
        return elem;
    }
}

export { Render };
