// Memory images (GitHub /images/memories folder)
const memoryImages = [
  "images/memories/1.jpg",
  "images/memories/2.jpg",
  "images/memories/3.jpg",
  "images/memories/4.jpg",
  "images/memories/5.jpg",
  "images/memories/6.jpg",
  "images/memories/7.jpg"
];

const memoryContainer = document.getElementById("memoryCarousel");

// Clear old content (just in case)
memoryContainer.innerHTML = "";

// Inject all images
memoryImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Memory Image";
  memoryContainer.appendChild(img);
});

const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const downloadBtn = document.getElementById("downloadBtn");
const closePopup = document.getElementById("closePopup");

// Image click
document.addEventListener("click", function(e){
  if(e.target.tagName === "IMG" && e.target.closest(".carousel")){
    
    popup.style.display = "flex";

    // Set image source
    popupImg.src = e.target.src;

    // Set download link
    downloadBtn.href = e.target.src;
  }
});

// Close button
closePopup.onclick = () => popup.style.display = "none";

// Outside click close
popup.onclick = (e)=>{
  if(e.target === popup){
    popup.style.display = "none";
  }
};
