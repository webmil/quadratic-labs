$(document).ready(function () {
  $('.loader').css("opacity", "1");

  setTimeout(function () {
    $('#index-content').css("opacity", "1");
    $('.loader').css("opacity", "0");
    if ($('body').width() > 1023) {
      $('#side-nav').css("display", "inline-block");
      $('#top-nav').css("display", "inline-block");
    }
    window.slide0 && slide0();
    setTimeout(function () {
      $('.loader').css("display", "none");
    }, 300);
  }, 500);


  $('.slider-for-index').slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 7500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-index',
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.slider-for-index').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    window['slide' + nextSlide]()
    moreLink.prop('href', moreHref + '#' + nextSlide)
  });

  var moreLink = $('.js-more');
  var moreHref = moreLink.prop('href');

  $('.slider-for-index').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    window['slide' + nextSlide]()
    moreLink.prop('href', moreHref + '#' + nextSlide)
  });

  var slideNumber = document.location.hash ? parseInt(document.location.hash[1]) : 0;
  setTimeout(function () {
    if (slideNumber == 3) {
      $('.slick-slide').eq(2).click();
      $('a[href="#tab-2"]').click();
    }
    $('.slick-slide').eq(slideNumber).click();
  }, 100);


  $('.slider-nav-index').slick({
    slidesToShow: 3,
    asNavFor: '.slider-for-index',
    dots: false,
    draggable: false,
    swipe: false,
    focusOnSelect: true
  });
});