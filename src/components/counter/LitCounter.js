import { LitElement, html, css } from 'lit';

export class LitCounter extends LitElement {
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
      Counter
    `;
  }
}
