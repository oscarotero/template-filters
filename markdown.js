module.exports = function markdown(markdown) {
    return function (string, inline = false) {
        const result = markdown.render(string || '').trim();

        return !inline
            ? result
            : result
                  .replace(/^<p>/, '')
                  .replace(/<\/p>$/, '')
                  .trim();
    };
};
