# Figma Plugin template with Vue.js
![figma_plus_vue](https://power-firefly-112.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F846bbe4f-3bbe-41db-9557-6f89917dcafe%2Ffigma_plus_vue.png?table=block&id=089a615a-bb96-4ce9-9a7d-edb35477d2eb&spaceId=d2076882-434f-446a-9854-ec03439a9b71&width=2000&userId=&cache=v2)

This template recreates the [base plugin with UI](https://www.figma.com/plugin-docs/intro/) offered by Figma when creating a new plugin, but implemented with Vue3 and Vite.

## Get started

### **Building the project locally**

```
git clone git@github.com:joaomarcelofm/figma-plugin-template-vue.git
cd figma-plugin-template-vue
npm install
npm start
```

### Importing plugin into figma

Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from your new repo.

## Using the template

### Development

The [ui.vue](https://github.com/joaomarcelofm/figma-plugin-template-vue/blob/main/src/ui/ui.vue) is the main component that will generate the Plugin's UI, you can use it directly or create children components (as the [sample-component.vue](https://github.com/joaomarcelofm/figma-plugin-template-vue/blob/main/src/components/sample-component.vue) provided) to create your views.

Vite will compile your application and output a Figma ready code in `dist/src/ui.html`.

### Deployment

When running `npm start` your application will be compiled on save, but you can also build a production ready application running `npm run build`.

\* The `manifest.json` file in this template doesn't include an `id` for the plugin. This information will be provided by Figma at the time of publishing the plugin which then should be included to your project's manifest.

## Tooling

-   [Vue3](https://v3.vuejs.org/)
-   [Vite](https://vitejs.dev/)
-   [Typescript](https://www.typescriptlang.org/)

## Useful resources

-   Create Figma Plugin ([Utilities](https://yuanqing.github.io/create-figma-plugin/utilities/) & [Recipes](https://yuanqing.github.io/create-figma-plugin/recipes/))
-   [UI with Figma DS](https://github.com/alexwidua/figma-plugin-ds-vue)
