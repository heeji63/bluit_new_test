$(document).ready(function() {
  $(window).scroll(function(){
    var scr = $(document).scrollTop();
    if(scr > 50){
      $("#header").addClass('on narrow');
    }else{
      $("#header").removeClass('on narrow');
    }
  });
  var scr = $(document).scrollTop();
  if(scr > 50){
    $("#header").addClass('on narrow');
  }else{
    $("#header").removeClass('on narrow');
  }
  $("#allMenuBtn").click(function(){
    $(this).toggleClass("close");
    if($(this).hasClass("close")==true){
      $("#allMenu").fadeIn(200);
      $("#header .gnb").opacity(1);
    }else{
      $("#allMenu").fadeOut(200);
      $("#header .gnb").opacity(0);
    }
  });
});
