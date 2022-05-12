let btnUp = document.getElementById("back-to-top");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    btnUp.style.visibility = "visible";
  } else {
    btnUp.style.visibility = "hidden";
  }
  btnUp.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};
