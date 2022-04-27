function isNaN (value) {
    if (value !== value) {
        return true;
    } else {
        return false;
    }
}

function isNumber (item) {
    if (typeof item === "number" && isNaN(item) === false) {
        return true;
    } else {
        return false;
    }
}

console.log('NaN', isNumber(NaN));
console.log(1, isNumber(1));
console.log('hi', isNumber('hi'));
console.log('undefined', isNumber(undefined));
console.log('null', isNumber(null));
console.log('Objeck', isNumber({}));
console.log('Array', isNumber([]));
