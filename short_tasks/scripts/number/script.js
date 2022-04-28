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

testFunction(testArray, isNaN);

// ===========

function isNumber (value) {
    if (typeof value === "number" && isNaN(value) === false) {
        return true;
    } else {
        return false;
    }
}

testFunction(testArray, isNumber);





function hasRemainder(value) {
    if (value % 1 == 0) {
        return true;
    } else {
        return false;
    }
}

testFunction(testArray, hasRemainder);



function isFractionalNumber (value) {
    if (isNumber(value) === true && hasRemainder(value) === false) {
        return true;
    } else {
        return false;
    }
}

testFunction(testArray, isFractionalNumber);


// console.log(isFractionalNumber(2.36));
// console.log(isFractionalNumber(20));
// console.log(isFractionalNumber(222.97));
// console.log(isFractionalNumber(NaN));
// console.log(isFractionalNumber(null));
// console.log(isFractionalNumber(undefined));
// console.log(isFractionalNumber(-20));



// function 
