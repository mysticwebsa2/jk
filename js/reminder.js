function showRandomDiv() {
  const randomTime = Math.floor(Math.random() * 40) + 20; // Random time between 20 and 59 seconds
  setTimeout(() => {
      const randomDiv = document.getElementById('randomDiv');
      const music = document.getElementById('music');

      randomDiv.style.display = 'block';

      // Play the music when the div is shown
      music.play();

      // Set a timer to hide the div after 10 seconds and pause the music
      setTimeout(() => {
          randomDiv.style.display = 'none';
          music.pause();
      }, 15000);
  }, randomTime * 1000); // Convert seconds to milliseconds
}

// Delay the initial execution of showRandomDiv
setTimeout(showRandomDiv, 0);