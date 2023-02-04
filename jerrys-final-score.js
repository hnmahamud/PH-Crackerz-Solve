function finalScore ( scores ) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    return sum;
}

const roundNdScore = [20, 13, 37];
const result = finalScore(roundNdScore);
console.log(result);