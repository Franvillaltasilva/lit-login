import { LitElement, html, css } from 'lit';
import '../../atoms/button/lit-button.js';
import '../../atoms/input/lit-input.js';
import '../../atoms/icon/LitIcon.js';
import '../../atoms/counter/LitCounter.js';


// initRouter(locationChange);
export class LitLogin extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--lit-login-background-color);
      }

      main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
  }

   navigateTo(path) {
    window.location.pathname = path;
  }


  render() {
    return html`
      <lit-icon></lit-icon>
      <lit-input placeholder="Email"></lit-input>
      <lit-input placeholder="Password" type="password"></lit-input>

      <lit-button @click="${() => this.navigateTo('/home')}" >Log In</lit-button>

      <lit-counter></lit-counter>
    `;
  }

}
