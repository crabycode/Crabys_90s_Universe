window.onload = function () {
    let views = localStorage.getItem("views");
    if (!views) 
    {
        views = 0;
    }
    views++;
    localStorage.setItem("views", views);
    const viewsCounter = document.getElementById("views-counter");
    viewsCounter.textContent = `You are spy number: ${views}`;
};

document.addEventListener("DOMContentLoaded", function() {
    var ogTitle = "Craby's personal 90s website! This is the best website!";
    var position = 0;
    function rotateTitle() {
        var title = ogTitle.substr(position) + ogTitle.substr(0, position);
        document.title = title;
        position = (position + 1) % ogTitle.length;
        setTimeout(rotateTitle, 300);
    }
    rotateTitle();
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.retro-nav a');
    if (links.length===0) 
    {
        console.error('No links found in the .retro-nav class!');
        return;
    }
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            playSound('sounds/retro2.mp3');
        });
        link.addEventListener('click', () => {
            playSound('sounds/retro1.mp3');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    const toggleButton = document.getElementById("music-button");
    let isPlaying = true;
    toggleButton.addEventListener("click", () => {
        if (isPlaying) 
        {
            audio.pause();
            toggleButton.textContent = "Play Music";
        } else 
        {
            audio.play();
            toggleButton.textContent = "Stop Music";
        }
        isPlaying = !isPlaying;
    });
});

function playSound(file) {
    const audio= new Audio(file);
    audio.volume = 0.5;
    audio.play().catch(error => {
        console.error('Audio playback failed:', error);
    });
}