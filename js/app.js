const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", (e) => {
  keys.forEach((key) => {
    if (e.keyCode === key.dataset.key * 1) {
      const sound = key.lastElementChild.textContent.toLowerCase();
      // Play sound
      playSound(key, sound);
    }
  });
});

// Play the sound with respect to the key
function playSound(key, sound) {
  const audio = new Audio(`./sounds/${sound}.wav`);
  if (!audio) return;
  key.classList += " playing";
  audio.currentTime = 0;
  audio.play();
}

// Remove playing class from key
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
});

// remove playing class when it finishes the last transition property
function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        this.classList.remove('playing');
  }
}
