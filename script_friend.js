$( document ).ready(function() {
    $(".rel").click(function() {
      if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).children(".desc").scrollTop(0);
      } else{
            $(".rel").removeClass("active");
            $(".rel").children(".desc").scrollTop(0);
            $(this).addClass("active");
      }
    });
    $(".desc").scroll(function(){
        var heart = $(this).siblings(".hearts");
        if ($(this).scrollTop() > 0) {
			$(heart).css("opacity", "0");
		} else{
			$(heart).css("opacity", "1");
		}
    });
});