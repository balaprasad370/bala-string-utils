function capitalize(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}


function reverse(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.split('').reverse().join('');
}

module.exports = {
    capitalize,
    reverse
};
