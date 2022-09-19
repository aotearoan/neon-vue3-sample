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