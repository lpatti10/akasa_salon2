
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

//Rollover state for spotlight features
$("tile").hover( function(){
	  $(this).addClass("overlay");
	  }, function() {
	 	  $(this).removeClass("overlay");
});

 // $("#cornsilk").hover( function(){
 //    $(this).css("width", "50px");
 //    }, function() {
	//   	$(this).css("width", "150px");
	// });