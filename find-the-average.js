function average (arrOfMarks) {
    let sum = 0;
    for(let i = 0; i < arrOfMarks.length; i++) {
        sum = sum + arrOfMarks[i];
    }
    const marksAverage = sum / arrOfMarks.length;
    if(Number.isInteger(marksAverage) === true) {
        return marksAverage;
    }
    else {
        return parseFloat(marksAverage.toFixed(2));
    }
}

const number = [75.25, 65, 80, 35.45, 99.50];
const result = average(number);
console.log(result);