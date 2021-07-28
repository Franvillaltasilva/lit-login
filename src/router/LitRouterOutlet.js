import { LitElement, html } from "lit";
import { outlet } from "lit-element-router";


export class LitRouterOutlet extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}
