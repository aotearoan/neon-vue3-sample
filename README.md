# Vue 3 Neon Test Application

## Run test application
```shell
npm install
npm run dev
```
## Install & use Neon
### Dependency
   Install the dependency (6.0.0-beta.1 or greater)
```shell
npm install @aotearoan/neon@6.0.0-beta.1
```
### Add HTML classes
   Add the necessary classes to the HTML document root (see index.html)
   ```html
   <html lang="en" class="app neon neon-theme--smooth neon-mode--dark">
   ```
   These are the default settings when a user hits the page, these can be manipulated using the helpers.
### Add SASS
   Import (@use) the selected theme and use the new *_with_* syntax to override any Neon SASS variables (see src/App.scss).
```scss
@use '@aotearoan/neon/themes/smooth' with (
    $neon-components: (NeonLabel),
    $neon-heading-font-family: unquote('"Plus Jakarta Sans", sans-serif'),
    $neon-h1-size: 48px,
    $neon-color-primary: #8d6200,
    $neon-border-radius-drawer: 0,
);
```
### Start using components
Use components as you would a normal Vue 3 lib (Don't forget to add any components you use to the $neon-components list in the SASS overrides - this makes sure the SCSS uses tree shaking).

Import the components:
```typescript
import { defineComponent } from 'vue';
import { NeonLabel } from '@aotearoan/neon';

export default defineComponent({
    name: 'App',
    components: {
        NeonLabel,
    },
});
```
Then use the components in the template:
```vue
<template>
  <div>
    <neon-label color="primary" label="O Hai" />
  </div>
</template>
```
### NOTES
- Neon 6 is currently only in Beta so your mileage may vary
- Only the _smooth_ theme is currently supported, the others will be provided soon.
- The exact same component list as before is supported, please refer to the Vue 2 demo website - https://aotearoan.github.io/neon/
- Note that some options have changed (e.g. _value_ replaced with _modelValue_) so please refer to the JS Docs in the code on the Vue 3 branch (https://github.com/aotearoan/neon/tree/vue3) for exact details until the documentation site is refreshed (coming soon)
- the vue-i18n dependency has been removed, the few strings that exist in Neon can all be overridden, see docs for more.
