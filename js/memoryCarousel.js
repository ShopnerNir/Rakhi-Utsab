// Memory images (GitHub /images/memories folder)
const memoryImages=[
"images/memories/1.jpg",
"images/memories/2.jpg",
"images/memories/3.jpg",
"images/memories/4.jpg",
"images/memories/5.jpg"
];

const carousel=document.getElementById("memoryCarousel");

let currentIndex=0;
let isDragging=false;
let startX=0;
let currentTranslate=0;
let prevTranslate=0;
let animationID=0;

// Inject images
memoryImages.forEach(src=>{
let img=document.createElement("img");
img.src=src;
carousel.appendChild(img);
});

const imgs=document.querySelectorAll("#memoryCarousel img");

function updateCarousel(){
imgs.forEach((img,index)=>{
img.classList.remove("center");
if(index===currentIndex){
img.classList.add("center");
}
});
const offset=-currentIndex*(220); // image width + margin
carousel.style.transform=`translateX(${offset}px)`;
}

// Auto slide every 3 sec
setInterval(()=>{
currentIndex=(currentIndex+1)%memoryImages.length;
updateCarousel();
},3000);

updateCarousel();

// Touch & Mouse Drag
carousel.addEventListener("mousedown",startDrag);
carousel.addEventListener("touchstart",startDrag);

carousel.addEventListener("mouseup",endDrag);
carousel.addEventListener("touchend",endDrag);

carousel.addEventListener("mouseleave",endDrag);

carousel.addEventListener("mousemove",drag);
carousel.addEventListener("touchmove",drag);

function startDrag(e){
isDragging=true;
startX=getPositionX(e);
cancelAnimationFrame(animationID);
}

function drag(e){
if(isDragging){
const currentPosition=getPositionX(e);
const moved=currentPosition-startX;
if(moved>50){
currentIndex--;
if(currentIndex<0) currentIndex=memoryImages.length-1;
updateCarousel();
startX=currentPosition;
}else if(moved<-50){
currentIndex++;
if(currentIndex>=memoryImages.length) currentIndex=0;
updateCarousel();
startX=currentPosition;
}
}
}

function endDrag(){
isDragging=false;
}

function getPositionX(e){
return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}
