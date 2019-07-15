// import * as photostack from 'photostack'
import "slick-carousel";
// require("./component/lightbox.js");
import "lightbox2";
// import * as lightbox from "./component/lightbox";
import * as burger from "./component/nav";
import * as scroll from "./component/scroll";
import * as accordion from "./component/accordion";

$(".offer__list").slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
});

$(".offer__slider .list").slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  fade: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        destroy: true
      }
    }
  ]
});

const listItem = Array.from(document.querySelectorAll('.list__item'));

for(let i = 0; i < listItem.length; i++){
  listItem[i].addEventListener('click', function(e) {
    listItem[i].classList.toggle('checked');
    const checkBox = e.target.children[2].children[0];
    if (checkBox.checked == true){
      checkBox.checked = false;
    } else {
      checkBox.checked = true;
    }
  });
}

const addBtn = Array.from(document.querySelectorAll('a.additional__button'));

for(let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener('click', function(e) {
    e.target.parentNode.children[4].classList.add('open');
  })
}


const optionsClose = Array.from(document.querySelectorAll('.options__close'));

for(let i = 0; i < addBtn.length; i++) {
  optionsClose[i].addEventListener('click', function(e) {
    console.log(e.target.parentNode.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.classList.remove('open');
  })
}


const offerBtn = Array.from(document.querySelectorAll('.offer__item a.button'));

for(let i = 0; i < addBtn.length; i++) {
  offerBtn[i].addEventListener('click', function(e) {
    e.target.parentNode.parentNode.classList.remove('open');
  })
}