const galery = document.getElementById("galery");

const images = [
  "./videos/2.gif",
  "./videos/3.gif",
  "./videos/4.gif",
  "./videos/5.gif",
  "./videos/6.gif",
  "./videos/8.gif",
  "./videos/9.gif",
  "./videos/10.gif",
];

images.forEach((ruta, index) => {
  const isGif = ruta.toLowerCase().endsWith(".gif");
  const isImage6 = index === 4;
  const isImage10 = index === 7;

  const element = isImage6
    ? createImageWithAddress(ruta)
    : isImage10
    ? createImageWithForm(ruta)
    : createImage(ruta, isGif);

  galery.appendChild(element);
});

function createImage(ruta, isGif = false) {
  const image = document.createElement("img");
  image.src = ruta;
  image.classList.add("image");
  image.setAttribute("loop", "false");

  return image;
}

function createImageForm(link) {
  const image = document.createElement("img");
  image.src = link;
  image.classList.add("image");
  return image;
}

function createImageWithForm(link) {
  const container = document.createElement("div");

  const image = createImage(link);

  const button = document.createElement("button");
  button.textContent = "";
  button.classList.add("btn");
  button.addEventListener("click", () => {
    window.location.href =
      "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAYAALbWhq9URVRPNkJZRzE4ODIxMExOM1dBMUFRSzNBNS4u";
  });

  container.style.position = "relative";
  container.appendChild(image);

  button.style.position = "absolute";
  button.style.top = "92%";
  button.style.left = "50%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.zIndex = "1";

  container.appendChild(button);

  return container;
}

function createImageWithAddress(ruta) {
  const container = document.createElement("div");

  const image = createImage(ruta);

  const button = document.createElement("button");
  button.textContent = "";
  button.classList.add("btn");
  button.addEventListener("click", () => {
    window.location.href =
      "https://www.google.com/maps/place/V+Entertainment+CR/@10.0646924,-84.1144133,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0f1b03451d70b:0x3b58378430bf94a6!8m2!3d10.0646871!4d-84.1118384!16s%2Fg%2F11g4lz44r2?entry=tts";
  });

  container.style.position = "relative";
  container.appendChild(image);

  button.style.position = "absolute";
  button.style.top = "80%";
  button.style.left = "50%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.zIndex = "1";

  container.appendChild(button);

  return container;
}

function playMusic() {
  const musicPath = "./music/song.mp3";

  const audio = new Audio(musicPath);
  audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const invitationsContent = document.getElementById("invitations-content");
  const invitationsButton = document.getElementById("invitations-button");
  const wrapContainer = document.querySelector(".wrap");

  invitationsButton.addEventListener("click", () => {
    setTimeout(() => {
      invitationsContent.style.display = "block";
      invitationsButton.style.display = "none";
      wrapContainer.style.display = "none";
    }, 1000);
    playMusic();

  });
});
