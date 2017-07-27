$(document).ready(function(){

  $('#hamburger').click(function(){
    $('nav').toggleClass('opened');
  });

  $('#nav-close').click(function(){
    $('nav').toggleClass('opened');
  });

  $('.question').click(function(){
    $(this).addClass('opened');
    $('#answer-close').addClass('opened');
    var openAnswer  = $(this).index() + 1;
    $('.answer:nth-child(' + openAnswer + ')').addClass('opened');
    document.location.hash = 'answer' + openAnswer;
    $('body').addClass('noscroll');
    $('#share-link').text(window.location.href);
    $('.share').addClass('opened');
  });

  $('#answer-close').click(function(){
    $('.answer').removeClass('opened');
    $('body').removeClass('noscroll');
    $('.share').removeClass('opened');
    $('#answer-close').removeClass('opened');
  });

});

$(window).on('load', function () {
  if ( document.location.href.indexOf('#answer') > 0) {
    var url = document.location.href;
    var curAnswer = url.split("#answer")[1];
    $('#answer-close').addClass('opened');
    $('.answer:nth-child(' + curAnswer + ')').addClass('opened');
    $('body').addClass('noscroll');
    $('#share-link').text(window.location.href);
    $('.share').addClass('opened');
  }
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // esc keycode
    $('.answer').removeClass('opened');
    $('body').removeClass('noscroll');
    $('.share').removeClass('opened');
    $('#answer-close').removeClass('opened');
  }
});
