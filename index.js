function capitalize(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}


function lowercase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.toLowerCase();
}

function uppercase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.toUpperCase();
}




function reverse(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.split('').reverse().join('');
}


module.exports = {
    capitalize,
    lowercase,
    uppercase,
    reverse
};