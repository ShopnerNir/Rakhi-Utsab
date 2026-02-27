const playBtn = document.getElementById("playSongBtn");
const songPopup = document.getElementById("songPopup");
const closeBtn = document.getElementById("closeSongPopup");
const songVideo = document.getElementById("songVideo");

playBtn.addEventListener("click", () => {
    songPopup.style.display = "flex";
    songVideo.src = "https://www.youtube.com/embed/pSugJr35luA?autoplay=1&mute=0";
    setTimeout(() => {
        songPopup.style.display = "none";
        songVideo.src = "";
    }, 15000); // adjust duration
});

closeBtn.addEventListener("click", () => {
    songPopup.style.display = "none";
    songVideo.src = "";
});
