import { LitElement, html, css } from 'lit';

export class LitButton extends LitElement {
  static get properties() {
    return {
      size: { type: String },
    };
  }

  static get styles() {
    return css`
      button {
        outline: none;
        border: 0px;
        background-color: #004481;
        color: #fff;
        padding: 12px 10px;
      }

      .medium {
        min-height: 44px;
        min-width: 244px;
      }

      .small {
        min-height: 40px;
        min-width: 120px;
      }

      button:hover {
        background-color: #0160b3;
      }
    `;
  }

  constructor() {
    super();
    this.size = 'medium';
  }

  render() {
    return html`
      <button class=${this.size}>
        <slot></slot>
      </button>
    `;
  }
}
