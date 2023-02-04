function totalCost (products) {
    let totalPrice = 0;
    for(let i = 0; i < products.length; i++) {
        const productPrice = products[i].price;
        totalPrice = totalPrice + productPrice;
    }
    return totalPrice;
}

const shoppingCart = [
    { name: "Dano Milk", price: 500 },
    { name: "Taaza Tea", price: 200},
    { name: 'Fresh Sugar', price:300}
];
const result = totalCost(shoppingCart);
console.log(result);