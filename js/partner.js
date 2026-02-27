const partners=[
{
name:"Partner One",
subtitle:"Best Friend ❤️",
dob:"1990-05-12",
phone:"+8801XXXXXXXXX",
email:"partner1@example.com",
fb:"https://facebook.com/partner1",
image:"images/partner1.jpg"
},
{
name:"Partner Two",
subtitle:"Family Support 💕",
dob:"1988-08-20",
phone:"+8801XXXXXXXXX",
email:"partner2@example.com",
fb:"https://facebook.com/partner2",
image:"images/partner2.jpg"
},
{
name:"Partner Three",
subtitle:"Advisor 💎",
dob:"1992-11-05",
phone:"+8801XXXXXXXXX",
email:"partner3@example.com",
fb:"https://facebook.com/partner3",
image:"images/partner3.jpg"
}
];

const partnerCarousel=document.getElementById("partnerCarousel");
let partnerIndex=0;
let partnerInterval;

// Inject cards
partners.forEach((p,index)=>{
const card=document.createElement("div");
card.className="partnerCard";
card.innerHTML=`<img src="${p.image}"><h3>${p.name}</h3><p>${p.subtitle}</p>`;
card.addEventListener("click",()=>openPartnerPopup(index));
partnerCarousel.appendChild(card);
});

// Auto Slide
function slidePartners(){
partnerIndex=(partnerIndex+1)%partners.length;
updatePartnerCarousel();
}

function updatePartnerCarousel(){
const offset=-partnerIndex*280; // width+margin
partnerCarousel.style.transform=`translateX(${offset}px)`;
}

partnerInterval=setInterval(slidePartners,3000);

// Popup Logic
const partnerPopup=document.getElementById("partnerPopup");
function openPartnerPopup(index){
const p=partners[index];
partnerPopup.style.display="flex";
document.getElementById("popupImg").src=p.image;
document.getElementById("popupName").innerText=p.name;
document.getElementById("popupSubtitle").innerText=p.subtitle;
document.getElementById("popupDOB").innerText="DOB: "+p.dob;
document.getElementById("popupPhone").innerHTML=`📞 <a href="tel:${p.phone}">${p.phone}</a>`;
document.getElementById("popupEmail").innerHTML=`✉ <a href="mailto:${p.email}">${p.email}</a>`;
document.getElementById("popupFB").innerHTML=`🔗 <a href="${p.fb}" target="_blank">Facebook</a>`;

// Start birthday countdown
startBirthdayCountdown(p.dob);
}

function closePartnerPopup(){
partnerPopup.style.display="none";
clearInterval(birthdayInterval);
}

// Birthday Countdown
let birthdayInterval;
function startBirthdayCountdown(dob){
clearInterval(birthdayInterval);
function updateCountdown(){
const now=new Date();
let birth=new Date(dob);
birth.setFullYear(now.getFullYear());
if(birth<now) birth.setFullYear(now.getFullYear()+1);

let diff=birth-now;
let days=Math.floor(diff/1000/60/60/24);
let hours=Math.floor((diff/1000/60/60)%24);
let minutes=Math.floor((diff/1000/60)%60);
let seconds=Math.floor((diff/1000)%60);

document.getElementById("popupCountdown").innerText=
`Next Birthday in ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}
updateCountdown();
birthdayInterval=setInterval(updateCountdown,1000);
}
