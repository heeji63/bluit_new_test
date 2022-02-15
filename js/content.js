$(document).ready(function() {
  // Scroll Animation (sa, 스크롤 애니메이션)
  var hiTriggerMargin2 = 400;
  var hiElementList2 = document.querySelectorAll('.content');
  var saFunc2 = function() {
    $.each(hiElementList2, function(idx, element){
      if (!element.classList.contains('on')) {
        if (window.innerHeight > element.getBoundingClientRect().top + hiTriggerMargin2) {
          element.classList.add('on');
        }
      }else if (element.classList.contains('on')){
        if (window.innerHeight < element.getBoundingClientRect().top + hiTriggerMargin2){
          element.classList.remove('on');
        }
      }
    });
  };
  window.addEventListener('load', saFunc2);
  window.addEventListener('scroll', saFunc2);
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
        }
      }
    });
  };
  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);

  $('.counter').countUp();
});
