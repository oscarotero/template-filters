# template-filters

Collection of generic filters to use in any template engine like Nunjucks, Liquid, Handlebars, ejs etc.
**Zero dependencies**

## Install

```sh
npm i template-filters --save-dev
```

Add filters to, for example, a [11ty](https://www.11ty.dev/docs/filters/) static site:

```js
eleventyConfig.addFilter('attributes', require('template-filters/attributes'));
```

### className

To generate classNames attributes:

```njk
<div class="{{ ['foo', {bar: true}] | className }}">
```

Render to:

```njk
<div class="foo bar">
```

### attributes

To generate html attributes:

```njk
<div {{ { hidden: true, class: ['foo', 'bar']} | attributes }}">
```

Render to:

```njk
<div hidden class="foo bar">
```

Use arguments to filter attributes:

```njk
<div {{ { hidden: true, name: 'foo', id: 'bar'} | attributes('hidden', 'id') | safe }}">
```

Render to:

```njk
<div hidden id="bar">
```
