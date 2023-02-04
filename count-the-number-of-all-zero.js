function countZeros ( binary_num ) {
    let count = 0;
    for(let i = 0; i < binary_num.length; i++) {
        if(binary_num[i] === "0") {
            count++;
        }
    }
    return count;
    
}

const input = "10101";
const result = countZeros(input);
console.log(result);