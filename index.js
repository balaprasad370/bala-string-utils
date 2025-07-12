function capitalize(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

module.exports = {
    capitalize
};
