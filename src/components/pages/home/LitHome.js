import { LitElement, html, css } from 'lit';
import '../../atoms/button/lit-button.js';
import '../../molecules/counter/lit-counter.js';


// initRouter(locationChange);
export class LitHome extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`

    `;
  }

  // constructor() {
  //   super();
  // }

  render() {
    return html`
      <lit-counter></lit-counter>
    `;
  }
}
