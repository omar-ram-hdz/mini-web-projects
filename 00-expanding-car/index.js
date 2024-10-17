const d = document;

const $panels = d.querySelectorAll(".panel");

const panel = [$panels[0], $panels[0]];
const draw = () => {
  panel[0].classList.remove("active");
  panel[1].classList.add("active");
};
draw();

$panels.forEach((el) => {
  el.addEventListener("click", (e) => {
    panel[0] = panel[1];
    panel[1] = el;
    draw();
  });
});
