import { LitElement, html, css } from 'lit';
import '../../atoms/button/lit-button.js';
import '../../molecules/counter/lit-counter.js';
import { navigateTo } from '../../../utils/navigation.js';

export class LitHome extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
    };
  }

  static get styles() {
    return css`

    `;
  }

  constructor() {
    super();
    this.user = JSON.parse(localStorage.getItem('fran@fran.com'));

  }

  render() {
    return html`
      <lit-counter lastConnection=${this.user.lastConnection}></lit-counter>
      <lit-button @click="${this.logout}">Logout</lit-button>
    `;
  }

  logout() {
    localStorage.setItem('fran@fran.com', JSON.stringify({
      email: this.user.email,
      password: this.user.password,
      lastConnection: new Date().getTime(),
    }));
    navigateTo('/');
  }
}
