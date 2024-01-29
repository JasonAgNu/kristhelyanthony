const galery = document.getElementById("galery");

const mediaItems = [
  { type: 'image', path: "./images/2.png" },
  { type: 'image', path: "./images/3.png" },
  { type: 'image', path: "./images/4.png" },
  { type: 'video', path: "./videos/5.mp4" },
  { type: 'image', path: "./images/6.png" },
  { type: 'video', path: "./videos/8.mp4" },
  { type: 'video', path: "./videos/9.mp4" },
  { type: 'image', path: "./images/10.png" },
];

mediaItems.forEach((item, index) => {
  const isVideo = item.type === 'video';
  const isImage6 = index === 4;
  const isImage10 = index === 7;
  const element = isImage6
    ? isVideo ? createVideoWithForm(item.path) : createImageWithAddress(item.path)
    : isImage10
    ? isVideo ? createVideoWithForm(item.path) : createImage(item.path)
    : isVideo ? createVideo(item.path) : createImage(item.path);

  galery.appendChild(element);
});

function createImageOrVideoElement(path, isVideo = false) {
  const element = isVideo ? document.createElement("video") : document.createElement("img");
  element.src = path;
  element.classList.add("media");
  if (isVideo) {
    element.setAttribute("controls", true);
  }
  return element;
}

function createImage(path) {
  return createImageOrVideoElement(path);
}

function createVideo(path) {
  const video = createImageOrVideoElement(path, true);
  video.setAttribute("autoplay", true);
  video.setAttribute("loop", true);
  video.removeAttribute("controls"); // Eliminamos el atributo controls
  return video;
}

function createImageForm(link) {
  const image = document.createElement("img");
  image.src = link;
  image.classList.add("image");
  return image;
}

function createVideoWithForm(link) {
  const container = document.createElement("div");

  const media = createImageOrVideoElement(link, true);

  const button = document.createElement("button");
  button.textContent = "";
  button.classList.add("btn");
  button.addEventListener("click", () => {
    window.location.href =
      "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAYAALbWhq9URVRPNkJZRzE4ODIxMExOM1dBMUFRSzNBNS4u";
  });

  container.style.position = "relative";
  container.appendChild(media);

  button.style.position = "absolute";
  button.style.top = "92%";
  button.style.left = "50%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.zIndex = "1";

  container.appendChild(button);

  return container;
}

function createImageWithAddress(path) {
  const container = document.createElement("div");

  const media = createImageOrVideoElement(path);

  const button = document.createElement("button");
  button.textContent = "";
  button.classList.add("btn");
  button.addEventListener("click", () => {
    window.location.href =
      "https://www.google.com/maps/place/V+Entertainment+CR/@10.0646924,-84.1144133,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0f1b03451d70b:0x3b58378430bf94a6!8m2!3d10.0646871!4d-84.1118384!16s%2Fg%2F11g4lz44r2?entry=tts";
  });

  container.style.position = "relative";
  container.appendChild(media);

  button.style.position = "absolute";
  button.style.top = "80%";
  button.style.left = "50%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.zIndex = "1";

  container.appendChild(button);

  return container;
}

function playMusic() {
  const musicPath = "./music/lifetime.mp3";

  const audio = new Audio(musicPath);
  audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const invitationsContent = document.getElementById("invitations-content");
  const invitationsButton = document.getElementById("invitations-button");

  invitationsButton.addEventListener("click", () => {
    invitationsContent.style.display = "block";
    invitationsButton.style.display = "none";
    playMusic();
  });
});
