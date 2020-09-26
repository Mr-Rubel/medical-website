$(document).ready(function(){
	// counter plugin start
		$('.counter').counterUp({
	    delay: 10,
	    time: 1000
		});
	// counter plugin end
	$(window).scroll(function(){
		var scrollMenu = $(this).scrollTop();
		if(scrollMenu>60){
  			$("#top-bar").addClass("manu-top"); 
  			// $("#top-bar").removeClass("manu-top"); 
  			$(".menubar").addClass("menubar-sticky"); 
  			$(".nav-link").addClass("text-light"); 
  		}
  		else{
  			$("#top-bar").removeClass("manu-top"); 
  			$(".menubar").removeClass("menubar-sticky"); 			
  		}

	});
	$(".navbar-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

// smooth scroll area start
	$(".nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
	// smooth scroll area end

});