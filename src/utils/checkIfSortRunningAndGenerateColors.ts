function checkIfSortRunningAndGenerateColors(isSortRunning) {
    const textColorWhileRunning = 'rgb(255,0,24)';
    const textColorWhileNotRunning = 'white';
    const cursor = isSortRunning ? 'default' : 'pointer';
    const color = isSortRunning ? textColorWhileRunning : textColorWhileNotRunning;
    const isDisabled: any = isSortRunning ? 'disabled' : null;

    return {
        cursor,
        color,
        isDisabled
    }
}

export default checkIfSortRunningAndGenerateColors;