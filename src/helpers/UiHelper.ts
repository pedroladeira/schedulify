class UiHelper {
    static getGridColumnWidth(): number {
        const columns = document.getElementsByClassName('ss-column');
        if (columns.length > 0)
            return columns[0].clientWidth + 1;
        return 0;
    }

    static getGridBlockHeight(): number {
        return 41;
    }

    static getAsideWidth(): number {
        return 49;
    }
}

export { UiHelper };
