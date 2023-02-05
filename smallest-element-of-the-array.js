function findingSmallest ( numbers ) {
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(smallest > numbers[i]) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

const input = [10,33,5,99,6];
const result = findingSmallest(input);
console.log(result);