
//Hero image blur on scroll
(function() {
  $(window).scroll(function() {
    var scrollBlur;
    scrollBlur = $(window).scrollTop() / 100;
    return $(".blur").css("opacity", scrollBlur);
  });

}).call(this);

//Hover state for spotlight features
$(".tile").hover( function(){
	  $(this).addClass("border");
	  }, function() {
	 	$(this).removeClass("border");
});

