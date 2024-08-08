window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector(".nav_top").classList.add("visible");
  } else {
    document.querySelector(".nav_top").classList.remove("visible");
  }
}

const btn = document.querySelector(".nav_btn");
const menu = document.querySelector(".menu")
btn.addEventListener("click", function(){
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    btn.classList.add("act");
  } else {
    btn.classList.remove("act");
  }
})
