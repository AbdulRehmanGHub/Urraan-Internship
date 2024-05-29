document.querySelectorAll('.toggle-btn').forEach((toggleButton) => {
    const emojiIcon = toggleButton.querySelector('.icon');
    const statusText = toggleButton.nextElementSibling.querySelector('.status-text');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');

        if (toggleButton.classList.contains('active')) {
            emojiIcon.classList.replace('fa-face-smile', 'fa-face-frown');
            statusText.textContent = "ON";
        } else {
            emojiIcon.classList.replace('fa-face-frown', 'fa-face-smile');
            statusText.textContent = "OFF";
        }
    });
});
