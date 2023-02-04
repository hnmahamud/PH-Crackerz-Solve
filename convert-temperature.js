function temperatureConverter (valNum) {
    const fahrenheitTemp = valNum;
    const fahrenheitToCelsius = (fahrenheitTemp - 32) / 1.8;
    if(Number.isInteger(fahrenheitToCelsius) === true) {
        return fahrenheitToCelsius;
    }
    else {
        return parseFloat(fahrenheitToCelsius.toFixed(2));
    }
    
}

const result = temperatureConverter(103)
console.log(result);