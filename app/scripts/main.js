// #Image Credit - https://medium.com/

// #https://github.com/andreasstorm

// $(window).scroll ->
//   oVal = ($(window).scrollTop() / 240)
//   $(".blur").css "opacity", oVal;


(function() {
  $(window).scroll(function() {
    var oVal;
    oVal = $(window).scrollTop() / 240;
    return $(".blur").css("opacity", oVal);
  });

}).call(this);
