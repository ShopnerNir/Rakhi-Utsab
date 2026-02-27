const relationshipStart = new Date("2026-01-22T00:00:00");

const milestones = [
{label:"1 Month Anniversary ❤️", months:1},
{label:"2 Months Anniversary 💕", months:2},
{label:"3 Months Anniversary 💖", months:3},
{label:"6 Months Anniversary 💍", months:6},
{label:"1 Year Anniversary 🎉", years:1},
{label:"3 Years Anniversary 💎", years:3}
];

let milestoneIndex = 0;

function calculateRunningTime(){
const now = new Date();
let diff = now - relationshipStart;

let seconds = Math.floor(diff/1000)%60;
let minutes = Math.floor(diff/(1000*60))%60;
let hours = Math.floor(diff/(1000*60*60))%24;
let days = Math.floor(diff/(1000*60*60*24));

document.getElementById("relationshipTime").innerText =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

function getMilestoneDate(m){
let date = new Date(relationshipStart);

if(m.months){
date.setMonth(date.getMonth()+m.months);
}
if(m.years){
date.setFullYear(date.getFullYear()+m.years);
}

return date;
}

function findNextMilestone(){
const now = new Date();

for(let i=0;i<milestones.length;i++){
let date = getMilestoneDate(milestones[i]);
if(date > now){
milestoneIndex = i;
return;
}
}
milestoneIndex = 0;
}

function updateMilestone(){
const now = new Date();
const milestone = milestones[milestoneIndex];
const milestoneDate = getMilestoneDate(milestone);

let diff = milestoneDate - now;

if(diff < 0){
milestoneIndex = (milestoneIndex+1)%milestones.length;
return;
}

let seconds = Math.floor(diff/1000)%60;
let minutes = Math.floor(diff/(1000*60))%60;
let hours = Math.floor(diff/(1000*60*60))%24;
let days = Math.floor(diff/(1000*60*60*24));

document.getElementById("milestoneTitle").innerText = milestone.label;
document.getElementById("milestoneTime").innerText =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds Remaining`;
}

function rotateMilestones(){
milestoneIndex = (milestoneIndex+1)%milestones.length;
}

findNextMilestone();
setInterval(calculateRunningTime,1000);
setInterval(updateMilestone,1000);
setInterval(rotateMilestones,5000);
