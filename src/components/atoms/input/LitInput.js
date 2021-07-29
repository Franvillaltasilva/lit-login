import { LitElement, html, css } from 'lit';

export class LitInput extends LitElement {
  static get properties() {
    return {
      placeholder: { type: String },
      type: { type: String },
      value: { type: String },
    };
  }

  static get styles() {
    return css`
      input {
        margin-bottom: 16px;
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
    this.value = '';
  }

  render() {
    return html`
      <input
        type=${this.type}
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this.inputChange}
      />
    `;
  }

  inputChange(event) {
    this.value = event.target.value;
    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }
}
