// Memory images (GitHub /images/memories folder)
const memoryImages = [
  "images/memories/1.jpg",
  "images/memories/2.jpg",
  "images/memories/3.jpg",
  "images/memories/4.jpg",
  "images/memories/5.jpg"
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
const closePopup = document.getElementById("closePopup");

// সব gallery ছবিতে click event
document.addEventListener("click", function(e){
  if(e.target.closest(".carousel img")){
    popup.style.display = "flex";
    popupImg.src = e.target.src;
  }
});

// Close button
closePopup.addEventListener("click", function(){
  popup.style.display = "none";
});

// Outside click close
popup.addEventListener("click", function(e){
  if(e.target === popup){
    popup.style.display = "none";
  }
});

// ESC key close
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    popup.style.display = "none";
  }
});
