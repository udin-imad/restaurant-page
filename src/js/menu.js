import { hero } from "./index.js";
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'

export function menu() {
  const menu = document.createElement('div');
  hero.appendChild(menu);
  menu.classList.add('menu')

  const menu1 = document.createElement('div');
  menu.appendChild(menu1);
  const menuTitle1 = document.createElement('h1');
  menu1.appendChild(menuTitle1);
  menuTitle1.textContent = 'Noodle Dragon Fiery';
  const menuImg1 = document.createElement('img');
  menu1.appendChild(menuImg1);
  menuImg1.src = image1;

  const menu2 = document.createElement('div');
  menu.appendChild(menu2);
  const menuTitle2 = document.createElement('h1');
  menu2.appendChild(menuTitle2);
  menuTitle2.textContent = 'Silk White Spicy Tofu';
  const menuImg2 = document.createElement('img')
  menu2.appendChild(menuImg2);
  menuImg2.src = image3;

  const menu3 = document.createElement('div');
  menu.appendChild(menu3);
  const menuTitle3 = document.createElement('h1');
  menu3.appendChild(menuTitle3);
  menuTitle3.textContent = 'Great Dumpling Emperor';
  const menuImg3 = document.createElement('img')
  menu3.appendChild(menuImg3);
  menuImg3.src = image2;
}