import { hero } from "./index.js";

export function contact() {
  const contact = document.createElement('div');
  hero.appendChild(contact);
  contact.setAttribute('id', 'contact');

  const reservation = document.createElement('div');
  contact.appendChild(reservation);
  const titleReserv = document.createElement('h1');
  reservation.appendChild(titleReserv);
  titleReserv.textContent = 'Reservation Number';
  const numberReserv = document.createElement('p');
  reservation.appendChild(numberReserv);
  numberReserv.textContent = '054466899';

  const delivery = document.createElement('div');
  contact.appendChild(delivery);
  const titleDel = document.createElement('h1');
  delivery.appendChild(titleDel);
  titleDel.textContent = 'Delivery Order';
  const numberDel = document.createElement('p');
  delivery.appendChild(numberDel);
  numberDel.textContent = '056698741';
}