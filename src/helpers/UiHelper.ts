class UiHelper {
    static getGridColumnWidth(): number {
        const columns = document.getElementsByClassName('ss-column');
        if (columns.length > 0)
            return columns[0].clientWidth - 1;
        return 150; // TODO:
    }

    static getGridColumnHeight(): number {
        return 42;
    }

    static getAsideWidth(): number {
        return 50;
    }
}

export { UiHelper };
