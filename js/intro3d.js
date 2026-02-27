document.addEventListener("DOMContentLoaded", function(){

const cardsData = [
{
name: "Utsab Sarker",
dob: "2005-12-16",
image: "images/intro/utsab.jpg"
},
{
name: "Rakhi Sarkar",
dob: "2006-04-02",
image: "images/intro/rakhi.jpg"
}
];

let currentIndex = 0;
let autoInterval;
const container = document.getElementById("cardContainer");

if(!container) return;

function renderCard(){
container.innerHTML = "";

const data = cardsData[currentIndex];

const card = document.createElement("div");
card.className = "introCard";
card.innerHTML = `
<img src="${data.image}">
<h3>${data.name}</h3>
<p>DOB: ${data.dob}</p>
`;

container.appendChild(card);
}

function nextCard(){
currentIndex = (currentIndex + 1) % cardsData.length;
renderCard();
}

function prevCard(){
currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
renderCard();
}

function startAuto(){
autoInterval = setInterval(nextCard, 5000);
}

function resetAuto(){
clearInterval(autoInterval);
startAuto();
}

/* Swipe */
let startX = 0;

container.addEventListener("touchstart", e=>{
startX = e.touches[0].clientX;
});

container.addEventListener("touchend", e=>{
let endX = e.changedTouches[0].clientX;
let diff = startX - endX;

if(Math.abs(diff) > 50){
if(diff > 0){
nextCard();
}else{
prevCard();
}
resetAuto();
}
});

renderCard();
startAuto();

});
