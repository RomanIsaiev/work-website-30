import $ from "jquery";
// const closeOpenText = document.querySelectorAll(".changeStatus");

$(".question").click(function () {
  $(this).find(".content").toggle(200); //скрытие, показ ответа
  $(this).find(".question-plus").css("transform", "rotate(0)"); //поворот стрелки
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
    $(this).find(".question-plus").css("transform", "rotate(45deg)"); //поворот стрелки
  }
});

$(".question-two").click(function () {
  $(this).find(".content-two").toggle(200); //скрытие, показ ответа
  $(this).find(".question-plus").css("transform", "rotate(0)"); //поворот стрелки
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
    $(this).find(".question-plus").css("transform", "rotate(45deg)"); //поворот стрелки
  }
});
