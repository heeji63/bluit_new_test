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
    // var grid = $('.workWrap').masonry({
    //   // options
    //     // columnWidth: '.workWrap',
    //     itemSelector: '.grid-item',
    //     percentPosition: true,
    // });
    //
    // // layout Masonry after each image loads
    //     grid.imagesLoaded().progress( function() {
    //       grid.masonry('layout');
    //     });
    //
    // // init Isotope
    // var grid = $('.workWrap').isotope({
    //   itemSelector: '.grid-item'
    // });
    //masonry
    $('.grid').masonry({
      // options
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
    });


        var $grid = $('.grid').masonry({
  // options...
        });
    // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.masonry('layout');
        });

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item'
        });

    $('#m1, #m2, #m3, #m4').on( 'click', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
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
  // var hiTriggerMargin = 150;
  // var hiElementList = document.querySelectorAll('.workWrap li');
  // var saFunc = function() {
  //   $.each(hiElementList, function(idx, element){
  //     if (!element.classList.contains('on')) {
  //       if (window.innerHeight > element.getBoundingClientRect().top + hiTriggerMargin) {
  //         element.classList.add('on');
  //       }
  //     }
  //   });
  // };
  // window.addEventListener('load', saFunc);
  // window.addEventListener('scroll', saFunc);

	// var win = $(window);
	// 	winHei = win.height();
	// 	footHei = $('#footer').height();
	// 	circle01 = $(".bg-circle-01");
	// 	circle02 = $(".bg-circle-02");
  //
	// win.scroll(function(){
  //
	// 	winTop = $(this).scrollTop();
  //   // console.log((winHei+winTop)-footHei);
	// 	if(winTop>0){
	// 		circle01.stop().animate({top:(winHei/30)+winTop-130}, 300, 'easeInOutExpo');
	// 		circle02.stop().animate({top:(winHei/30)+winTop+(winHei*0.45)}, 300, 'easeInOutExpo');
  //     if(winTop>1000){
  //       circle01.stop().animate({top:(winHei/30)+870}, 300, 'easeInOutExpo');
  //       circle02.stop().animate({top:(winHei/30)+1410}, 300, 'easeInOutExpo');
  //     }
	// 	}else {
	// 		circle01.stop().animate({top:-130}, 300, 'easeInOutExpo');
	// 		circle02.stop().animate({top:(winHei*0.45)}, 300, 'easeInOutExpo');
	// 	}
	// });
  $(window).scroll(function(){
    /* 스크롤시 cirecle */
    var scroll = $(this).scrollTop();
    // console.log(scroll);
    	$item1 = $('.bg-circle-01'),
    	$item2 = $('.bg-circle-02');

    $item1.css({
      'transform': 'translate3d(' + 0 + 'px, ' + scroll * 0.95+ 'px, ' + 0 + 'px )'
    });
    $item2.css({
      'transform': 'translate3d(' + 0 + 'px, ' + scroll * 0.95+ 'px, ' + 0 + 'px )'
    });
  });
});
