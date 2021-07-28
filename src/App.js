import { LitElement, html, css } from 'lit';
import './components/pages/login/lit-login.js';
import './components/pages/home/lit-home.js';
import { router } from './router/index.js';

export class App extends LitElement {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
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
    this.user = {};
    this.router = router(this, {
      '/': () => html`<lit-login @login=${this.getUser}></lit-login>`,
      '/home': () => html`<lit-home user=${this.user}></lit-home>`,
    });
  }

  render() {
    return html`
      <!-- <main>
        ${this.router.render({
          pending: () => html`<p>loading page...</p>`,
          complete: result => result,
        })}
      </main> -->

      <lit-login @login=${this.getUser}></lit-login>
      <lit-home .user=${this.user}></lit-home>
    `;
  }

  getUser(event) {
    this.user = {...event.detail.value};
    console.log('DESDE APP - ', this.user);
    debugger;
  }

}

/*
localStorage.setItem('fran@fran.com', JSON.stringify({
      email: 'fran@fran.com',
      password: '1234',
      lastConnection: 1627397027594
    }));
*/
