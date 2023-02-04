function solution (letter) {
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        return "VOWEL";
    }
    else {
        return "CONSONANT";
    }
}

const char = 'a';
const result = solution (char);
console.log(result);