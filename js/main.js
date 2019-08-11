//$(function () {
//    $('.red-button').mouseover(function () {
//        $('.cetner-text').css('left','20%');
//    });
//    $('.red-button').mousedown(function () {
//        $('.cetner-text').css('left','30%');
//    });
//
//});

//$(function () {
//    $('.url-contain-button-text').click(function () {
//        $('.contain-button').css('background-color','#895c45')
//    });
//});

/*плавный переход к блоку*/
function slowScroll(id) {
         var offset = 0;
         $('html, body').animate({
              scrollTop: $(id).offset().top - offset
         }, 1000);
         return false;
     };


/*смещение блока*/
$('#red-b').hover(
  function () {
    $('#center').css('left','15%');
    $('#id-text-red-line').css('left','0');
  },
  function () {
     $('#center').css('left','30%');
    $('#id-text-red-line').css('left','300px');
  }
);
