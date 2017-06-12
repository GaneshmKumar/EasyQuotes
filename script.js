/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-09 21:49:42
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-12 00:47:57
*/

'use strict';

var colors = ['#F44336', '#6A1B9A', '#283593', '19bd9b', '#689F38', '#EF6C00', '#4E342E', '#424242'];

$(document).ready(function() {
    displayQuote();
    $('#twitter-btn').on('click', function() {
        openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + $('#quote').text() + '" ' + $('#author').text()));
    });
}); //ready


function displayQuote() {
    $.ajax({
        headers: {
          "X-Mashape-Key": "1q7hg3SdnXmshccaCsTSU5ipNXXZp1q1g5wjsns3lZpJPC8MOL",
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
          var r = response;
          $('#background .fa-quote-left').animate({opacity: 0}, 500, function() {
                $('#background .fa-quote-left').animate({opacity: 1}, 500);
          });

          $('#quote').animate({opacity: 0}, 500, function() {
                $('#quote').animate({opacity: 1}, 500);
                $('#quote').text(r.quote);
          });

          $('#author').animate({opacity: 0}, 500, function() {
                $('#author').animate({opacity: 1}, 500);
                $('#author').text('-' + r.author);
          });

        }
  });
  changeColor();
}

function changeColor() {

    var index = Math.floor((Math.random() * colors.length) + 0);
    var currentColor = colors[index];
    $("body, #twitter-btn, #next-btn").css("background-color", currentColor);
    $("body").css("color", currentColor);
}

function openURL(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}