# template-filters

Collection of generic filters to use in any template engine like Nunjucks, Liquid, Handlebars, ejs etc.

## className

To generate classNames attributes:

```njk
<div class="{{ ['foo', {bar: true}] | className }}">
```

Render to:

```njk
<div class="foo bar">
```

## attributes

To generate html attributes:

```njk
<div {{ { hidden: true, class: ['foo', 'bar']} | attributes }}">
```

Render to:

```njk
<div hidden class="foo bar">
```
