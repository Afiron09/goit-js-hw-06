const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
const createLiImg = images.map(({ url, alt }) => 
  `<li class='item'><img class='img_item' src='${url}' alt=${alt}></li>`
).join('');
gallery.insertAdjacentHTML("beforeend", createLiImg);
gallery.setAttribute('style','width: 300; height: 300; display: flex; flex-direction: column-reverse; align-items: center; justify-content: center; list-style-type: none; margin: 0; padding: 0;')