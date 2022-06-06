function charAt (str, index) {
    if (typeof str !== 'string') {
        return null;
    } 

    if (isIntegerNumber(index) === false) {
        return null;
    }

    if (index >= 0 && index < str.length) {
        return str[index];
    }

    return null;
}

// console.log(charAt('Привет', 2));


function indexOf (str, value) {
    if (typeof str !== 'string' || typeof value !== 'string') {
        return null;
    } 

    for (let i = 0; i < str.length; i++) {
        if(str[i] === value) {
            return i;
        }
    }

    return -1;
}

// console.log(indexOf('Hello, world!', 10));


function lastIndexOf (str, value) {
    if (typeof str !== 'string' || typeof value !== 'string') {
        return null;
    } 

    for (let i = str.length - 1; i >= 0; i--) {
        if(str[i] === value) {
            return i;
        }
    }

    return -1;
}

// console.log(lastIndexOf('Hello, world!', 'o'));


// сравнить как работает ориигинальный метод
function substring (str, index1, index2) {
    if (typeof str !== 'string') {
        return null;
    }

    if (isIntegerNumber(index1) === false) {
        return null;
    }

    if (index2 === undefined) {
        index2 = str.length;
    }

    if (isIntegerNumber(index2) === false) {
        return null;
    }

    if (index1 > index2) {
        let newStr = '';

    for (let i = index2; i < index1; i++) {
        newStr = newStr + str[i];
    }

    return newStr;

    }

    let newStr = '';

    for (let i = index1; i < index2; i++) {
        newStr = newStr + str[i];
    }

    return newStr;
}

// console.log(substring('Hello, my love!', 15, 10));
// console.log('Hello, my love!'.substring(15, 10));


function slice (str, index1, index2) {
    if (typeof str !== 'string') {
        return null;
    }

    if (isIntegerNumber(index1) === false) {
        return null;
    }

    if (index2 === undefined) {
        index2 = str.length;
    }

    if (isIntegerNumber(index2) === false) {
        return null;
    }

    let firstIndex = index1
    let secondIndex = index2

    if (index1 < 0) {
        firstIndex = str.length + index1;
    }

    if (index2 < 0) {
        secondIndex = str.length + index2;
    }

    let newStr = '';

    for (let i = firstIndex; i < secondIndex; i++) {
        newStr = newStr + str[i];
    }

    return newStr;
}
// const arrayIndex = [-11, -6];
// console.log(slice('Hello, my love!',...arrayIndex));
// console.log('Hello, my love!'.slice(...arrayIndex));


function repeat (str, count) {
    if (typeof str !== 'string') {
        return null;
    }

    if (isNumber(count) === false && count < 0) {
        return null;
    }

    let counter = count

    if (isFractionalNumber(counter) === true) {
        counter = Math.floor(counter);
    }

    let newString = '';

    for (let i = 0; i < counter; i++) {
        newString = newString + str;
    }

    return newString;
}

// let numb = 5.9;
// console.log(repeat('Hello!', numb));
// console.log('Hello!'.repeat(numb));




function endsWith (str, value) {
    if (typeof str !== 'string' && typeof value !== 'string') {
        return null;
    }
    
    let newStr = '';

    let newLength = str.length - value.length; 
    console.log(newLength);

    for (i = newLength; i < str.length ; i++) {
        newStr += str[i];
        console.log('newStr =', newStr);
    }
    
    if (newStr === value) {
        return true;
    }
    return false;
   
}
// let item = 'Hello, zhenja!'
// let item1 = 'nja!';
// console.log(endsWith(item, item1));
// console.log(item.endsWith(item1));









// Все функции выше рабочие, ниже те что ниже нужно доделывать

// более менне нормальное решение trim

function trim (str) {
    if (typeof str !== 'string') {
        return null;
    }
    
    console.log('str.length', str.length);

    let newString = '';

     
        for (let i = 0; i < str.length; i++) {
        if (str[i] !== String.fromCharCode(32)) {
            newString = newString + str[i];
        }
    }

    console.log('String.fromCharCode(32)', String.fromCharCode(32));
    console.log('newString.length', newString.length);
    // return newString; 
}

let hi = '    Hello, zhenja!       ';

// console.log(trim(hi));
// console.log(hi.trim());





// один из вариантов trim(вариант не оч)

// NOT WORKING #!@#!@#!@#!@#!@ XAXAXAXAXA
// function trim (str) {
//     if (typeof str !== 'string') {
//         return null;
//     }
    
//     console.log('str.length', str.length);

//     let newString = '';

//     if (str[0] == false && str[str.length - 1] == false) {
//         for (let i = 1; i < str.length - 1; i++) {
//             newString += str[i];
//         }

//         console.log('newString.length', newString.length);
//         return newString;
//     }
    
//     if (str[0] == false) {
//         for (let i = 1; i < str.length; i++) {
//             newString += str[i];
//         }

//         console.log('newString.length', newString.length);
//         return newString;
//     }
   
//     if (str[str.length - 1] == false) {
//         for (let i = 0; i < str.length - 1; i++) {
//             newString += str[i];
//         }

//         console.log('newString.length', newString.length);
//         return newString;
//     }
// }

// let hi = '    Hello!       ';

// console.log(trim(hi));
// console.log(hi.trim());






// ниже одно из условий для trim(тоже не оч)

//     if (str[0] == false && str[str.length - 1] == false) {
//         for (let i = 1; i < str.length - 1; i++) {
//             newString += str[i];
//         }

//         console.log('newString.length', newString.length);
//         return newString;
//     }
    
//     if (str[0] == false) {
//         for (let i = 1; i < str.length; i++) {
//             newString += str[i];
//         }

//         console.log('newString.length', newString.length);
//         return newString;
//     }
   
//     if (str[str.length - 1] == false) {
//         for (let i = 0; i < str.length - 1; i++) {
//             newString += str[i];
//         }

//         console.log('newString.length', newString.length);
//         return newString;
//     }
