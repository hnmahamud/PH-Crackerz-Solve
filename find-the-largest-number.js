function findMax(arr){
    let maxNum = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

const numbers = [55,10,95];
const result = findMax(numbers);
console.log(result);