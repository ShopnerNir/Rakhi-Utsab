const cardsData=[
{
name:"Utsab Sarker",
dob:"01-01-2000",
image:"images/utsab.jpg"
},
{
name:"Rakhi Sarkar",
dob:"02-02-2002",
image:"images/rakhi.jpg"
}
];

let currentIndex=0;

function renderCards(){
const container=document.getElementById("cardContainer");
container.innerHTML="";

cardsData.forEach((data,index)=>{
const card=document.createElement("div");
card.className="introCard";

if(index===currentIndex){
card.style.transform="translateX(0) scale(1)";
card.style.opacity="1";
}
else if(index<currentIndex){
card.style.transform="translateX(-350px) scale(0.8)";
card.style.opacity="0.3";
}
else{
card.style.transform="translateX(350px) scale(0.8)";
card.style.opacity="0.3";
}

card.innerHTML=`
<img src="${data.image}">
<h3>${data.name}</h3>
<p>DOB: ${data.dob}</p>
`;

container.appendChild(card);
});
}

function nextCard(){
currentIndex=(currentIndex+1)%cardsData.length;
renderCards();
}

setInterval(nextCard,5000);
renderCards();
