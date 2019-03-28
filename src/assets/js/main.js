import "../scss/styles.scss";
import Swiper from "swiper";

$(document).ready(function() {
  var header = $(".header");
  var mainMenu = $(".header__menu-item");
  var subMenu = $(".subMenu");

  mainMenu.mouseover(function() {
    subMenu.css({ display: "grid" });
    header.stop().animate({ height: "288px" }, 200);
  });

  mainMenu.mouseout(function() {
    subMenu.css({ display: "none" });
    header.stop().animate({ height: "79px" }, 200);
  });

  //main banner
  var mainSwiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 5000
    }
  });

  //a.ipen banner
  var aipenSwiper = new Swiper(".aipen-container", {
    autoplay: {
      delay: 5000
    },
    loop: true,
    slidesPerView: 1
  });

  new daum.roughmap.Lander({
    timestamp: "1551073772558",
    key: "sd3a",
    mapHeight: "400"
  }).render();
});
