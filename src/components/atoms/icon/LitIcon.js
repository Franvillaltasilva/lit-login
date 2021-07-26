import { LitElement, html, css } from 'lit';

export class LitIcon extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  static get styles() {
    return css`

    `;
  }

  constructor() {
    super();
    this.name = 'lock-outline'
  }

  render() {
    const ROUTE = '../assets/icons/';
    return html`
      <img alt="Lock icon" src="${ROUTE}${this.name}.svg"/>
    `;
  }
}
