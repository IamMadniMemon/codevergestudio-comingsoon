$(document).ready(function(){
  $('#myFlipper').flipper('init');
  $('#modalFlipper').flipper('init');


  //gsap animation
  let $tl = gsap.timeline();
  $tl.from("h1, p.content, #myFlipper", {
      duration: 1,     // seconds (no "s")
      opacity: 0,
      y: -50,
      stagger: 0.8,
  });
  
});
