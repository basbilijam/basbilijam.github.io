$(document).ready(function(){

// navbar active item
 $(".navbar-nav a").on("click", function(){
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
  });

// collapse navbar after link is clicked
$(".nav-item").click(function(event) {
   if (!$(this).parent().hasClass('dropdown'))
       $(".navbar-collapse").collapse('hide');
  });
});
