class Drawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="drawer" class="drawer_resp">
            <div class="drawer_list">
                <div class="drawer_item">
                <a href="/">Home</a></div>
                <div class="drawer_item">
                <a href="#/favorite">Favorite</a></div>
                <div class="drawer_item">
                <a target="_blank" href="https://github.com/OktaFeriliantyyyyy" rel="">About us</a>
                </div>
            </div>
        </div>
        `;
  }
}
customElements.define('drawer-component', Drawer);
