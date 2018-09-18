$(document).ready(function() {
var movementStrength = 50;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 50;
          var newvalueY = height * pageY * -1 - 100;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});

$("a[href^='#']").click(function(e) {
      e.preventDefault();
      
      var position = $($(this).attr("href")).offset().top;
      
      $("body, html").animate({
      scrollTop: position
      } /* speed */ );
      });