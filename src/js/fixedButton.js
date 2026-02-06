window.onscroll = function () {
  var button = document.getElementById("fixedButton");
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
