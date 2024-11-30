const d = document;
const $joke = d.querySelector(".joke");
const $btnGetJoke = d.querySelector(".get-joke");

const getJoke = function () {
  const url =
    "https://v2.jokeapi.dev/joke/Programming?lang=es&blacklistFlags=explicit";
  $joke.innerText = "Cargando...";
  axios
    .get(url)
    .then((res) => res.data)
    .then((data) => {
      if (data.error) throw data;
      if (data.type === "twopart") {
        $joke.innerText = `${data.setup}
        ${data.delivery} `;
      } else {
        $joke.innerText = data.joke;
      }
    })
    .catch((err) => {
      $joke.innerText = "Ocurrió un error, inténtalo más tarde";
    });
};

d.addEventListener("DOMContentLoaded", getJoke);
$btnGetJoke.addEventListener("click", getJoke);
