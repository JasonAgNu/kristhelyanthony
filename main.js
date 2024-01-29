const invitationLink = document.querySelector('a[href="./invitation.html"]');
invitationLink.addEventListener('click', handleInvitationClick);

// Función que maneja el clic en el enlace de invitación
function handleInvitationClick(event) {
    // Reproduce el audio
    audio.play();

    // Inicia la reproducción de los videos después de una interacción del usuario
    mediaItems.filter(item => item.type === 'video').forEach(videoItem => {
        const videoElement = createVideo(videoItem.source);
        galery.appendChild(videoElement);
        videoElement.play();
    });

    // Después de un breve momento, redirige a la página de invitación
    setTimeout(() => {
        window.location.href = invitationLink.getAttribute('href');
    }, 100);
}