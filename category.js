const navCategory = document.getElementById("categories");
const navBtns = document.getElementsByClassName("nav-buttons");
 for (const key in navBtns) {
    if (!Object.hasOwn(navBtns, key)) continue; 
    const element = navBtns[key];
    element.addEventListener("mouseover",()=>{
        navCategory.classList.remove("category-line");
    })
    element.addEventListener("mouseout",()=>{
        navCategory.classList.add("category-line");
    })
 }