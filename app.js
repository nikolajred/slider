
document.addEventListener('DOMContentLoaded', () => {

const linkArray = ['img/fruits.jpg', 'img/fruits1.jpg', 'img/fruits2.jpg', 'img/fruits3.jpg', 'img/fruits4.jpg'];
const imgTegArray = [];
let img = document.querySelector('.images');
function createElement(){
    for (let i = 0; i < linkArray.length; i++) {
        let div = document.createElement('img');
        div.setAttribute('id', i+1);
        div.setAttribute('src', `${linkArray[i]}`);
        imgTegArray.push(div);
    }
    return imgTegArray;
}
createElement();

console.log(imgTegArray[0]);


img.appendChild(imgTegArray[Math.floor(Math.random()*imgTegArray.length)]);






let arrow_right = document.querySelector('.arrow_right');
console.log(arrow_right);
arrow_right.addEventListener('click', changeElementPlus = (event) =>{
    console.log(arrow_right);
    let newTeg = document.querySelector('.images img');
    let num = parseInt(newTeg.id);
    console.log(num);
    if(num > 0 && num < imgTegArray.length){
    newTeg.remove();
    console.log(num);
    img.appendChild(imgTegArray[num]);
    num++;
    console.log(num);
        }
});


let arrow_left = document.querySelector('.arrow_left');
console.log(arrow_left);
arrow_left.addEventListener('click', changeElementMinus = (event) =>{
    
    let newTeg = document.querySelector('.images img');
    let num = newTeg.id-2;
    
    if(num >= 0 && num <= imgTegArray.length){
    newTeg.remove();
    // num-=2;
    console.log(num);
    // if(num>=-2){
        img.appendChild(imgTegArray[num]);
    num--;
 // }
}
});

// function score(){
//     let counter = document.querySelector('.counter');
//     let score = document.createElement('div');
//     score.innerHTML = `${document.querySelector('.images img').id} ${imgTegArray.length}`;
//     counter.appendChild(score);
// }
// arrow_left.addEventListener('click', score);
// arrow_right.addEventListener('click', score);


// counter.appendChild()

// let imageCount = imageArray.length;
// let leftArrown = document.querySelector('.arrow_left');
// let rightArrow = document.querySelector('.arrow_right');
// let counter = document.querySelector('.counter');
// let slide = document.querySelector('.images');


// function createImage(){
// let pict = document.createElement('img');
// pict.setAttribute('src', `${imageArray[id].img}`);
// pict.setAttribute('id', `${id}` )
// slide.appendChild(pict);
// }

// createImage();

});


