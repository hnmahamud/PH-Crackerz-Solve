function tallestFriend ( height ) {
    let tallest = height[0];
    for(let i = 0; i < height.length; i++) {
        if(tallest < height[i]) {
            tallest = height[i];
        }
    }
    return tallest;
}

const heightCm = [157, 134, 188];
const result = tallestFriend(heightCm);
console.log(result);