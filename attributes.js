const multipleArgs = ['class'];
const escapeChars = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
    "'": '&#39;',
};

module.exports = function attributes(attributes, ...names) {
    const values = {};

    handle(values, attributes);

    return names.length ? join(filter(values, names)) : join(values);
};

function handle(values, name) {
    if (!name) {
        return;
    }

    if (typeof name === 'string') {
        values[name] = true;
        return;
    }

    if (Array.isArray(name)) {
        name.forEach((value) => handle(values, value));
        return;
    }

    for (let [key, value] of Object.entries(name)) {
        if (multipleArgs.includes(key)) {
            addMultiple(values, key, value);
            return;
        }

        values[key] = value;
    }
}

function addMultiple(values, name, value) {
    if (typeof value === 'string') {
        addArray(values, name, value);
        return;
    }

    if (Array.isArray(value)) {
        value.forEach((val) => addMultiple(values, name, val));
        return;
    }

    for (let [key, val] of Object.entries(value)) {
        if (val) {
            addArray(values, name, key);
        }
    }
}

function addArray(values, name, value) {
    if (!value) {
        return;
    }

    if (!values[name]) {
        values[name] = [];
    }

    if (!values[name].includes(value)) {
        values[name].push(value);
    }
}

function join(attributes) {
    const values = [];

    for (let [name, value] of Object.entries(attributes)) {
        if (value === undefined || value === null || value === false) {
            continue;
        }

        if (value === true) {
            values.push(name);
            continue;
        }

        if (Array.isArray(value)) {
            if (value.length) {
                values.push(`${name}="${escape(value.join(' '))}"`);
            }
            continue;
        }

        values.push(`${name}="${escape(value)}"`);
    }

    return values.join(' ');
}

function escape(value) {
    return value.replace(/[&<>'"]/g, (match) => escapeChars[match]);
}

function filter(attributes, names) {
    const filtered = {};

    names.forEach((name) => {
        if (name in attributes) {
            filtered[name] = attributes[name];
        }
    });

    return filtered;
}
