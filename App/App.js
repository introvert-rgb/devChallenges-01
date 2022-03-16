import template from './template.js';

export default class WebPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template.render();
        this.shadowRoot.querySelector('.img').setAttribute('src', '../Scarecrow.png');

    }
}
if (!customElements.get('error-webpage')) {
    customElements.define('error-webpage', WebPage);
}