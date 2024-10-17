const d = document;
const $circles = d.querySelectorAll(".circle"),
  $progress = d.querySelector(".progress");
const $prev = d.getElementById("prev"),
  $next = d.getElementById("next");
let circles = 1;
const draw = () => {
  for (let i = 0; i < circles; i++) {
    $circles[i].classList.add("active");
  }
  for (let i = 4; i > circles; i--) {
    $circles[i - 1].classList.remove("active");
  }
  $prev.disabled = circles === 1;
  $next.disabled = circles === 4;
  $progress.style.width = ((circles - 1) / ($circles.length - 1)) * 100 + "%";
};
draw();

d.addEventListener("click", (e) => {
  if (e.target.matches("#prev")) --circles;
  if (e.target.matches("#next")) ++circles;
  draw();
});
