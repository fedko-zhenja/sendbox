function isNaN (value) {
    if (value !== value) {
        return true;
    } else {
        return false;
    }
}

function isNumber (value) {
    if (typeof value === "number" && isNaN(value) === false) {
        return true;
    } else {
        return false;
    }
}

// console.log('NaN', isNumber(NaN));
// console.log(1, isNumber(1));
// console.log('hi', isNumber('hi'));
// console.log('undefined', isNumber(undefined));
// console.log('null', isNumber(null));
// console.log('Objeck', isNumber({}));
// console.log('Array', isNumber([]));



function hasRemainder(value) {
    if (value % 1 == 0) {
        return true;
    } else {
        return false;
    }
}


function isInteger (value) {
    if (isNumber(value) === true && hasRemainder(value) === false) {
        return true;
    } else {
        return false;
    }
}

console.log(isInteger(2.36));
console.log(isInteger(20));
console.log(isInteger(222.97));
console.log(isInteger(NaN));
console.log(isInteger(null));
console.log(isInteger(undefined));
console.log(isInteger(-20));
