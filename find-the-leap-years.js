function findLeapYear(arrOfYears){
    const output = [];
    for(let i = 0; i < arrOfYears.length; i++) {
        if ((arrOfYears[i] % 4 === 0) && (arrOfYears[i] % 100 !== 0) || (arrOfYears[i] % 400 === 0)) {
            output.push(arrOfYears[i]);
        }
    }
    return output;
}

const years = [2023,2024,2025,2028,2030];
const result = findLeapYear(years);
console.log(result);