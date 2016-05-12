$(function() {
   $(".dropdown").hover(
        function(){
        $(this).children(".submenu").slideDown(150)
      },
        function(){    
        $(this).children(".submenu").slideUp(150)
      }
    );

  $(".dropdown-right").hover(
        function(){   
        $(this).children(".submenu").slideDown(150)
      },
        function(){ 
        $(this).children(".submenu").slideUp(150)
      }
    );

);

