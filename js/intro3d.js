const cardsData=[
    {
        name: "Utsab Sarker",
        father: "Father Name",
        mother: "Mother Name",
        dob: "2005-12-16",
        phone: "+8801XXXXXXXXX",
        whatsapp: "+8801XXXXXXXXX",
        email: "utsab@example.com",
        fb: "https://facebook.com/utsab",
        image: "images/intro/utsab.jpg", // <-- এই ছবি যোগ করো
        bg: "images/intro/utsab-bg.jpeg" // <-- photocard background
    },
    {
        name: "Rakhi Sarkar",
        father: "Father Name",
        mother: "Mother Name",
        dob: "2006-04-02",
        phone: "+8801XXXXXXXXX",
        whatsapp: "+8801XXXXXXXXX",
        email: "rakhi@example.com",
        fb: "https://facebook.com/rakhi",
        image: "images/intro/rakhi.jpg", // <-- এই ছবি যোগ করো
        bg: "images/intro/rakhi-bg.jpg" // <-- photocard background
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
