function checkTriangle(side1, side2, side3){
    if(side1 === side2 && side2 === side3) {
        return "No"
    }
    else if(side1 === side2 || side1 === side3 || side2 === side3) {
        return "Yes"
    }
    else {
        return "No"
    }
}

const num1 = 8;
const num2 = 8;
const num3 = 8;
const result = checkTriangle(num1, num2, num3);
console.log(result);