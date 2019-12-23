let AppEditor = require('./ui/AppEditor');
let dom = require('dominant');

document.head.append(dom.el('link', {
  rel: 'stylesheet',
  href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
}));

document.head.append(dom.el('style', `
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`));

addEventListener('DOMContentLoaded', () => {
  document.body.append(window.appEditor = AppEditor());
});

window.dom = dom;
