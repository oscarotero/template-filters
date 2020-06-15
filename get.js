module.exports = function get(obj, ...keys) {
    if (typeof obj !== 'object') {
        return obj;
    }

    const result = {};

    keys.forEach((key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });

    return result;
};
