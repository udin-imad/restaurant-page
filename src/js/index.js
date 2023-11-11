import { navbar } from "./navbar.js";
import { home } from "./home.js";
import { about } from "./about-us.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

export const body = document.querySelector('#content');
const button = navbar()
export const hero = document.createElement('div');
hero.setAttribute('id', 'hero');
body.appendChild(hero);
home();

button.homeButton.addEventListener('click', () => {
  refresh()
  home()
});

button.aboutButton.addEventListener('click', () => {
  refresh()
  about()
});

button.menuButton.addEventListener('click', () => {
  refresh();
  menu();
});

button.contactButton.addEventListener('click', () => {
  refresh()
  contact()
})

function refresh() {
  hero.textContent = ''
}