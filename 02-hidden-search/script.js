const d = document;
const $form = d.querySelector("form");

$form.addEventListener(
  "click",
  (e) =>
    $form.classList.toggle("active") && $form.querySelector("input").focus()
);
$form.addEventListener("submit", (e) => e.preventDefault());
