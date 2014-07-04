
// #https://github.com/andreasstorm

// $(window).scroll ->
//   oVal = ($(window).scrollTop() / 240)
//   $(".blur").css "opacity", oVal;


(function() {
  $(window).scroll(function() {
    var scrollBlur;
    scrollBlur = $(window).scrollTop() / 100;
    return $(".blur").css("opacity", scrollBlur);
  });

}).call(this);
