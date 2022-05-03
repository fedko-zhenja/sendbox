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

    let newStr = '';

    for (let i = index1; i < index2; i++) {
        newStr = newStr + str[i];
    }
  return newStr;
}

// console.log(substring('Hello, my love!', 10, 15));



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

    let newStr = '';


    if (index1 < 0 && index2 < 0) {
        for (let i = index1; i >= 0; i--) {
            newStr = newStr + str[i];
        }
      return newStr;
    }
    





    for (let i = index1; i < index2; i++) {
        newStr = newStr + str[i];
    }
  return newStr;
}

console.log(slice('Hello, my love!', 10, ));










// function trim (str) {
//     if (typeof str !== 'string') {
//         return null;
//     }

//     let newStr = '';
//     let a ;
//     let b ;
//     for (let i = 0; i < str.length; i++) {
//         if (str[0] === '') {
//             a = str[0];
//         } else if (str[-1] === '') {
//             b = str[-1];
//         } else {
//             newStr = str[i];
//         }
//     }
    
// }




