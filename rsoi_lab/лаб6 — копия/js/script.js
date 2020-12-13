first_butt.onclick = function (e) {
  e.preventDefault()
  $(".class4 .class6").addClass("classNew");
  // $("div").attr("class").filter(':odd').addClass("classNew");

  $("div:odd img").css("width", "400px");
}

second_butt.onclick = function (e) {
  e.preventDefault();
  $("div:even").animate({
    opacity: 0.1
  }, 1000);
  $("img:odd").css("border", "2px solid red");
}
