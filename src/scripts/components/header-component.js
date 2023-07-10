class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
    <div class="logo">
      <a href="/">La'Cuisine</a>
    </div>
    <div class="menu">
      <ul>
        <li class="nav_item">
        <a href="/">Home</a></li>
        <li class="nav_item">
        <a href="#/favorite">Favorite</a></li>
        <li class="nav_item">
          <a target="_blank" href="https://github.com/OktaFeriliantyyyyy" rel="">About Us</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="hamburger">
    <button class="button_menu" id="menu_resp" aria-label="button to open side menu">☰</button>
    <a href="/">La'Cuisine</a>
    <div class="nav_logo">&nbsp;</div>
  </div>
  <div class="hero" id="hero">
    <div class="hero_inner">
      <p class="hero_title">La'Cuisine</p>
      <p class="hero_tagline">
      Vous voulez manger délicieux mais vous ne savez toujours pas où aller?
      </p>
    </div>
  </div>
        `;
  }
}
customElements.define('header-component', Header);
