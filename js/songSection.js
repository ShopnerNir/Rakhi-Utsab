// Load YouTube IFrame API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'pSugJr35luA',
    events: {
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      'autoplay': 0,
      'rel': 0
    }
  });
}

// Button click → open popup + autoplay
document.getElementById('romanticBtn').addEventListener('click', () => {
  document.getElementById('shortsLightbox').style.display = 'flex';
  player.playVideo();
});

// Click outside iframe → close popup
document.getElementById('shortsLightbox').addEventListener('click', (e) => {
  if(e.target === document.getElementById('shortsLightbox')){
    document.getElementById('shortsLightbox').style.display = 'none';
    player.stopVideo();
  }
});

// Auto-close when video ends
function onPlayerStateChange(event) {
  if(event.data === YT.PlayerState.ENDED){
    document.getElementById('shortsLightbox').style.display = 'none';
    player.stopVideo();
  }
}
