export default function className(...names) {
    const values = [];

    names.forEach((name) => {
        if (typeof name === 'string') {
            addUnique(values, name);
            return;
        }

        if (Array.isArray(name)) {
            name.forEach((value) => addUnique(values, value));
            return;
        }

        for (let [key, value] of Object.entries(name)) {
            if (value) {
                addUnique(values, key);
            }
        }
    });

    return values.join(' ');
}

function addUnique(arr, value) {
    if (!value) {
        return;
    }

    if (!arr.includes(value)) {
        arr.push(value);
    }
}
