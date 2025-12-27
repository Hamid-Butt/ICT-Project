const navHome = document.getElementById("home");
const navBtns = document.getElementsByClassName("nav-buttons");
 for (const key in navBtns) {
    if (!Object.hasOwn(navBtns, key)) continue; 
    const element = navBtns[key];
    element.addEventListener("mouseover",()=>{
        navHome.classList.remove("home-line");
    })
    element.addEventListener("mouseout",()=>{
        navHome.classList.add("home-line");
    })
 }
//Red Heart
function redHeart(heart){
        heart.classList.toggle("red-heart");
}

function visibleFeedback(){
    let feedback = document.getElementsByClassName("feedback");
    feedback = feedback[0];
    let feedbackBtnSec = document.getElementsByClassName("feedback-btn-p");
     feedbackBtnSec =  feedbackBtnSec[0];
    feedback.classList.add("feedback-show");
    feedbackBtnSec.classList.add("hide");
}
