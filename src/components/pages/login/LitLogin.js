import { LitElement, html, css } from 'lit';
import { navigateTo } from '../../../utils/navigation.js';
import '../../atoms/button/lit-button.js';
import '../../atoms/input/lit-input.js';
import '../../atoms/icon/lit-icon.js';
import '../../molecules/counter/LitCounter.js';

// initRouter(locationChange);
export class LitLogin extends LitElement {
  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
      lastConnection: 1627397027594,
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
    this.email = 'fran@fran.com';
    this.password = '1234';
  }

  render() {
    const disabledButton = this.email?.length === 0 || this.password?.length === 0;

    return html`
      <lit-icon></lit-icon>
      <lit-input
        .value=${this.email}
        @change=${this.changeEmail}
        placeholder="Email"
      ></lit-input>
      <lit-input
        .value=${this.password}
        @change=${this.changePassword}
        placeholder="Password"
        type="password"
      ></lit-input>
      <lit-button ?disabled=${disabledButton} @click="${this.login}"
        >Log In</lit-button
      >
    `;
  }

  changeEmail(event) {
    this.email = event.detail.value;
  }

  changePassword(event) {
    this.password = event.detail.value;
  }

  login() {
    const user = JSON.parse(localStorage.getItem(this.email));
    const validUser = user?.email === this.email && user?.password === this.password;
    if (validUser) {
      this.dispatchEvent(new CustomEvent('login', {
        bubbles: true,
        composed: true,
        detail: { value: user },
      }));
      //navigateTo('./home');
    } else {
      console.error('Login failed');
    }
  }
}
