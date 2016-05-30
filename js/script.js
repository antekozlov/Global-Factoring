$(document).ready(function(){
  $('.slider-top-slick').slick({
  	arrows: true,
  	dots: true
 
  });

  $('.slick-slider-reviews-wrap').slick({
  	arrows: true,
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	prevArrow: '.slider-reviews .prev-review',
  	nextArrow: '.slider-reviews .next-review'
  });
 });