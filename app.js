/* Al dar click el bars menu se mueve */
$(".btn").click(function () {
  $(this).toggleClass("click");
  //Al dar click muestra y oculda el Sidebar
  $(".sidebar").toggleClass("show");
});

/* Desplega el menu oculto de Features */
$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});

/* Desplega el menu oculto de Services */
$(".serv-btn").click(function () {
  $("nav ul .serv-show").toggleClass("show");
  $("nav ul .second").toggleClass("rotate");
});

/* Maniente la seleccion del click en cada opcion del side */
$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
