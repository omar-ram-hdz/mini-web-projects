const d = document,
  ls = localStorage;
const $modal = d.querySelector("dialog");
const $closeModal = $modal.querySelector(".close-dialog");
const $allowCookies = $modal.querySelector("#allow");

const checkCookies = () => {
  if (!localStorage.getItem("cookies")) {
    $modal.show();
    $allowCookies.removeEventListener("click", cookiesEvent);
  }
  $allowCookies.addEventListener("click", cookiesEvent);
};
function cookiesEvent() {
  ls.setItem("cookies", "true");
  $modal.close();
}

d.addEventListener("DOMContentLoaded", (e) => {
  checkCookies();
});
$closeModal.addEventListener("click", () => $modal.close());
