import { LitElement, html, css } from 'lit';

export class LitCounter extends LitElement {
  static get properties() {
    return {
      time: { type: Number },
    };
  }

  static get styles() {
    return css`

    `;
  }

  constructor() {
    super();
    this.time = ''
  }

  render() {
    return html`
      Counter
    `;
  }
}
