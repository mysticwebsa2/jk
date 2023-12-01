function openModal() {
    // Show the overlay and modal
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    // Hide the overlay and modal
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('myModal').style.display = 'none';

    // Stop the music
    var audio = document.getElementById('myAudio');
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
}