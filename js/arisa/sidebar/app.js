import {LitElement, css, html, nothing} from 'lit';

class ArisaSidebar extends LitElement {
  static properties = {
    hidden: {tyoe: Boolean},
    isMobile: {type: Boolean},
  };

  static styles = css`
    button:focus-visible {
        outline: 2px solid var(--color-black);
        outline-offset: -4px;
        border-radius: 10px;
    }
  `

  constructor() {
    super();
    this.hidden = true;
    this.isMobile = true;
    this.observer = new ResizeObserver((entries) => {
      for(const entry of entries) {
        this.isMobile = entry.contentRect.width < 768;
      }
    })
    this.observer.observe(document.documentElement)
  }

  toggle() {
    this.hidden = !this.hidden;
  }

  chevronLeft(style = "") {
    return html `
      <!-- https://heroicons.com/ chevron-left -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style=${style}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>  
    `
  }

  chevronRight(style = "") {
    return html `
      <!-- https://heroicons.com/ chevron-right -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style=${style}>
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    `
  }

  render() {
    return html`
      <aside style="
        width: ${this.hidden ? "3rem" : this.isMobile ? "100vw" : "20rem"};
        height: 100%;
        background-color: #fc7ec3;
        background-image: var(--theme-background-gradient);
        color: white;
        overflow: hidden;
      ">
        <div style="
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding-top: .3rem;
        ">
        ${ this.hidden ? nothing : 
          html`<div style="
            width: 3rem; height: 3rem;
          "></div>`
        }
          <button style="
            width: 3rem; height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: 0; padding: 0;
            cursor: pointer;
            color: inherit;
          " @click=${this.toggle}>
            ${(this.hidden ? this.chevronRight : this.chevronLeft)("width: 1.6rem;")}
          </div>
        </div>
        <div>
          ${!this.hidden ? html`<slot />` : nothing}
        </div>
      </aside>
    `;
  }
}

customElements.define('arisa-sidebar', ArisaSidebar);
