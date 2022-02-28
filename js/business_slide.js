$(document).ready(function(){
  var ww = $(window).width();
  var reasonSwiper = undefined;
  var processSwiper = undefined;

  function initSwiper() {

    if (ww < 769 && reasonSwiper == undefined && processSwiper == undefined) {
      reasonSwiper = new Swiper(".reasonWrap", {
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".reason-arrow-next",
          prevEl: ".reason-arrow-prev",
        },
      });
      processSwiper = new Swiper(".processWrap", {
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".process-arrow-next",
          prevEl: ".process-arrow-prev",
        },
      });
    } else if (ww >= 769 && reasonSwiper != undefined && processSwiper != undefined) {
      reasonSwiper.destroy();
      processSwiper.destroy();
      reasonSwiper = undefined;
      processSwiper = undefined;
    }
  }

  initSwiper();

  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  });
});
