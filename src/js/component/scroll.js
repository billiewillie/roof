const burgerMenu = $('.burger__menu');
const mobileHidden = $('.mobile__hidden');
const wrapper = $('.wrapper');

export default $('.scroll').on('click', function(e){
  e.preventDefault();
  $('.fadein__scroll').addClass('show');
  burgerMenu.removeClass('active');
  mobileHidden.removeClass('show');
  wrapper.removeClass('no-scroll');
  var $this = $(this);
  var attr = $this.attr('href');
  $("html, body").animate({
    scrollTop: $(attr).offset().top
  }, 600);
});