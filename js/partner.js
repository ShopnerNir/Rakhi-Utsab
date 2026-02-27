const partners = [
{
name:"Susmita Sarker Dona",
subtitle:"Utsab's Sister ❤️",
dob:"1990-05-12",
phone:"+8801XXXXXXXXX",
email:"partner1@example.com",
fb:"https://facebook.com/partner1",
image:"images/partners/dona.jpg"
},
{
name:"Tina",
subtitle:"Rakhi's Sister 💕",
dob:"1988-08-20",
phone:"+8801XXXXXXXXX",
email:"partner2@example.com",
fb:"https://facebook.com/partner2",
image:"images/partners/tina.jpeg"
},
{
name:"Oishi Sarkar",
subtitle:"Rakhi's Sister",
dob:"1992-11-05",
phone:"+8801XXXXXXXXX",
email:"partner3@example.com",
fb:"https://facebook.com/partner3",
image:"images/partners/oishi.jpeg"
}
];

let partnerIndex = 0;
let autoInterval;
const partnerContainer = document.getElementById("partnerCarousel");

function renderPartner(){
partnerContainer.innerHTML = "";

const p = partners[partnerIndex];

const card = document.createElement("div");
card.className = "partnerCard";
card.innerHTML = `
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.subtitle}</p>
`;

card.addEventListener("click", () => openPartnerPopup(partnerIndex));
partnerContainer.appendChild(card);
}

function nextPartner(){
partnerIndex = (partnerIndex + 1) % partners.length;
renderPartner();
}

function prevPartner(){
partnerIndex = (partnerIndex - 1 + partners.length) % partners.length;
renderPartner();
}

function startAuto(){
autoInterval = setInterval(nextPartner, 5000);
}

function resetAuto(){
clearInterval(autoInterval);
startAuto();
}

/* ===== Swipe ===== */
let startX = 0;

partnerContainer.addEventListener("touchstart", e=>{
startX = e.touches[0].clientX;
});

partnerContainer.addEventListener("touchend", e=>{
let endX = e.changedTouches[0].clientX;
let diff = startX - endX;

if(Math.abs(diff) > 50){
if(diff > 0){
nextPartner();
}else{
prevPartner();
}
resetAuto();
}
});

renderPartner();
startAuto();

/* ===== POPUP ===== */
const partnerPopup = document.getElementById("partnerPopup");

function openPartnerPopup(index){
const p = partners[index];

partnerPopup.style.display = "flex";
document.getElementById("popupImg").src = p.image;
document.getElementById("popupName").innerText = p.name;
document.getElementById("popupSubtitle").innerText = p.subtitle;
document.getElementById("popupDOB").innerText = "DOB: " + p.dob;
document.getElementById("popupPhone").innerHTML = `📞 <a href="tel:${p.phone}">${p.phone}</a>`;
document.getElementById("popupEmail").innerHTML = `✉ <a href="mailto:${p.email}">${p.email}</a>`;
document.getElementById("popupFB").innerHTML = `🔗 <a href="${p.fb}" target="_blank">Facebook</a>`;
}

function closePartnerPopup(){
partnerPopup.style.display = "none";
}
