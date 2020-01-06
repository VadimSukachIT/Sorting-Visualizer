import randomNumberFromInterval from './randomNumberFromInterval';

const generateArray = (maxLength: number): Array<number> => {
    const array: Array<number> = [];
    for (let i = 0; i < maxLength; i++) {
        array.push(randomNumberFromInterval(5, 600));
    }
    return array;
};

export default generateArray;