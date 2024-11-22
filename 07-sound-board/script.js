const d = document,
  log = console.log;
const $main = d.querySelector("main");
const $template = d.getElementById("sound-template").content;

const DATA = [
  {
    title: "Applause",
    img: "./imgs/applause.svg",
    sound: "./sounds/applause.mp3",
  },
  {
    title: "Boo",
    img: "./imgs/ghost.svg",
    sound: "./sounds/boo.mp3",
  },
  {
    title: "Gasp",
    img: "./imgs/surprise.svg",
    sound: "./sounds/gasp.mp3",
  },
  {
    title: "Tada",
    img: "./imgs/magic.svg",
    sound: "./sounds/tada.mp3",
  },
  {
    title: "Victory",
    img: "./imgs/win.svg",
    sound: "./sounds/victory.mp3",
  },
  {
    title: "Wrong",
    img: "./imgs/wrong.svg",
    sound: "./sounds/wrong.mp3",
  },
];

const createAudio = (src, play, stop) => {
  const aud = new Audio(src);
  aud.addEventListener("ended", (e) => {
    play.disabled = false;
    stop.disabled = true;
  });
  return {
    playAudio: (e) => {
      aud
        .play()
        .then((v) => {
          play.disabled = true;
          stop.disabled = false;
        })
        .catch((err) => alert("Algo salio mal"));
    },
    stopAudio: (e) => {
      aud.pause();
      aud.currentTime = 0;
      play.disabled = false;
      stop.disabled = true;
    },
  };
};

const buttonEvent = (srcAudio, play, stop) => {
  let audio = createAudio(srcAudio, play, stop);
  play.addEventListener("click", audio.playAudio);
  stop.addEventListener("click", audio.stopAudio);
};

const render = (sound) => {
  const clone = $template.cloneNode(true);
  let img = clone.querySelector(".img-sound");
  img.src = sound.img;
  img.alt = sound.title;
  clone.querySelector(".title-sound").innerText = sound.title;
  buttonEvent(
    sound.sound,
    clone.querySelector("#play"),
    clone.querySelector("#stop")
  );
  $main.appendChild(clone);
};

d.addEventListener("DOMContentLoaded", (e) => {
  if ("content" in d.createElement("template")) {
    DATA.forEach(render);
  } else {
    alert(":( Ups, tu navegador no soporta la etiqueta <template>");
  }
});
