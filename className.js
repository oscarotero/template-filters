module.exports = function className(...names) {
    const values = [];

    names.forEach((name) => handle(values, name));

    return values.join(' ');
};

function handle(values, name) {
    if (!name) {
        return;
    }

    if (typeof name === 'string') {
        add(values, name);
        return;
    }

    if (Array.isArray(name)) {
        name.forEach((value) => handle(values, value));
        return;
    }

    for (let [key, value] of Object.entries(name)) {
        if (value) {
            add(values, key);
        }
    }
}

function add(values, value) {
    if (!value) {
        return;
    }

    if (!values.includes(value)) {
        values.push(value);
    }
}
