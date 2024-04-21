document.addEventListener("DOMContentLoaded", function() {
    const revealButton = document.getElementById('revealButton');
    const messageContainer = document.getElementById('messageContainer');

    revealButton.addEventListener('click', function() {
        messageContainer.classList.remove('hidden');
        revealButton.style.display = 'none';
    });
});