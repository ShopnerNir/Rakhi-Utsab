const sections=document.querySelectorAll("#allSections section");

function revealSections(){
    const triggerBottom=window.innerHeight*0.85;

    sections.forEach(section=>{
        const top=section.getBoundingClientRect().top;

        if(top<triggerBottom){
            section.classList.add("active");
        }else{
            section.classList.remove("active");
        }
    });
}

// Initial check & scroll listener
window.addEventListener("scroll",revealSections);
window.addEventListener("load",revealSections);;
