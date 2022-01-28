$(document).ready(function() {
  $(window).scroll(function(){
    var scr = $(document).scrollTop();
    if(scr > 100){
      $("#header").addClass('on narrow');
    }else{
      $("#header").removeClass('on narrow');
    }
  });
  var scr = $(document).scrollTop();
  if(scr > 150){
    $("#header").addClass('on narrow');
  }else{
    $("#header").removeClass('on narrow');
  }

  // $('.workWrap').isotope({
  //   itemSelector: '.grid-item',
  // });
  //masonry
    var grid = $('.workWrap').masonry({
      // options
        // columnWidth: '.workWrap',
        itemSelector: '.grid-item',
        percentPosition: true,
    });

    // layout Masonry after each image loads
        grid.imagesLoaded().progress( function() {
          grid.masonry('layout');
        });

    // init Isotope
    var grid = $('.workWrap').isotope({
        itemSelector: '.grid-item'
        });


  $('.tab-ul li').on( 'click', 'a', function() {
    event.preventDefault();
    $(".part-more-btn-wrap").show();
    var filterValue = $(this).attr('data-filter');
    $('.workWrap').isotope({ filter: filterValue });
    // console.log(filterValue);
    $('.tab-ul li').removeClass('on');
    $(this).parent('li').addClass('on');
  });

  // Scroll Animation (sa, 스크롤 애니메이션)
  var hiTriggerMargin = 150;
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
              $( '.workWrap > li' ).eq(count).css("transition-delay","0s");
              count++;
            }
            // document.write(count);
          }
        }else if (element.classList.contains('on')){
          if (window.innerHeight < element.getBoundingClientRect().top + hiTriggerMargin){
            element.classList.remove('on');
          }
        }
      }
    });
  };
  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);

});
