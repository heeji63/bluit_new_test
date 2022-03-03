$(document).ready(function(){
  var controller = new ScrollMagic.Controller();
  var timeline = new TimelineMax();

  var tween_move = TweenMax.fromTo(
    ".animate_02",
    1,
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      x: -200
    },
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      x: 200
    }
  );

  var tween_opacity = new TimelineMax();
  tween_opacity
    .to(".animate_02", 0.3, {
      ease: Linear.easeNone,
      opacity: 1
    })
    .to(".animate_02", 0.3, {
      ease: Linear.easeNone,
      opacity: 0
    }, "+=0.4");

  timeline.add(tween_move, 0).add(tween_opacity, 0);

  var scene_main = new ScrollMagic.Scene({
    triggerElement: ".trigger",
    duration: "90%"
  })
  .setTween(timeline)
  .addTo(controller);
  var controller2 = new ScrollMagic.Controller();
  var timeline2 = new TimelineMax();

  var tween_move2 = TweenMax.fromTo(
    ".animate_03",
    1,
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      x: 500
    },
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      x: -100
    }
  );

  var tween_opacity2 = new TimelineMax();
  tween_opacity2
    .to(".animate_03", 0.3, {
      ease: Linear.easeNone,
      opacity: 1
    })
    .to(".animate_03", 0.3, {
      ease: Linear.easeNone,
      opacity: 0
    }, "+=0.4");

  timeline.add(tween_move2, 0).add(tween_opacity2, 0);

  var scene_main2 = new ScrollMagic.Scene({
    triggerElement: ".trigger",
    duration: "90%"
  })
  .setTween(timeline2)
  .addTo(controller2)
  .addIndicators();
});
