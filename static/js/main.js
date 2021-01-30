$(document).ready(function(){
    $('i[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        trigger: 'click'
    });
});

$(function () {
    $(document).on('shown.bs.tooltip', function (e) {
       setTimeout(function () {
         $(e.target).tooltip('hide');
       }, 3000);
    });
 });

$(document).ready(function(){
  $(".flex_head").hide();
  $(".flex_head").fadeIn(2000);
});

$(document).ready(function(){
  $(".about_p").hide();
  $(".about_p").fadeIn(1000);
});

$(document).ready(function(){
  $(".fa-python").hide();
  $(".fa-python").fadeIn(1000);
});

$(document).ready(function(){
  $(".fa-hashtag").hide();
  $(".fa-hashtag").fadeIn(1500);
});

$(document).ready(function(){
  $(".fa-database").hide();
  $(".fa-database").fadeIn(2000);
});

$(document).ready(function(){
  $(".fa-git").hide();
  $(".fa-git").fadeIn(2500);
});

$(document).ready(function(){
  $(".fa-window-maximize").hide();
  $(".fa-window-maximize").fadeIn(3000);
});

$(document).ready(function(){
  $(".fa-linux").hide();
  $(".fa-linux").fadeIn(3500);
});

// Contact

$(document).ready(function(){
  $(".fa-envelope").click(function(){
    alert("Please contact me via email: zachageo95@gmail.com");
  });
});