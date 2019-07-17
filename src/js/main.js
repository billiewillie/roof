// import * as photostack from 'photostack'
import "slick-carousel";
import "lightbox2";
import calc from "./component/calc";
import * as burger from "./component/nav";
import * as scroll from "./component/scroll";
import * as accordion from "./component/accordion";

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(54476875, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});

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

// const listItem = Array.from(document.querySelectorAll('.list__item'));

// for(let i = 0; i < listItem.length; i++){
//   listItem[i].addEventListener('click', function(e) {
//     listItem[i].classList.toggle('checked');
//     const checkBox = e.target.children[2].children[0];
//     if (checkBox.checked == true){
//       checkBox.checked = false;
//     } else {
//       checkBox.checked = true;
//     }
//   });
// }

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

$(document).ready(function() {
	//E-mail Ajax Send
	$("form.form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "./assets/php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Мы с вами скоро свяжемся.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});