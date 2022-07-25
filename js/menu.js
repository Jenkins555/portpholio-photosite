window.onload = function () {

  let burger = document.querySelector('#nav-icon6');
  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    let menuMobile = document.querySelector('.wrapper_menu');
    let logo = document.querySelector('.logo')
    menuMobile.classList.toggle('wrapper_menu_open');
    document.querySelector('body').classList.toggle('body_overflow');
    logo.classList.toggle('logo_swap');
  })

  let btn = document.querySelector('.knopka')
  let tel = document.querySelector('.phone-button')
  let wats = document.querySelector('.whatsapp-button')
  let inline = document.querySelector('#inline')
  let letter = document.querySelector('.absolute_message')
  let close = document.querySelector('#close')
  //
  function magic() {
    if (window.pageYOffset > 20) {
      btn.style.opacity = '1';
      tel.style.opacity = '1';
      wats.style.opacity = '1';
      letter.style.opacity = '1';
    } else {
      btn.style.opacity = '0';
      tel.style.opacity = '0';
      wats.style.opacity = '0';
      letter.style.opacity = '0';
    }
  }
  //
  btn.onclick = function () {
    window.scrollTo(0, 0)
  }

  letter.addEventListener('click', function () {
    inline.style.display = "block";
  })
  close.addEventListener('click', function () {
    inline.style.display = "none";
  })
  // When scrolling, we run the function
  window.onscroll = magic


}