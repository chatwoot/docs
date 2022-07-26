---
title: "Frontend Guidelines"
---

This guide explains the best practices, patterns used in frontend development.

### Events vs. props for methods in Vue Components

Prefer events instead of passing a function down to the component. This helps you to write **_@methods_** on the component. Read the official doc on listening to child components [here](https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events).

```vue
// Bad
<template>
  <child-component :on-close="handleClose" />
</template>

// Good
<template>
  <child-component @close="handleClose" />
</template>
```

---

### Usage of computed properties

While having logic or conditions inside the Vue template, prefer writing a computed property than a complex logic.

```vue
// Bad
<template>
  <child-component :is-available="a > b && c - d === 2" />
</template>

// Good
<template>
  <child-component @close="handleClose" />
</template>
<script>
export default {
  computed() {
    isAvailable() {
      return this.a > this.b && (this.c - this.d) === 2
    }
  }
}
</script>
```

---

### Use CSS Variables instead of SCSS variables

We have CSS variables defined for spacing, font size, colors, etc., instead of importing SCSS variables in the dashboard. We are promoting the Usage of CSS variables as it helps us to customize the dashboard during runtime.

---

### Follow semantics while writing HTML

Avoid using block dom nodes like div, section etc to wrap text inside HTML. Read more about HTML semantics [here](https://www.html5rocks.com/en/features/semantics)

---

### Note on accessibility

- Use alt tags for all images you have added to the code.
- Use an anchor tag to place links to other pages, do not use it to create a link button.

Read about accessiblity [here](https://developers.google.com/web/fundamentals/accessibility)

---

### CSS naming convention.

Follow [BEM](http://getbem.com/naming/) guidelines for CSS naming. While planning DOM structuring to adapt the style needed for CSS, keep it simple and readable. If possible, use pseudo selectors as an alternative to dummy dom nodes just for use in CSS styling. More on this [here](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)

Note: We have used OOCSS at places that need to be rewritten.

---

### Naming convention for vuex actions

All the CRUD API actions should follow the same name as Rails APIs. See the following example.

```
fetchAllHelpCenters => index
fetchOneHelpCenter => show
createHelpCenter => create
updateHelpCenter => update
deleteHelpCenter => delete
```

This makes it easier to read and understand the methods. For e.g.: Instead of `portals/fetchAllHelpCenters`, this becomes `portals/index`.

---

### Avoid manipulating DOM directly

In most cases, there is no need to manipulate the DOM directly. Use Vue methods and state to change the DOM elements. Vue is data driven and thus its features are built around this concept. It’s not encourage to manipulate the DOM “the jQuery way”. If you want to access DOM directly, use [this.$refs](https://vuejs.org/guide/essentials/template-refs.html#accessing-the-refs).
