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