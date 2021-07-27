import { LitElement, html, css } from 'lit';

export class LitButton extends LitElement {
  static get properties() {
    return {
      disabled: { type: Boolean }
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

      button:disabled {
        background-color: #adaeae;
        cursor: default;
      }
    `;
  }

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
