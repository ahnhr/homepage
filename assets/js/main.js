import "../scss/styles.scss";

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
});
