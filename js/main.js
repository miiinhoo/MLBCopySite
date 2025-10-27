// JQuery
$(document).ready(function() {
let hdinnerOriginalTop = $('.hdinner').offset().top; 
let isFixed = false;
  
$(window).scroll(function() {
if ($(this).scrollTop() > 50 && !isFixed) {
  $('.hdinner').css({
    'position': 'fixed',
    'top': '0'
  });
  
  $('.topbox').css('position', 'relative');
  isFixed = true;
} else if ($(this).scrollTop() <= 50 && isFixed) {
  $('.hdinner').css({
    'position': 'relative',
    'top': hdinnerOriginalTop + 'px'
  });
  
  $('.topbox').css('position', 'absolute');
  isFixed = false;
}
});
});
  window.addEventListener("scroll",function(){
    var scrollPosition = window.scrollY;
      if(scrollPosition <= 6660){
      var fixedElement = document.getElementById("fixed");
        fixedElement.style.position="fixed";
        fixedElement.style.bottom = "0";
    } else {
      var fixedElement = document.getElementById("fixed");
      fixedElement.style.position="absolute";
      fixedElement.style.bottom = "0"
    }
  });