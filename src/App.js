import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import './components/pages/login/lit-login.js';
import './components/pages/home/lit-home.js';

export class App extends LitElement {

  constructor() {
    super();
    const router = new Router(document.getElementById('outlet'));
    router.setRoutes([
      {
        path: '/',
        component: 'lit-login'
      },
      {
        path:'/home/:user',
        component: 'lit-home',
      },
      {
        path: '(.*)',
        component: 'lit-login'
    },
    ]);
  }


  render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}
