const monthNames = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

// Love Activities
const loveEvents = {
"2026-01-06":"1st Talk ❤️",
"2026-01-21":"1st Proposal 💍",
"2026-01-22":"Final Proposal & Journey Begins 💖",
"2026-01-23":"1st Meet 🥰",
"2026-02-21":"1st Date 🌹",
"2026-02-22":"Medical Visit 🏥",
"2026-02-23":"2nd Date 💑",
"2026-02-25":"Padma River Visit 🌊"
};

const monthSelect = document.getElementById("monthSelect");
const yearSelect = document.getElementById("yearSelect");
const calendar = document.getElementById("calendar");

// Populate dropdown
for(let i=0;i<12;i++){
let option=document.createElement("option");
option.value=i;
option.text=monthNames[i];
monthSelect.appendChild(option);
}

for(let y=2025;y<=2035;y++){
let option=document.createElement("option");
option.value=y;
option.text=y;
yearSelect.appendChild(option);
}

// Default January 2026
monthSelect.value=0;
yearSelect.value=2026;

monthSelect.addEventListener("change",generateCalendar);
yearSelect.addEventListener("change",generateCalendar);

function generateCalendar(){
calendar.innerHTML="";

const month=parseInt(monthSelect.value);
const year=parseInt(yearSelect.value);

const firstDay=new Date(year,month,1).getDay();
const totalDays=new Date(year,month+1,0).getDate();

// Day Names
["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].forEach(d=>{
let div=document.createElement("div");
div.className="dayName";
div.innerText=d;
calendar.appendChild(div);
});

// Empty cells
for(let i=0;i<firstDay;i++){
let empty=document.createElement("div");
calendar.appendChild(empty);
}

// Days
for(let d=1;d<=totalDays;d++){
let div=document.createElement("div");
div.className="day";

let dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

div.innerText=d;

if(loveEvents[dateStr]){
div.classList.add("highlight");
}

div.addEventListener("click",()=>{
if(loveEvents[dateStr]){
openTimelinePopup(dateStr,loveEvents[dateStr]);
}
});

calendar.appendChild(div);
}
}

function openTimelinePopup(date,text){
document.getElementById("timelinePopup").style.display="flex";
document.getElementById("popupDate").innerText=date;
document.getElementById("popupText").innerText=text;
}

function closeTimelinePopup(){
document.getElementById("timelinePopup").style.display="none";
}

generateCalendar();
