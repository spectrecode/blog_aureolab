// header logo

$(function(){
  var nav = $('nav')
	var logo = $('nav img')
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 10 ){
      nav.addClass('nav_logo');
      logo.attr('src','img/logo-aureolab-white-1.svg')
		} else {
      nav.removeClass('nav_logo');
      logo.attr('src','img/logo-aureolab-white-2.svg');
		}
	});	

});


// menu header

$('#burguer').click(function(){
  $('.velo').fadeIn()
  $('.velo_menu').animate(
    {
      right:'0'
    }
  )
})
$('.close').click(function(){
  $('.velo').fadeOut()
  $('.velo_menu').animate(
    {
      right:'-400px'
    }
  )
})

// particulas 

$('.particle-class').particleground({
  dotColor: '#b1b4b66e',
  lineColor: '#b1b4b66e'
});