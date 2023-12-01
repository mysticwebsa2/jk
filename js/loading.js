window.addEventListener("load", function () {
    // Add a 5-second delay
    setTimeout(function () {
        // Hide the loading screen
        document.getElementById("loading-screen").style.display = "none";
        // Show the content
        document.getElementById("content").style.display = "block";
    }, 1000); // 5000 milliseconds = 5 seconds
});
