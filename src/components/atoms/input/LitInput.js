import { LitElement, html, css } from 'lit';

export class LitInput extends LitElement {
  static get properties() {
    return {
      placeholder: { type: String },
      type: { type: String },
    };
  }

  static get styles() {
    return css`
      input {
        margin-bottom: 10px;
        outline: none;
        border: 0px;
        border-bottom: 2px solid gray;
        background-color: transparent;
        min-height: 30px;
        min-width: 244px;
        box-sizing: fit-content;
      }

      input:focus {
        border-bottom: 2px solid #004481;
      }
    `;
  }

  constructor() {
    super();
    this.placeholder = '';
    this.type = 'text';
  }

  render() {
    return html`
      <input placeholder="${this.placeholder}" type="${this.type}"/>
    `;
  }
}
