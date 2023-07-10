class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer">
            <div class="footer_content">
                <p>Okta Ferilianty</p>
            </div>
        </footer>
        `;
  }
}
customElements.define('footer-component', Footer);
