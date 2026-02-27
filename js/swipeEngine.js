let startX=0;
let endX=0;

document.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

document.addEventListener("touchend",e=>{
endX=e.changedTouches[0].clientX;

if(endX-startX>50){
currentIndex--;
if(currentIndex<0) currentIndex=cardsData.length-1;
renderCards();
}

if(startX-endX>50){
currentIndex++;
if(currentIndex>=cardsData.length) currentIndex=0;
renderCards();
}
});
