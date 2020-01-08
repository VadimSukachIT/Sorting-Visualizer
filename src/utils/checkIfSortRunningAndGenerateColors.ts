function checkIfSortRunningAndGenerateColors(isSortRunning: boolean): { cursor: string, color: string, isDisabled: string | any } {
    const textColorWhileRunning: string = 'rgb(255,0,24)';
    const textColorWhileNotRunning: string = 'white';
    const cursor: string = isSortRunning ? 'default' : 'pointer';
    const color: string = isSortRunning ? textColorWhileRunning : textColorWhileNotRunning;
    const isDisabled: string | any = isSortRunning ? 'disabled' : null;

    return {
        cursor,
        color,
        isDisabled
    }
}

export default checkIfSortRunningAndGenerateColors;