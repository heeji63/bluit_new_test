$(document).ready(function() {
  $(window).scroll(function(){
    var scr = $(document).scrollTop();
    var contHas = $('.section1');
    var contHeight = contHas.height();
    var hdDis = contHeight/2-100;
    if(scr > hdDis || contHas.length==0){
      $("#header").addClass('on narrow');
    }else{
      $("#header").removeClass('on narrow');
    }
  });
  var scr = $(document).scrollTop();
  var contHas = $('.section1');
  var contHeight = contHas.height();
  var hdDis = contHeight/2-100;
  if(scr > hdDis){
    $("#header").addClass('on narrow');
  }else{
    $("#header").removeClass('on narrow');
  }
  var swiper = new Swiper(".mainSlider", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction:false,
    },
    effect: "fade",
    speed:500,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    controller: {
      control: swiper2
    },
    on: {
      slideChangeTransitionEnd : function(){
        // console.log(this.activeIndex);
          var active = this.activeIndex;
          var txtShowNum = active-1;
          if(active > 5){
            txtShowNum = 0;
          }
          // console.log(txtShowNum);
          $(".portfolioTxt").find("li").hide();
          $(".portfolioTxt").find("li").eq(txtShowNum).fadeIn(200);
          $(".portfolioTxt li").removeClass("on");
          $(".portfolioTxt li:eq("+txtShowNum+")").addClass("on");
          $(".portfolioTxt li").find(".highlighter").removeClass("on");
          $(".portfolioTxt li:eq("+txtShowNum+")").find(".highlighter").addClass("on");

      }
    }
  });
  var swiper2 = new Swiper(".mainSlider2", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction:false,
    },
    effect: "fade",
    speed:500,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    controller: {
      control: swiper
    },
    on: {
      slideChangeTransitionEnd : function(){
        // console.log(this.activeIndex);
          var active = this.activeIndex;
          var txtShowNum = active-1;
          if(active > 2){
            txtShowNum = 0;
          }
          // console.log(txtShowNum);
          $(".portfolioTxt").find("li").hide();
          $(".portfolioTxt").find("li").eq(txtShowNum).fadeIn(200);
          $(".portfolioTxt li").removeClass("on");
          $(".portfolioTxt li:eq("+txtShowNum+")").addClass("on");
          $(".portfolioTxt li").find(".highlighter").removeClass("on");
          $(".portfolioTxt li:eq("+txtShowNum+")").find(".highlighter").addClass("on");

      }
    }
  });
  swiper.controller.control = swiper2;
  swiper2.controller.control = swiper;
  // Scroll Animation (sa, 스크롤 애니메이션)
  var hiTriggerMargin = 250;
  var hiElementList = document.querySelectorAll('.workWrap li');
  var saFunc = function() {
    $.each(hiElementList, function(idx, element){
      if (!element.classList.contains('on')) {
        if (window.innerHeight > element.getBoundingClientRect().top + hiTriggerMargin) {
          element.classList.add('on');
          if($('.workWrap li').hasClass('on')){
            // var newsNum = $('.workWrap li').length();
            var newsNum = $('.workWrap li').toArray();
            // console.log(newsNum);
            let count = 0;
            for(let i=0; i < newsNum.length; i++) {
              if($(window).width()>1000){
                if(count%3==0){
                  $( '.workWrap > li' ).eq(count).css("transition-delay","0s");
                }else if(count%3==1){
                  $( '.workWrap > li' ).eq(count).css("transition-delay","0.25s");
                }else if(count%3==2){
                  $( '.workWrap > li' ).eq(count).css("transition-delay","0.5s");
                }
              }else if($(window).width()>768){
                if(count%2==0){
                  $( '.workWrap > li' ).eq(count).css("transition-delay","0s");
                }else if(count%2==1){
                  $( '.workWrap > li' ).eq(count).css("transition-delay","0.25s");
                }
              }else{
                $( '.workWrap > li' ).eq(count).css("transition-delay",count*0.25 + "s");
              }

              count++;
            }
            // document.write(count);
          }
        }
      }else if (element.classList.contains('on')){
        if (window.innerHeight < element.getBoundingClientRect().top + hiTriggerMargin){
          element.classList.remove('on');
        }
      }
    });
  };
  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);

  $('#btnTop').click(function(){
    $('html, body').animate({scrollTop: '0'}, 500);
  });

  $("#fileUp").on('change',function(){
    if(window.FileReader){
        var fileName = $("#fileUp")[0].files[0].name;
    } else {
        var fileName = $("#fileUp").val().split('/').pop().split('\\').pop();
    }
    $(".upload-name").text(fileName);
  });
});
