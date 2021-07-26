import { LitElement, html, css } from 'lit';
import './components/pages/home/lit-home.js';
import './components/pages/login/lit-login.js';
import { router } from './router/index.js';

// const locationChange = (location) => {
//   const { pathName } = location;
//   const urlParts = pathName.split('/');
//   urlParts.shift();
//   console.log(urlParts);
//   debugger;
// }

// initRouter(locationChange);
export class App extends LitElement {
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
    this.router = router(this, {
      '/': () => html`<lit-home></lit-home>`,
      '/login': () => html`<lit-login></lit-login>`,
    });
  }

  render() {
    return html`
      <main>
        ${this.router.render({
          pending: () => html`<p>loading page...</p>`,
          complete: (result) => result,
        })}
      </main>
    `;
  }
}