import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
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
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        max-width: 960px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        color: #1a2b42;
      }
    `;
  }

  constructor() {
    super();
    this.email = '';
    this.password = '';
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
      Router.go(`./home/:${this.email}`);
    } else {
      console.error('Login failed');
    }
  }
}
