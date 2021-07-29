import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import '../../atoms/button/lit-button.js';
import '../../molecules/counter/lit-counter.js';

export class LitHome extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
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
      text-align: center;
      font-size: 1.5em;
      color: #1a2b42;
    }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    const param = window.location.pathname.split(':')[1];
    this.user = JSON.parse(localStorage.getItem(param));
  }

  render() {
    return html`
      <lit-counter lastConnection=${this.user?.lastConnection}></lit-counter>
      <lit-button size="small" @click="${this.logout}">Logout</lit-button>
    `;
  }


  logout() {
    localStorage.setItem(this.user?.email, JSON.stringify({
      email: this.user?.email,
      password: this.user?.password,
      lastConnection: new Date().getTime(),
    }));
    Router.go('');
  }
}
