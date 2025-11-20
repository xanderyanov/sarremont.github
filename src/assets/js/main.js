$(function () {
  $(".js_btn1").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var self = $(this);
    if (self.hasClass("js_active")) {
      self.removeClass("js_active");
      $(".js_container1")
        .addClass("bounceOutUp")
        .removeClass("bounceInDown")
        .fadeOut(600);
      $(".overlay").fadeOut(200);
    } else {
      self.addClass("js_active");
      $(".js_container1")
        .removeClass("bounceOutUp")
        .addClass("bounceInDown")
        .fadeIn(200);
      $(".overlay").fadeIn(200);
    }
  });
  $(".overlay").click(function (e) {
    e.preventDefault();
    $(".js_container1")
      .addClass("bounceOutUp")
      .removeClass("bounceInDown")
      .fadeOut(600);
    $(".js_btn1").removeClass("js_active");

    $(".js_container1")
      .addClass("bounceOutUp")
      .removeClass("bounceInDown")
      .fadeOut(600);
    $(".js_btn1").removeClass("js_active");

    $(".overlay").fadeOut(600);
  });

  $(".menuButton").click(function () {
    $(this).toggleClass("open");
    $(".topMenu").slideToggle();
  });

  $("table").wrap('<div class="table_outer"></div>');

  // $(window).load(function () {
  //     $("#loader").delay(500).fadeOut(function () {
  //         //$('html').css({'-webkit-transform': 'translateZ(0)'});
  //     });
  //     $(".mask").delay(1000).fadeOut("slow");
  // });

  $(".phoneZ").mask("+7 (999) 999-9999");
  $(".phone1").mask("+7 (999) 999-9999");

  //Обрезка длинной строки
  function cutLongString(element, count_lit) {
    var text = element.html();
    var all_len = text.length;
    var new_text;
    if (all_len > count_lit) {
      new_text = text.substr(0, count_lit - 3) + "...";
      element.html(new_text);
    }
  }

  $(".cutLongString80").each(function () {
    if ($(this).length) {
      cutLongString($(this), 85);
    }
  });

  $(".goodToKnow__title").each(function () {
    if ($(this).length) {
      cutLongString($(this), 40);
    }
  });

  $("a.fancybox").fancybox({
    closeBtn: true,
    arrows: true,
    nextClick: true,
    padding: 0,
    openEffect: "elastic",
    closeEffect: "elastic",
    nextEffect: "elastic",
    prevEffect: "elastic",
    caption: {
      type: "inside",
    },
    helpers: {
      overlay: {
        closeClick: true,
        showEarly: true,
        locked: false,
      },
      thumbs: {
        thumbs: true,
      },
    },
  });

  $("a.fancyboxbig").fancybox({
    autoSize: false,
    fitToView: false,
    openEffect: "fade",
    closeEffect: "fade",
    nextEffect: "fade",
    prevEffect: "fade",
    caption: {
      type: "inside",
    },
    helpers: {
      thumbs: true,
    },
  });

  $(".fancybox-media").fancybox({
    padding: 0,
    openEffect: "elastic",
    closeEffect: "elastic",
    nextEffect: "elastic",
    prevEffect: "elastic",
    width: 940,
    height: 528,
    arrows: false,
    helpers: {
      media: {},
      buttons: {},
    },
  });

  $("#scroller").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#scroller").fadeIn();
    } else {
      $("#scroller").fadeOut();
    }
  });
  $("#scroller").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });

  ///////////////табы
  $(".tab").bind("click", function (e) {
    e.preventDefault();
    var tabNumber;
    if (!$(this).hasClass("active")) {
      tabNumber = $(this).data("tab");
      $(".tab").removeClass("active");
      $(".widget").removeClass("active");
      $(this).addClass("active");
      $(".widgets")
        .find("[data-widget='" + tabNumber + "']")
        .addClass("active");
    }
  });

  $(".formZ").on("click", ".submitZ", function (e) {
    e.preventDefault();
    var name = $(".nameZ").val();
    var phone = $(".phoneZ").val();
    var workemail = $(".work_emailZ").val();
    if (name == "") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок",
      });

      $(".nameZ").addClass("error");
    } else if (phone == "") {
      swal({
        title: "Ошибка поля телефон",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".phoneZ").addClass("error");
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок",
      });
    } else {
      $.post(
        "mail.php",
        {
          name: name,
          phone: phone,
        },
        function () {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок",
          });
          $(".nameZ").val("").removeClass("error");
          $(".phoneZ").val("").removeClass("error");
          $(".js_form").removeClass("js-Active");
          $(".js_container1")
            .addClass("bounceOutUp")
            .removeClass("bounceInDown")
            .fadeOut(600);
          $(".overlay").fadeOut(200);
        }
      );
    }
  });

  $(".form1").on("click", ".submit1", function (e) {
    e.preventDefault();
    var name = $(".name1").val();
    var phone = $(".phone1").val();
    var email = $(".email1").val();
    var workemail = $(".work_email1").val();
    var message = $(".message1").val();
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    var recaptcha = grecaptcha.getResponse();
    if (name == "") {
      swal({
        title: "Поле Имя пустое",
        text: "Заполните поле имя",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".name1").addClass("error");
    } else if (phone == "") {
      swal({
        title: "Поле телефон пустое",
        text: "Заполните поле телефон",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".phone1").addClass("error");
    } else if (email == "") {
      swal({
        title: "Ошибка Email",
        text: "Заполните поле Email",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email1").addClass("error");
    } else if (!r.test(email)) {
      swal({
        title: "Ошибка",
        text: "Корректно заполните поле e-mail",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".email1").addClass("error");
    } else if (message == "") {
      swal({
        title: "Пустое сообщение",
        text: "Заполните текст сообщения",
        type: "error",
        confirmButtonText: "ок",
      });
      $(".message1").addClass("error");
    } else if (workemail != "") {
      swal({
        title: "Ах ты жулик",
        text: "Уберите робота от компьютера",
        type: "error",
        confirmButtonText: "ок",
      });
    } else if (!recaptcha) {
      swal({
        title: "поставьте галочку",
        text: "при проверке на спам",
        type: "error",
        confirmButtonText: "ок",
      });
    } else {
      $.post(
        "mail.php",
        {
          name: name,
          phone: phone,
          email: email,
          message: message,
          recaptcha: recaptcha,
        },
        function () {
          swal({
            title: "Спасибо",
            text: "Ваше сообщение отправлено",
            type: "success",
            confirmButtonText: "ок",
          });
          $(".name1").val("").removeClass("error");
          $(".phone1").val("").removeClass("error");
          $(".email1").val("").removeClass("error");
          $(".message1").val("").removeClass("error");
        }
      );
    }
  });
});

//################ likeBlock

var share_url = window.location.href;
var share_title = $(document).attr("title");
var share_desc = $(document).attr("description");
var share_image = "";
var share_text =
  "Делаем ремонт квартир и офисов под ключ в Саратове и Энгельсе";
var share_popup_width = 650;
var share_popup_height = 450;

// var share_links_container = document.getElementById('my_share');

var share_links_container = $(".likeBlock");

if (share_links_container != "NULL") {
  if (
    typeof share_popup_width != "number" ||
    typeof share_popup_height != "number"
  ) {
    share_popup_width = 626;
    share_popup_height = 436;
  }

  share = {
    twitter: function (purl, ptitle) {
      url = "http://twitter.com/share?";
      url += "text=" + encodeURIComponent(ptitle);
      url += "&url=" + encodeURIComponent(purl);
      url += "&counturl=" + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    gp: function (purl, ptitle, pimg, text) {
      url = "https://plus.google.com/share?";
      url += "url=" + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    mail: function (purl, ptitle, pimg, text) {
      url = "http://connect.mail.ru/share?";
      url += "url=" + encodeURIComponent(purl);
      url += "&title=" + encodeURIComponent(ptitle);
      url += "&description=" + encodeURIComponent(text);
      url += "&imageurl=" + encodeURIComponent(pimg);
      share.popup(url);
      return false;
    },
    vk: function (purl, ptitle, pimg, text) {
      url = "http://vkontakte.ru/share.php?";
      url += "url=" + encodeURIComponent(purl);
      url += "&title=" + encodeURIComponent(ptitle);
      // url += '&description=' + encodeURIComponent(text);
      url += "&image=" + encodeURIComponent(pimg);
      url += "&noparse=true";
      share.popup(url);
      return false;
    },
    ok: function (purl, text) {
      url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
      url += "&st.comments=" + encodeURIComponent(text);
      url += "&st._surl=" + encodeURIComponent(purl);
      share.popup(url);
      return false;
    },
    fb: function (purl, ptitle, pimg, text) {
      url = "http://www.facebook.com/sharer.php?s=100";
      url += "&p[title]=" + encodeURIComponent(ptitle);
      url += "&p[summary]=" + encodeURIComponent(text);
      url += "&p[url]=" + encodeURIComponent(purl);
      url += "&p[images][0]=" + encodeURIComponent(pimg);
      share.popup(url);
      return false;
    },

    popup: function (url, width, height) {
      window.open(
        url,
        "",
        "toolbar=0,status=0,width=" +
          share_popup_width +
          ",height=" +
          share_popup_height
      );
      return false;
    },
  };
}

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if ($(".map__area").length) {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [51.515778710103916, 46.07611271107453],
      zoom: 11,
      controls: ["zoomControl"],
    });

    myMap.behaviors.disable("scrollZoom");
    if (isMobile.any()) {
      myMap.behaviors.disable("drag");
    }

    var myGeoObjects = [];

    myGeoObjects[0] = new ymaps.Placemark(
      [51.49356935224387, 46.12303535515592],
      {
        clusterCaption: "Саратовремеонт",
        hintContent: "Саратовремонт!",
        balloonContentBody:
          'Саратовремонт, Энгельс, Маяковского 4Б (офисный центр "Восторг"), офис 307',
      },
      {
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        iconImageHref: "assets/img/mapmarker2.png",
        // Размеры метки.
        iconImageSize: [30, 45],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-20, -47],
      }
    );

    myGeoObjects[1] = new ymaps.Placemark(
      [51.551021850477284, 46.01745698280331],
      {
        clusterCaption: "Саратовремеонт",
        hintContent: "Саратовремонт!",
        balloonContentBody: "Саратовремонт, Саратов, Танкистов ул., 37",
      },
      {
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        iconImageHref: "assets/img/mapmarker2.png",
        // Размеры метки.
        iconImageSize: [30, 45],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-20, -47],
      }
    );

    var clusterIcons = [
      {
        href: "/images/pointer.png",
        size: [31, 40],
        offset: [0, 0],
      },
    ];

    var clusterer = new ymaps.Clusterer({
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: false,
      // Устанавливаем стандартный макет балуна кластера "Карусель".
      clusterBalloonContentLayout: "cluster#balloonCarousel",
      // Устанавливаем собственный макет.
      //clusterBalloonItemContentLayout: customItemContentLayout,
      // Устанавливаем режим открытия балуна.
      // В данном примере балун никогда не будет открываться в режиме панели.
      clusterBalloonPanelMaxMapArea: 0,
      // Устанавливаем размеры макета контента балуна (в пикселях).
      clusterBalloonContentLayoutWidth: 300,
      clusterBalloonContentLayoutHeight: 200,
      // Устанавливаем максимальное количество элементов в нижней панели на одной странице
      clusterBalloonPagerSize: 5,
      // Настройка внешего вида нижней панели.
      // Режим marker рекомендуется использовать с небольшим количеством элементов.
      clusterBalloonPagerType: "marker",
      // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
      // clusterBalloonCycling: false,
      // Можно отключить отображение меню навигации.
      // clusterBalloonPagerVisible: false
    });

    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
  }
}
