function secondLargest ( numbers ) {
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] < numbers[j]) {
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            }
            console.log(numbers);
        }
    }
    const secondLargest = numbers[1];
    return secondLargest;
    
}

const inputArray = [10,33,5,99,6];
const result = secondLargest(inputArray);
console.log(result);