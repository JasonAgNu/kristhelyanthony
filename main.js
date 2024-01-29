// Obtén el enlace y agrega un controlador de eventos al hacer clic
const invitationLink = document.querySelector('a[href="./invitation.html"]');
invitationLink.addEventListener('click', handleInvitationClick);

// Función que maneja el clic en el enlace de invitación
function handleInvitationClick(event) {
    // Reproduce el audio
    audio.play();

    // Inicia la reproducción de los videos (puedes personalizar esta lógica según tus necesidades)
    mediaItems.filter(item => item.type === 'video').forEach(videoItem => {
        const videoElement = createVideo(videoItem.source);
        galery.appendChild(videoElement);
        videoElement.play();
    });

    // Espera un breve momento antes de redirigir
    setTimeout(() => {
        // Realiza la redirección a la página de invitación
        window.location.href = invitationLink.getAttribute('href');
    }, 100); // Puedes ajustar el tiempo de espera según tus necesidades
}