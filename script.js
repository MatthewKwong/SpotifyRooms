console.log("javascript is active!");
$(document).ready(function() {

  $('#join-animation').click(function(){
      if ($('#animation-wrapper').is(':hidden')) {
         $('#animation-wrapper').show('slide',{direction:'left'},1000);
      }
      else {
         $('#animation-wrapper').hide('slide',{direction:'left'},1000);
      }
      console.log("join is active!");
  });

  $('#host-animation').click(function(){
    console.log("LOL");
      if ($('#animation-wrapper').is(':hidden')) {
         $('#animation-wrapper').show('slide',{direction:'left'},1000);
      }
      else {
         $('#animation-wrapper').hide('slide',{direction:'left'},1000);
      }
      console.log("join is active!");
  });



});
