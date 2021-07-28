import { LitElement, html, css } from 'lit';
import { navigator } from "lit-element-router";
import '../../atoms/button/lit-button.js';
import '../../molecules/counter/lit-counter.js';

export class LitHome extends navigator(LitElement) {
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
    console.log('constructor', this.user);

  }

  updated(changedProperty) {
    console.log('updated', changedProperty, this.user);
  }

  render() {
    return html`
      <lit-counter lastConnection=${this.user?.lastConnection}></lit-counter>
      <lit-button @click="${this.logout}">Logout</lit-button>
    `;
  }


  logout() {

    localStorage.setItem(this.user?.email, JSON.stringify({
      email: this.user?.email,
      password: this.user?.password,
      lastConnection: new Date().getTime(),
    }));
    console.log('logout', JSON.parse(localStorage.getItem(this.user.email)))
    this.navigate('');
  }
}
