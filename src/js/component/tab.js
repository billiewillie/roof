$('.nav-tabs a:first').addClass('active');
$('.tab__content li.tab__content--inner').hide();
$('.tab__content li.tab__content--inner:first').show();

$('.tab__inner--item:first').addClass('active');

$('a.tab__item').on('click', function(){
  $('.nav-tabs a.tab__item').removeClass('active');
  $(this).addClass('active')
  $('li.tab__content--inner').hide();
  var activeTab = $(this).attr('href');
  $(activeTab).show(); 
  if($('.nav-tabs a.tab__item:eq(1)').hasClass('active')){
    $('.tabs').addClass('min');
  } else {
    $('.tabs').removeClass('min');
  }
  return false;
});

if($('.offer__item--contact.open').length < 1) {
  $('li.tab__content--inner:first .tab__inner--item .offer__item--cover .button').on('click', function() {
    $('.tab__inner--item').removeClass('active');
    $(this).parents(".tab__inner--item").addClass('active');
  });
}
