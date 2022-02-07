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
  $("#allMenuBtn").click(function(){
    $(this).addClass("close");
  });
});
