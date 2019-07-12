// import * as photostack from 'photostack'
import "slick-carousel";
import * as burger from "./component/nav";
import * as accordion from "./component/accordion";

$(".slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1
});
