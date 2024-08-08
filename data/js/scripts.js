// vedeo tag
const play = document.getElementById("play");
const video = document.getElementById("video1");
const volume = document.getElementById("volume");
const playMain = document.querySelector(".play_main")
const controls = document.querySelector(".controls")

playMain.addEventListener("click", function(){
  playMain.style.display = "none";
  video.play()
  play.classList.add("paused")
  controls.style.display = "flex"
})

play.addEventListener("click" , function(){
  if (video.paused) {
    video.play()
    play.classList.add("paused")
    playMain.style.display = "none";
  } else {
    video.pause()
    play.classList.remove("paused")
    playMain.style.display = "block";
  }
})


volume.addEventListener("input", function() {
  video.volume = volume.value
})

// iframe video

const playMain2 = document.querySelector(".poster");
const player = document.getElementById("player");

playMain2.addEventListener("click", function(){
  playMain2.style.display="none";
  player.src += "&autoplay=1";
});