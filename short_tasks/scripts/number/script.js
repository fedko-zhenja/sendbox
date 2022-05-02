function testFunction (arr, func) {
    console.warn('====== TESTING FUNCTION:', func.name);
    for (let i = 0; i < arr.length; i++){
        console.log(`${typeof arr[i]}:${arr[i]}`, func(arr[i]));
    }
}

//========

function isNaN (value) {
    if (value !== value) {
        return true;
    } else {
        return false;
    }
}

const testArray = [NaN, 1, 'hi', undefined, null, {}, [], 2.222, -25, 338.47];

// testFunction(testArray, isNaN);

// ===========

function isNumber (value) {
    if (typeof value === "number" && isNaN(value) === false) {
        return true;
    } else {
        return false;
    }
}

// testFunction(testArray, isNumber);



// имеет остаток
function hasRemainder(value) {  
    if (value % 1 !== 0) {
        return true;
    } else {
        return false;
    }
}

// testFunction(testArray, hasRemainder);

// дробное число
function isFractionalNumber (value) {
    if (isNumber(value) === true && hasRemainder(value) === true) {
        return true;
    } else {
        return false;
    }
}

// testFunction(testArray, isFractionalNumber);


function isIntegerNumber (value) {
    if (isNumber(value) === true && hasRemainder(value) === false) {
        return true;
    } else {
        return false;
    }
}
