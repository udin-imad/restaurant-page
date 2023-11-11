import { hero } from "../index.js";

export function about() {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  hero.appendChild(wrapper);

  const aboutUs = document.createElement('div');
  wrapper.appendChild(aboutUs)
  aboutUs.setAttribute('id', 'about-us');
  const title = document.createElement('h1');
  aboutUs.appendChild(title);
  title.textContent = 'About Us';
  const para = document.createElement('p');
  aboutUs.appendChild(para);
  para.innerHTML = 'Welcome to Dragon Feast, where culinary tradition meets modern innovation.<br> Nestled in the heart of the city, our restaurant is a celebration of exquisite Chinese cuisine crafted with care and creativity.';

  const description = document.createElement('div');
  description.classList.add('description');
  wrapper.appendChild(description);

  const contentOne = document.createElement('div');
  description.appendChild(contentOne)
  const contentTwo = document.createElement('div');
  description.appendChild(contentTwo)

  const titleContentOne = document.createElement('h2');
  contentOne.appendChild(titleContentOne);
  titleContentOne.textContent = 'Our Philosophy';
  const contentPara = document.createElement('p');
  contentOne.appendChild(contentPara);
  contentPara.textContent = 'At Dragon Feast, we believe in preserving the rich heritage of Chinese culinary artistry while infusing it with contemporary flair. Our chefs draw inspiration from time-honored recipes, using premium ingredients to create dishes that tantalize the taste buds and ignite the senses.'

  const titleContentTwo = document.createElement('h2');
  contentTwo.appendChild(titleContentTwo);
  titleContentTwo.textContent = 'A Symphony of Flavors'
  const contentPara2 = document.createElement('p');
  contentTwo.appendChild(contentPara2);
  contentPara2.textContent = "From the first bite to the last, every dish at Dragon Feast is a symphony of flavors. Whether you're savoring the spicy indulgence of Szechuan cuisine or reveling in the delicate balance of Cantonese specialties, each plate is a testament to our dedication to exceptional taste."
}