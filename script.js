console.log("javascript is active!");
$(document).ready(function() {

  $('#join-animation').click(function(){
      if ($('#left-side').is(':hidden')) {
         $('#left-side').show('slide',{direction:'down'},1000);
         $('#right-side').show('slide',{direction:'up'},1000);
      }
      else {
         $('#left-side').hide('slide',{direction:'up'},1000);
         $('#right-side').show('slide',{direction:'down'},1000);
      }
      console.log("join is active!");
  });

  $('#host-animation').click(function(){
    if ($('#left-side').is(':hidden')) {
       $('#left-side').show('slide',{direction:'up'},1000);
       $('#right-side').show('slide',{direction:'down'},1000);
    }
    else {
       $('#left-side').hide('slide',{direction:'down'},1000);
       $('#right-side').hide('slide',{direction:'up'},1000);
    }
    console.log("join is active!");
  });

  //scroll feature  - Learn More
  $("#learn-more").click(function(){
    $('html, body').animate({
      scrollTop:$("#purpose").offset().top
    }, 1000);
  });


  $("img").on("contextmenu",function(e){
      return false;
  });
});
