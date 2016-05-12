(function($,undefined){

  $.fn.myCarousel = function(){

    var $leftArrow = $(".carousel__arrow-left");
    var $rightArrow = $(".carousel__arrow-right");
    var $elementsList = $(".list");

    var $pixelsOffset = 250;
    var $currentLeftValue = 0;
    var $elementsCount = $elementsList.find('li').length;
    var $minimumOffset = -(($elementsCount - 5) * $pixelsOffset);
    var $maximumOffset = 0;

    $leftArrow.on("click", function () {
      if ($currentLeftValue != $maximumOffset) {
        $rightArrow.animate({opacity: 1}, 300);
        $currentLeftValue += 250;
        $elementsList.animate({left: $currentLeftValue + "px"}, 700);
      } else {
        $leftArrow.animate({opacity: 0}, 300)
      }
    });

    $rightArrow.on("click", function () {
      if ($currentLeftValue != $minimumOffset) {
        $leftArrow.animate({opacity: 1}, 300);
        $currentLeftValue -= 250;
        $elementsList.animate({left: $currentLeftValue + "px"}, 700);
      } else {
        $rightArrow.animate({opacity: 0}, 300)
      }
    });
  }


})(jQuery);