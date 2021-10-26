
document.addEventListener('DOMContentLoaded', () => {

const imageArray = [
{name: 'fruits',
 id: 1,
 img: 'img/fruits.jpg'},

{name: 'fruits1',
 id: 2,
 img: 'img/fruits1.jpg'},

{name: 'fruits2',
 id: 3,
 img: 'img/fruits2.jpg'},

{name: 'fruits3',
 id: 4,
 img: 'img/fruits3.jpg'},

{name: 'fruits4',
 id: 5,
 img: 'img/fruits4.jpg'}
 ]

window.number = 0;

let id = Math.floor(Math.random() * 6);

if(id >= 6 || id <=0){
	id = 1;
}

let imageCount = imageArray.length;

let leftArrown = document.querySelector('.arrow_left');

let rightArrow = document.querySelector('.arrow_right');

let counter = document.querySelector('.counter');

let slide = document.querySelector('.images');


function createImage(){
let pict = document.createElement('img');
pict.setAttribute('src', `${imageArray[id].img}`);
pict.setAttribute('id', `${id}` )
slide.appendChild(pict);
}

createImage();

});


