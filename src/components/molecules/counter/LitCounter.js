import { LitElement, html, css } from 'lit';
import { timeDifference } from '../../../utils/time.js'

export class LitCounter extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      lastConnection: { type: Number },
    };
  }

  static get styles() {
    return css`
    h1 {
      font-size: 2em;

    }
    h2 {
      font-size: 1em;
      font-weight: 500;
      color: #7d7d7d;
    }
    p {
      margin: 0;
      color: #7d7d7d;
    }
    .time-box {
      margin: 32px 0px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 8px;
    }

    .time-box .time {
      font-size: 1.8em;
      margin-bottom: 4px;
    }
    `;
  }

  constructor() {
    super();
    this.title = 'Welcome!';
    this.subtitle = 'The last time you access was';
    this.lastConnection = 0;
    console.log('se crea counter')

  }

  connectedCallback() {
    super.connectedCallback();
    const now = new Date();
    const last = new Date(this.lastConnection);
    console.log('now', now);
    console.log('last', last);
    console.log('this.lastConnection', this.lastConnection);
    this.diff = timeDifference(now, last);

  }

  updated(changedProperty) {
  }

  render() {
    return html`
      <div class="counter">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
        <div class="time-box">
          <div>
            <p class="time">${this.diff.days}</p>
            <p>days</p>
          </div>
          <div>
            <p class="time">${this.diff.hours}</p>
            <p>hours</p>
          </div>
          <div>
            <p class="time">${this.diff.minutes}</p>
            <p>minutes</p>
          </div>
          <div>
            <p class="time">${this.diff.seconds}</p>
            <p>seconds</p>
          </div>
        </div>
      </div>
    `;
  }
}
