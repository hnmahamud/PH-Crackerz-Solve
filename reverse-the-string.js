function reverseMaker (word) {
    let output = "";
    for(let i = word.length - 1; i >= 0; i--) {
        output = output + word[i];
    }
    return output;

    // const splitWord = word.split("")
    // const reverseWord = splitWord.reverse();
    // const joinWord = reverseWord.join("");
    // return joinWord;
}

const str = "Hello"
const result = reverseMaker(str);
console.log(result);