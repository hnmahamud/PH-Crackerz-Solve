function findRemainder (mod) {
    const remainder = mod % 5;
    return remainder;
}

const number = 119;
const result = findRemainder(number);
console.log(result);