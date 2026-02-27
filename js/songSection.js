let player;
const playBtn = document.getElementById("playSongBtn");
const songPopup = document.getElementById("songPopup");
const songVideo = document.getElementById("songVideo");

// Load YouTube API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// Function called by API when ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('songVideo', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Detect video end
function onPlayerStateChange(event) {
    if(event.data === YT.PlayerState.ENDED){
        songPopup.style.display = "none";
        player.stopVideo();
    }
}

// Play button click
playBtn.addEventListener("click", () => {
    songPopup.style.display = "flex";
    player.loadVideoById("pSugJr35luA");
});

// Click outside popup to close
songPopup.addEventListener("click", (e) => {
    if(e.target === songPopup){
        songPopup.style.display = "none";
        player.stopVideo();
    }
});
