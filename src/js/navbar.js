import { body } from "./index.js";
import Icon from '../img/icon.png'

export function navbar() {

  const header = document.createElement('header');
  body.appendChild(header);

  const logo = document.createElement('div');
  header.appendChild(logo);
  const logoImg = document.createElement('img');
  logoImg.classList.add('icon');
  logo.appendChild(logoImg);
  logoImg.src = Icon;
  const logoTitle = document.createElement('p');
  logo.appendChild(logoTitle);
  logoTitle.textContent = 'Dragon';
  const titleSpan = document.createElement('span');
  logoTitle.appendChild(titleSpan);
  titleSpan.textContent = 'Feast';

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const aboutButton = document.createElement('button');
  const contactButton = document.createElement('button');

  nav.appendChild(homeButton)
  nav.appendChild(menuButton)
  nav.appendChild(aboutButton)
  nav.appendChild(contactButton)

  homeButton.textContent = 'Home';
  menuButton.textContent = 'Menu';
  aboutButton.textContent = 'About Us';
  contactButton.textContent = 'Contact';

  return { homeButton, menuButton, aboutButton, contactButton }
};