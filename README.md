# Web-Components: Creating custom elements
There are two types of custom elements that you can create:
1. Autonomous custom elements
2. Customized built-in elements

## Autonomous Custom Elements
Follow the steps to create an autonomous custom element:
1. Define a class for the custom element e.g. PopUpInfo  
Extend it from `HTMLElement` interface.

2. Inside the constructor define all functionality (html, css) and attach it to Shadow root. i.e. attach node to `this.attachShadow({ mode: 'open' })`.

3. Register custom element in `index.html` like `customElements.define('popup-info', PopUpInfo)`.

4. The custom element is now available to use in HTML page. Use it like:  
`<popup-info img="img/alt.png" data-text="Your text ..."></popup-info>`  
  
**NOTE:**
Remember to import the custom element class if defined in a different file. use the full path name in import statement. e.g. `import { PopUpInfo } from './popup.js';`

## Customized Built-in Elements
Follow the steps to create a customized built-in element:
1. Define a class for the custom element e.g. ExpandingList, but this time extend from the respective HTML element interface i.e. `HTMLUListElement`.

2. Define the functionality of the custom element in constructor as before.

3. Register the element using `customElements.define()` with `extends` option e.g.  
`customElements.define('expanding-list', ExpandingList, { extends: "ul" });`

4. In HTML, use the custom element inside `is` attribute of the parent element. e.g.  
`<ul is="expanding-list"> ... </ul>`
