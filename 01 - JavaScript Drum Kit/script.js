const keys = document.querySelectorAll(".keys");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", (e) => {
  for (let i = 0; i < 9; i++) {
    if (keys[0].children[i].children[0].innerText === e.key.toUpperCase()) {
      playSound(e);
      keys[0].children[i].classList.add("playing");
      setTimeout(() => {
        keys[0].children[i].classList.remove("playing");
      }, 125);
    }
  }
});
console.log(keys[0].children[0].children[0].innerText);
