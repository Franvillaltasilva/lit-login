import { LitElement, html, css } from 'lit';

export class LitButton extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      button {
        outline: none;
        border: 0px;
        min-height: 44px;
        min-width: 244px;
        background-color: #004481;
        color: #fff;
        padding: 12px 10px;
      }

      button:hover {
        background-color: #0160b3;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}
