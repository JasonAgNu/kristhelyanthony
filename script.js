const galery = document.getElementById('galery');

const mediaItems = [
    { type: 'image', source: './images/2.png' },
    { type: 'image', source: './images/3.png' },
    { type: 'image', source: './images/4.png' },
    { type: 'video', source: './videos/5.mp4' },
    { type: 'video', source: './videos/6.mp4' },
    { type: 'video', source: './videos/8.mp4' },
    { type: 'video', source: './videos/9.mp4' },
    { type: 'image', source: './images/10.png' },
];

function createMediaElement(item) {
    if (item.type === 'image') {
        return createImage(item.source);
    } else if (item.type === 'video') {
        return createVideo(item.source);
    }
}

function createImage(ruta) {
    const image = document.createElement('img');
    image.src = ruta;
    image.classList.add('media');
    return image;
}

function createVideo(source) {
  const video = document.createElement('video');
  video.src = source;
  video.classList.add('media');
  video.autoplay = true;  // Establece autoplay en true
  video.muted = true;

  video.addEventListener('error', (event) => {
      console.error('Error al cargar o reproducir el video:', event);
  });

  return video;
}

function createImageForm(link) {
    const image = document.createElement('img');
    image.src = link;
    image.classList.add('image');
    return image;
}

function createImageWithForm(link) {
    const container = document.createElement('div');

    const image = createImage(link);

    const button = document.createElement('button');
    button.textContent = '';
    button.classList.add("btn");
    button.addEventListener('click', () => {
        window.location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAYAALbWhq9URVRPNkJZRzE4ODIxMExOM1dBMUFRSzNBNS4u';
    });

    container.style.position = 'relative';
    container.appendChild(image);

    button.style.position = 'absolute';
    button.style.top = '92%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.zIndex = '1';

    container.appendChild(button);

    return container;
}

function createImageWithAddress(ruta) {
    const container = document.createElement('div');

    const image = createImage(ruta);

    const button = document.createElement('button');
    button.textContent = '';
    button.classList.add("btn");
    button.addEventListener('click', () => {
        window.location.href = 'https://www.google.com/maps/place/V+Entertainment+CR/@10.0646924,-84.1144133,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0f1b03451d70b:0x3b58378430bf94a6!8m2!3d10.0646871!4d-84.1118384!16s%2Fg%2F11g4lz44r2?entry=tts';
    });

    container.style.position = 'relative';
    container.appendChild(image);

    button.style.position = 'absolute';
    button.style.top = '80%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.zIndex = '1';

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
      
      // Agregar elementos al galery
      mediaItems.forEach(item => {
          const mediaElement = createMediaElement(item);
          galery.appendChild(mediaElement);
      });
  });
});
