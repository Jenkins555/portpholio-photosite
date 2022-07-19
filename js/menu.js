window.onload = function() {

let burger = document.querySelector('#nav-icon6');
burger.addEventListener('click', function () {
  burger.classList.toggle('open');
  let menuMobile = document.querySelector('.wrapper_menu');
  let logo = document.querySelector('.logo')
  menuMobile.classList.toggle('wrapper_menu_open');
  logo.classList.toggle('logo_swap');
})

let btn = document.querySelector('.knopka')
let tel = document.querySelector('.phone-button')
let wats = document.querySelector('.whatsapp-button')
//
function magic() {
  if (window.pageYOffset > 20) {
    btn.style.opacity = '1';
    tel.style.opacity = '1';
    wats.style.opacity = '1';
  } else { btn.style.opacity = '0';
  tel.style.opacity = '0';
  wats.style.opacity = '0';
}
}
//
btn.onclick = function () {
	window.scrollTo(0,0)
}

// When scrolling, we run the function
window.onscroll = magic

}