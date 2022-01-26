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
  // Scroll Animation (sa, 스크롤 애니메이션)
  var hiTriggerMargin = 300;
  var hiElementList = document.querySelectorAll('.main-cont');
  var saFunc = function() {
    $.each(hiElementList, function(idx, element){
      if (!element.classList.contains('on')) {
        if (window.innerHeight > element.getBoundingClientRect().top + hiTriggerMargin) {
          element.classList.add('on');
          if($('.workWrap li').closest('.main-cont').hasClass('on')){
            // var newsNum = $('.workWrap li').length();
            var newsNum = $('.workWrap li').toArray();
            // console.log(newsNum);
            let count = 0;
            for(let i=0; i < newsNum.length; i++) {
              // if(newsNum === '0')  {
              //   $( '.workWrap li' ).eq(count).animate( {
              //     opacity: '1',
              //     top:0
              //   }, 300);
              //   count++;
              // }
              $( '.workWrap > li' ).eq(count).delay(count*250).animate( {
                opacity: '1',
                top:0
              }, 350);
              count++;
            }
            // document.write(count);
          }
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
