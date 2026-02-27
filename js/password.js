function checkPassword(){
let today=new Date();
let dd=String(today.getDate()).padStart(2,'0');
let mm=String(today.getMonth()+1).padStart(2,'0');
let yyyy=today.getFullYear();

let correct="22.01.2026."+dd+"."+mm+"."+yyyy;

let input=document.getElementById("passwordInput").value;

if(input===correct){
document.getElementById("lockScreen").style.display="none";
document.getElementById("mainContent").style.display="block";
}else{
document.getElementById("errorMsg").innerText="Wrong Password!";
}
}
