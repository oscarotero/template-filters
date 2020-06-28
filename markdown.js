module.exports = function markdown(markdown) {
    return function (string, inline = false) {
        return inline
            ? markdown.renderInline(string || '').trim()
            : markdown.render(string || '').trim();
    };
};
