// function JimOrDela (marksOfJim, marksOfDela) {
//     if(marksOfJim > marksOfDela) {
//         return "Jim";
//     }
//     else {
//         return "Dela";
//     }
// }

// const jimMarks = 84;
// const deleMarks = 75;
// const result = JimOrDela(jimMarks, deleMarks);
// console.log(result);

function JimOrDelaOrChinku (marksOfJim, marksOfDela, marksOfChinku) {
    if(marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
        return "Jim";
    }
    else if(marksOfDela > marksOfJim && marksOfDela > marksOfChinku) {
        return "Dela";
    }
    else {
        return "Chinku";
    }
}

const jimMarks = 84;
const deleMarks = 99;
const chinkuMarks = 77;
const result = JimOrDelaOrChinku(jimMarks, deleMarks, chinkuMarks);
console.log(result);