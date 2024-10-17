const d = document;

const $loadText = d.querySelector(".sp-loading"),
  $bg = d.querySelector(".bg");

class AnimationLoading {
  constructor() {
    this.load = 0;
    this.int = null;
  }
  blurring = () => {
    this.load++;
    if (this.load > 99) clearInterval(this.int);
    $loadText.innerText = `${this.load}%`;
    $loadText.style.opacity = scale(this.load, 0, 100, 1, 0);
    $bg.style.filter = `blur(${scale(this.load, 0, 100, 30, 0)}px)`;
  };
}

d.addEventListener("DOMContentLoaded", (e) => {
  let animationLoading = new AnimationLoading();
  animationLoading.int = setInterval(animationLoading.blurring, 35);
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
