$(function(){
    // banner slider start
    $('.slider-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:2000,
        dots:true,
        prevArrow:".prev",
        nextArrow:".next",
      });
    // banner slider end


    // screenshoot slider start
    $('.screen-container').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:500,
      prevArrow:".ss-prev",
      nextArrow:".ss-next",
      dots:true,
    });
    // screenshoot slider end
    $('.pricing-section').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:500,
      prevArrow:".pri-prev",
      nextArrow:".pri-next",
      dots:true,
    });

    // video start
    new VenoBox({
      selector: '.my-video-links',
  });
    // video end


    // feedback start
    
  $('.feed-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.bottom-slider',
    speed:1000,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.bottom-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.feed-text',
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    speed:1000,
    autoplay: true,
    autoplaySpeed: 2000,
  
  });
    // feedback end
})