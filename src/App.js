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

/*
localStorage.setItem('lit@login.com', JSON.stringify({
      email: 'lit@login.com',
      password: '1234',
      lastConnection: 1627065836
    }));

    <!-- <main>
        ${this.router.render({
          pending: () => html`<p>loading page...</p>`,
          complete: result => result,
        })}
      </main> -->
*/
