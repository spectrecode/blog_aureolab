// cursor
// cursor = $("<i>", {
//   class: 'icon-Recurso-16  cursor'
// });
// cat1 = $("<span>", {
//   class: 'path1'
// });
// cat2 = $("<span>", {
//   class: 'path2'
// });
// cat3 = $("<span>", {
//   class: 'path3'
// });
// cat4 = $("<span>", {
//   class: 'path4'
// });
// $(cursor).append(cat1, cat2, cat3, cat4)


// cursor = $("<i>", {
//   class: 'fas fa-rocket cursor'
// });

// cursor = $("<i>", {
//   class: 'icon-rocket cursor'
// });
// follower = $("<div>", {
//   class: 'cursor follower'
// });

// $("html").append(cursor)
// $("html").append(follower)

// $(document).mousemove(function(e){
//   var x = e.pageX;
//   var y = e.pageY;
//   cursor.css("left", x + "px");
//   cursor.css("top", y + "px");
// })

// $(document).mousemove(function(e){
//   var x = e.pageX;
//   var y = e.pageY;
//   follower.css("left", x + "px");
//   follower.css("top", y + "px") ;
// })

// $(document).mousedown(function(e){
//   cursor.addClass('click');
//   follower.addClass('cursorinnerhover');
// })

// $(document).mouseup(function(e){
//   cursor.removeClass('click');
//   follower.removeClass('cursorinnerhover');
// })

// header logo

$(function(){
  var nav = $('nav')
	var logo = $('nav img')
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 10 ){
      nav.addClass('nav_logo');
      logo.attr('src','img/logo_solo.png')
		} else {
      nav.removeClass('nav_logo');
      logo.attr('src','img/aureolab-logo-svg.svg');
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

// var placeholder = 'Ej: \n ¿Qué quieres desarrollar? \n ¿Quieres cambiar un sistema ya implementado? \n ¿Cuáles son tus objetivos con el desarrollo? \n ¿Tienes fecha límite? \n Cualquier dato o información que consideres relevante.\n\n';
// $('textarea').attr('placeholder', placeholder);

// particulas 

$('.particle-class').particleground({
  dotColor: '#b1b4b66e',
  lineColor: '#b1b4b66e'
});
// $('.intro').css({
//   'margin-top': -($('.intro').height() / 2)
// });

// $(".particle-class").each(function() {
//   particlesJS($(this).attr('id'), {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.3,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 20,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 110,
//         "color": "#ffffff",
//         "opacity": 0.2,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 3,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   })
// });

// carrusel clientes

$(".empresa").slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]  
});

// clientes dicen

$(".cliente").slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
  prevArrow: $('.prevC'),
  nextArrow: $('.nextC')
});

// servicio etapas

$(".etapas").slick({
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  initialSlide:1,
  centerPadding: '350px',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide:0,
        centerMode: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide:0,
        centerMode: false,
      }
    }
  ]
});

// cohete
var $animation_elements = $('#cohete');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('up');
    } else {
      $element.removeClass('up');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// trabaja con nosotros

$(function(){
  $(".form_trabajo").validate({
    // errorPlacement: function (error, element) {
    // //   $(element)
    // //     .closest("form")
    // //     .find("label[for='" + element.attr("id") + "']")
    // //     .append(error);
    //   // $(".complete").hide();
    // },
    rules: {
      name: "required",
      phone: "required",
      area: "required",
      email: "required",
      cv: "required",
      info: "required",
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        minlength: 11
      },
      email: {
        required: true,
        email: true
      },
      info: {
        required: true
      },
    },
    messages: {
      name:{
        required: "Escriba su nombre y apellido",
        minlength:"Escriba un nombre y apellido válido",
      },
      phone: {
        required: "Escriba un número de telefono válido",
        minlength: "Añadir el código de área",
      },
      email: "Escriba un correo electrónico válido",
      cv: "",
      area: "Mencione el área al que desea postular",
      info: "Mencione información extra sobre Ud.",
    },
    submitHandler: function() {
      $('.box_trabajo').fadeOut('fast');
      $('.box_enviado').fadeIn();
    }
  });
})
