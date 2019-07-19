const A = new Audio("midi/1.mp3");
const S = new Audio("midi/2.mp3");
const D = new Audio("midi/3.mp3");
const F = new Audio("midi/4.mp3");
const G = new Audio("midi/5.mp3");
const H = new Audio("midi/6.mp3");
const J = new Audio("midi/7.mp3");
const K = new Audio("midi/8.mp3");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
};

// A
const buttonA = document.querySelector(".button-a");
const playSoundA = () => {
  playSound(A);
  buttonA.classList.add("active");
};
buttonA.addEventListener("click", playSoundA);

// S
const buttonS = document.querySelector(".button-s");
const playSoundS = () => {
  playSound(S);
  buttonS.classList.add("active");
};
buttonS.addEventListener("click", playSoundS);

// D
const buttonD = document.querySelector(".button-d");
const playSoundD = () => {
  playSound(D);
  buttonD.classList.add("active");
};
buttonD.addEventListener("click", playSoundD);

// F
const buttonF = document.querySelector(".button-f");
const playSoundF = () => {
  playSound(F);
  buttonF.classList.add("active");
};
buttonF.addEventListener("click", playSoundF);

// G
const buttonG = document.querySelector(".button-g");
const playSoundG = () => {
  playSound(G);
  buttonG.classList.add("active");
};
buttonG.addEventListener("click", playSoundG);

// H
const buttonH = document.querySelector(".button-h");
const playSoundH = () => {
  playSound(H);
  buttonH.classList.add("active");
};
buttonH.addEventListener("click", playSoundH);

// J
const buttonJ = document.querySelector(".button-j");
const playSoundJ = () => {
  playSound(J);
  buttonJ.classList.add("active");
};
buttonJ.addEventListener("click", playSoundJ);

// K
const buttonK = document.querySelector(".button-k");
const playSoundK = () => {
  playSound(K);
  buttonK.classList.add("active");
};
buttonK.addEventListener("click", playSoundK);

window.addEventListener("keydown", ({ keyCode }) => {
  // Press A
  if (keyCode === 65) return playSoundA();

  // Press S
  if (keyCode === 83) return playSoundS();

  // Press D
  if (keyCode === 68) return playSoundD();

  // Press F
  if (keyCode === 70) return playSoundF();

  // Press G
  if (keyCode === 71) return playSoundG();

  // Press H
  if (keyCode === 72) return playSoundH();

  // Press J
  if (keyCode === 74) return playSoundJ();

  // Press K
  if (keyCode === 75) return playSoundK();
});
