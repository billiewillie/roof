export default $('.scroll').on('click', function(e){
  e.preventDefault();
  var $this = $(this);
  var attr = $this.attr('href');
  $("html, body").animate({
    scrollTop: $(attr).offset().top
  }, 600);
});