$(function () {
  const mainSliderOptions = {
    paginationClickable: true,
    autoplay: 7500,
    spaceBetween: 0,
    loop: true,
    effect: "slide",
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination1',
    // },
    pagination: {
      el: ".mainSlider__pagination",
      type: "bullets",
      dynamicBullets: false,
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSlider__right",
      prevEl: ".mainSlider__left",
    },
    on: {
      activeIndexChange: function () {
        console.log("activeIndexChange");

        $(".swiper-slide")
          .children(".swiper__cadr")
          .removeClass("animationBaretsky1")
          .fadeOut(500);

        setTimeout(function () {
          $(".swiper-slide-active")
            .children(".swiper__cadr")
            .fadeIn(500)
            .addClass("animated")
            .addClass("animationBaretsky1");
        }, 500);
      },
    },
  };

  const swiper1 = new Swiper(".swiper-container1", mainSliderOptions);

  swiper1.on("beforeSlideChangeStart", function () {
    console.log("beforeSlideChangeStart");
  });

  const manufacturersCarouselOptions = {
    slidesPerView: 5,
    paginationClickable: true,
    autoplay: 7500,
    spaceBetween: 0,
    loop: true,
    effect: "slide",
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination1',
    // },
    pagination: {
      el: ".manufacturersCarousel__pagination",
      type: "bullets",
      dynamicBullets: false,
      clickable: true,
    },
    navigation: {
      nextEl: ".manufacturersCarousel__right",
      prevEl: ".manufacturersCarousel__left",
    },
    breakpoints: {
      431: {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      481: {
        slidesPerView: 3,
        spaceBetween: 6,
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1201: {
        slidesPerView: 5,
        spaceBetween: 16,
      },
    },
  };
  const swiper2 = new Swiper(
    ".manufacturersCarousel-container",
    manufacturersCarouselOptions
  );
});
