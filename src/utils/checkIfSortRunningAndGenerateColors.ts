function checkIfSortRunningAndGenerateColors(isSortRunning) {
    const textColorWhileRunning = 'rgb(255,0,24)';
    const textColorWhileNotRunning = '#1a1a1d';
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