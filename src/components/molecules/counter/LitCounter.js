import { LitElement, html, css } from 'lit';
import { timeDifference } from '../../../utils/time.js'

export class LitCounter extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      time: { type: Number },
      diff: { type: Object }
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

    lit-button {
      margin-top: 40px;
    }

    `;
  }

  constructor() {
    super();
    this.title = 'Welcome!'
    this.subtitle = 'The last time you access was'
    this.time = 1627312821;
    const now = new Date();
    const last =  new Date(this.time);
    this.diff = timeDifference(now, last);
  }

  connectedCallback() {
    super.connectedCallback()
    console.log('añadiendo counter')

  }

  disconnectedCallback() {
    super.disconnectedCallback()
    console.log('Eliminando counter')
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
        <lit-button href="/home">Logout</lit-button>
      </div>
    `;
  }
}