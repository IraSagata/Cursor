let soundsMap = new Map();

document.querySelectorAll(".piano-button").forEach(button => {
  soundsMap.set(
    button.innerHTML.toLowerCase(),
    button.getAttribute("data-audio-path")
  );
});

document.addEventListener("keypress", processKeyPress);

function processKeyPress(keyEvent) {
  new Audio(soundsMap.get(keyEvent.key)).play();
}
