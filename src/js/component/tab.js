$('.nav__inner--tabs a:first').addClass('active');
$('.tab__content li.tab__content--inner').hide();
$('.tab__content li.tab__content--inner:first').show();

$('.tab__inner--item:first').addClass('active');

$('a.tab__item').on('click',function(){
  $('.nav-tabs a.tab__item').removeClass('active');
  $(this).addClass('active')
  $('li.tab__content--inner').hide();
  var activeTab = $(this).attr('href');
  $(activeTab).show();
  return false;
});

$('.tab__inner--item').on('click',function(){
  $('.tab__inner--item').removeClass('active');
  $(this).addClass('active');
  return false;
});