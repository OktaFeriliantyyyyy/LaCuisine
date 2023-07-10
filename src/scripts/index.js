import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './components/header-component';
import './components/drawer-component';
import './components/footer-component';
import './components/skipcontent-component';

const app = new App({
  drawer: document.querySelector('#drawer'),
  button: document.querySelector('#menu_resp'),
  content: document.querySelector('main'),
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});
