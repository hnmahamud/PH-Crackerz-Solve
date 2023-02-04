function deleteProperty (arr) {
    // const property = [];
    // let check;
    // for(let i = 0; i < arr.length; i++) {
    //     if (i === 0) {
    //         const objectPropertys = Object.keys(arr[i]);
    //         for(let j = 0; j < objectPropertys.length; j++) {
    //             property.push(objectPropertys[i]);
    //         }
    //     }
    //     if(i === 1) {
    //         check = property.includes(arr[i]);
    //     }
    // }

    // for(let k = 0; k < arr.length; k++) {
    //     if (k === 0 && check === true) {
    //         delete arr[k].fname;
    //         return "YES";
    //     }
    //     else {
    //         return "NO";
    //     }
    // }

    const obj = arr[0];
    const str = arr[1];
    const objProperty = Object.keys(obj);

    if(str.includes(objProperty) === true) {
        delete arr[0].fname;
        return "YES";
    }
    else {
        return "NO";
    }
}


const inputArray = [{fndame:'John',},'fname']
const result = deleteProperty(inputArray);
console.log(result);