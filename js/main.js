
// preloader 

$(window).on('load' , function () {
    $('.preloader').fadeOut('slow');
});


//  navbar shrink

window.addEventListener('scroll' , () => {

    if (window.pageYOffset > 90) {
        document.querySelector('.navbar').classList.add('navbar-shrink');
    } else {
        document.querySelector('.navbar').classList.remove('navbar-shrink');
    }
});


// owl carousel

$(document).ready(function(){
    // features carousel

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // app screenshots carousel

    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });


    // testimonials carousel

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    
    // team carousel

    $('.team-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    // page scrolling - scrollIt

    $.scrollIt({
        topOffset: -50
    });

    // navbar collapse 

    $('.nav-link').on('click' , function () {
        $('.navbar-collapse').collapse('hide');
    });

  });



  // toggle theme dark mood and light mood
  let toggleThemeItem = document.querySelector('.toggle-theme'),
      toggleThemeIcon = document.querySelector('.toggle-theme i'),
      body = document.querySelector('body');
  function toggleTheme () {
      if (localStorage.getItem('mobile-theme') !== null) {
          if (localStorage.getItem('mobile-theme') === 'dark') {
              body.classList.add('dark');
          } else {
            body.classList.remove('dark');
          }
      }
      updateIcon();
  }
  toggleTheme();
  toggleThemeItem.addEventListener('click' , () => {
      body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('mobile-theme' , 'dark');
    } else {
        localStorage.setItem('mobile-theme' , 'light');
    }
    updateIcon();
  });
  function updateIcon () {
      if (body.classList.contains('dark')) {
         toggleThemeIcon.classList.remove('fa-moon');
          toggleThemeIcon.classList.add('fa-sun');
      } else {
        toggleThemeIcon.classList.remove('fa-sun');
        toggleThemeIcon.classList.add('fa-moon');
      }
  }






// video popup

const videoSrc = document.querySelector('#player-1').getAttribute('src'),
      videoPlayBtn = document.querySelector('.video-play-btn'),
      VideoPopup = document.querySelector('.video-popup'),
      videoPopupClose = document.querySelector('.video-popup-close');


videoPlayBtn.addEventListener('click' , () => {
    if (VideoPopup.classList.contains('open')) {
        VideoPopup.classList.remove('open');
        videoSrc.setAttribute('src', '');
    } else {
        VideoPopup.classList.add('open');
        if (videoSrc == '') {
            videoSrc.setAttribute('src' , 'https://www.youtube.com/embed/6p3U-uWUNps');
        }
    }
});

videoPopupClose.addEventListener('click' , () => {
    VideoPopup.classList.remove('open');
});


