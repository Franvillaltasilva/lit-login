import { LitElement, html, css } from 'lit';
import './components/pages/login/lit-login.js';
import './components/pages/home/lit-home.js';
import './router/lit-router-outlet.js';
// import { router } from './router/index.js';
import { router } from "lit-element-router";

export class App extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object },
      user: { type: Object },
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

  static get routes() {
    return [
      {
        name: "login",
        pattern: "",
      },
      {
        name: "home",
        pattern: "home"
      },
    ];
  }


  constructor() {
    super();
    this.user = {};
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
    // this.router = router(this, {
    //   '/': () => html`<lit-login @login=${this.getUser}></lit-login>`,
    //   '/home': () => html`<lit-home .user=${this.user}></lit-home>`,
    // });
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data);
  }

  render() {
    return html`

      <lit-router-outlet active-route=${this.route}>
        <lit-login route="login" @login=${this.getUser}></lit-login>
        <lit-home route="home" .user=${this.user}></lit-home>
        <h1 route="not-found">No se encontró</h1>
      </lit-router-outlet>

    `;
  }

  getUser(event) {
    this.user = {...event.detail.value};
    console.log('DESDE APP - ', this.user);
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
