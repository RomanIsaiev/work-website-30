window.onscroll = function () {
  var button = document.getElementById("fixedButton");
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
