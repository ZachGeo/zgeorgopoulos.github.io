var btns = $('#navbarContent .navbar-nav .nav-link');
for(var i=0; i < btns.length; i++){
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

$(window).scroll(function () { 
  var distance = $(window).scrollTop(); 
  $('.page-section').each(function (i) { 

      if ($(this).position().top  
          <= distance + 50) { 
            
              $('.navbar-nav a.active') 
                  .removeClass('active'); 

              $('.navbar-nav a').eq(i) 
                  .addClass('active'); 
      } 
  }); 
}).scroll(); 

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

// Experience

$(document).ready(function(){
  $(".fa-caret-down").on('click', function(){
    $("#work_details").slideToggle('slow');
  });
});
