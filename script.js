
let sideMenu = document.getElementById('sideMenu');

function toggleMenu(){
  sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
}

let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(()=>{
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);
