import { hero } from "./index.js";

export function home() {
  const homePage = document.createElement('div');
  hero.appendChild(homePage);

  const title = document.createElement('h1');
  homePage.appendChild(title);
  title.textContent = 'Welcome to Dragon Feast';
  const description = document.createElement('p');
  homePage.appendChild(description);
  description.innerHTML = `Discover a symphony of flavors at Dragon Feast, where tradition meets innovation in the heart of China Town. Our culinary artisans blend time-honored Chinese recipes with a modern twist, offering a dining experience that transcends the ordinary.<br> <br> Savor the richness of Szechuan spices, indulge in delicate Cantonese creations, and find comfort in our elegant garden terrace. Join us on a journey of taste and elegance, where every dish tells a story and every meal is a celebration. <br> <br> Experience the warmth of our welcoming ambiance and let the Dragon Feast be your sanctuary for culinary exploration and good fortune.`
  const image = document.createElement('img');
  image.setAttribute('src', './img/image.png');
  hero.appendChild(image);
}