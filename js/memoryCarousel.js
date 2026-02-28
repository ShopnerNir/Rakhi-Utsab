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
