let rightClickCount = 0;

    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      rightClickCount++;

      if (rightClickCount >= 3) {
        alert('Stop trying to inspect it BITCH!');
        rightClickCount = 0; // Reset the count after showing the message
      }
    });