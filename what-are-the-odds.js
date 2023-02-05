function findOddSum(arrOfNumbers){
    let oddSum = 0;
    for(let i = 0; i < arrOfNumbers.length; i++) {
        if(arrOfNumbers[i] % 2 !== 0) {
            oddSum = oddSum + arrOfNumbers[i];
        }
    }

    if(oddSum > 0) {
        return oddSum;
    }
}

const input = [5, 7, 8, 10, 45, 30];
const result = findOddSum(input);
console.log(result);