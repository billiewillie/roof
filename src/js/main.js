// import * as photostack from 'photostack'
import "slick-carousel";
import "lightbox2";
import * as stack from "./component/photostack";
import calc from "./component/calc";
import * as tab from "./component/tab";
import * as burger from "./component/nav";
import * as scroll from "./component/scroll";
import * as accordion from "./component/accordion";

(function($){
	var getRand = function (a, b) {
        return ~~(Math.random() * (b - a + 1)) + a;
    }
    var getPrefix = function(){
    	var userAgent = window.navigator.userAgent.toLowerCase();
    	if(userAgent.indexOf("msie") != -1){
    		return "-ms-";
    	}else if(userAgent.indexOf("chrome") != -1 || userAgent.indexOf("safari") != -1){
    		return "-webkit-"
    	}else if(userAgent.indexOf("firefox") != -1){
    		return "-moz-";
    	}else if(userAgent.indexOf("opera") != -1){
    		return "-o-";
    	}else{
    		return "";
    	}
    }
    var def = {
    	top:40,
    	left:500,
    	degFrom:-20,
    	degTo:20,
    	animation:"move",
    	animationSpeed:500,
    	timespan:0,
    	auto:false,
    	preventClick:false
    }
	$.prototype.Photostack = function(opt){
		opt = $.extend(def,opt);
		var $this = $(this);
		var $children = $this.children();
		var prefix = getPrefix();
		var zindex = 0;
		var width = 0;
		var height = 0;
		$this.addClass("js-photostack");
		$children.each(function(){
			var $child = $(this);
			var rand = getRand(opt.degFrom,opt.degTo);
			var rotate = "rotate("+rand+"deg)";
			$child.css(prefix+"transform",rotate);
			$child.css("transform",rotate);
			$child.css("z-index",zindex);
			zindex++;
			if($child.width() > width){
				width = $child.width();
			}
			if($child.height() > height){
				height = $child.height();
			}
		});
		$this.width(width);
		$this.height(height);
		var finished = true;
		$this.click(function(e){
			if(e.originalEvent && opt.preventClick){
				return;
			}
			if(!finished){
				return;
			}
			finished = false;
			var max = 0;
			$children.each(function(){
				var current = parseInt($(this).css("z-index"));
				current++;
				$(this).css("z-index",current);
				if(current > max){
					max = current;
				}
			});
			var $child = $children.filter(function(){
				return max == $(this).css("z-index");
			});
			if(opt.animation == "move"){
				var animationStart = {top:opt.top,left:opt.left};
				var animationEnd = {top:0,left:0};
			}else if(opt.animation = "fade"){
				var animationStart = {opacity:0};
				var animationEnd = {opacity:1};
			}
			$child
			.animate(animationStart,opt.animationSpeed)
			.queue(function(next){
				$child.css("z-index",0);
				next();
			})
			.animate(animationEnd,opt.animationSpeed)
			.queue(function(next){
				finished = true;
				next();
			});
		});
		if(opt.auto){
			setInterval(function(){$this.click()},opt.timespan+opt.animationSpeed*2);
		}
	};
})(jQuery);

$(document).ready(function() {

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
        if($('.offer__item--contact.open').length){
          $('.offer__item--contact').removeClass('open');
        }
			}, 1000);
		});
		return false;
  });

  if($('#tab__content2').hasClass('active')){
    $('.tabs').addClass('min');
  };

  $(".photostack").Photostack({
    // top position to move
    top:40,
    // left position to move
    left:500,
    // custom rotation angles
    degFrom:-20,
    degTo:20
  });
  
});

var spanBottom = $('section.offer .container .content .tabs ul.tab__content li.tab__content--inner .tab__inner--item span.bottom');
if(navigator.appVersion.indexOf("Mac") != -1){
  spanBottom.css("width", spanBottom.width()+3+"px");
}

$('.tab__inner--list').css('width', $('.tabs').width());

$(".offer__list").slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        destroy: true
      }
    }
  ]
});

$(".slider").slick({
  dots: false,
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

$(window).on('scroll', function(){
  $('.fadein__scroll').addClass('show');
});