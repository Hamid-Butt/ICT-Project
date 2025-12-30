let lastScrollY = window.scrollY;
let nav = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        let currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY)
            nav.style.transform = "translateY(-100%)";
        else
            nav.style.transform = "translateY(0px)";
        lastScrollY = currentScrollY;
    }
})


//Red Heart
function redHeart(e,heart) {
    e.stopPropagation();
    heart.classList.toggle("red-heart");
    //Favorites Appearence Box
    document.querySelector(".favProducts").classList.add("favProducts-style");
     document.querySelector(".favProducts").querySelector("div").classList.add("favProducts-show");
     document.querySelector(".favProducts").querySelector("div").classList.remove("favProducts-hide");
   if(heart.classList.contains("red-heart")){
     document.querySelector(".favProducts").querySelector("div").innerHTML = "Add To Favorites";
   }else{
     document.querySelector(".favProducts").querySelector("div").innerHTML = "Removed From Favorites";
   }
   setTimeout(() => {
       document.querySelector(".favProducts").querySelector("div").innerHTML = "";
       document.querySelector(".favProducts").classList.remove("favProducts-style");
         document.querySelector(".favProducts").querySelector("div").classList.remove("favProducts-show");
     document.querySelector(".favProducts").querySelector("div").classList.add("favProducts-hide");
   }, 500);
}



//Product Description Box Appearence
let productClick = document.querySelector(".product-onclick");
let productClickChild = productClick.querySelector(".product-onclick-div");
let productClickLeftImg = productClick.querySelector(".product-onclick-l-con").querySelector(".img");
let productClickRight = productClick.querySelector(".product-onclick-r-con");
function productDes(productDisplay2) {
    productClick.classList.add("product-onclick-toggle");
    document.body.style.overflow = "hidden";
    //Adding Style to Left and Right Boxes
    productClick.querySelector(".product-onclick-l-con").classList.add("product-onclick-l-con-style");
    productClick.querySelector(".product-onclick-r-con").classList.add("product-onclick-r-con-style");

    //Fetching Data
    let temObj = JSON.parse(productDisplay2.querySelector(".deal-hidden").querySelector("span").innerText);
    let src = productDisplay2.querySelector("img").src;
    // productClickLeftImg.style.backgroundImage = `url(${temObj.src})`; This one is not working, it should be.
    productClickLeftImg.style.backgroundImage = `url(${src})`;
    productClickRight.querySelector("h3").innerText = temObj.name.toUpperCase();
    productClickRight.querySelector(".company-title").innerText = "Company Name: ";
    productClickRight.querySelector(".company-name").innerText = temObj.companyName;
    if (temObj.off) {
        productClickRight.querySelector(".price-title").closest(".company-con").style.left = "-17px";
        productClickRight.querySelector(".price-title").innerText = "Discounted Price: ";
        let value = temObj.price - parseInt(temObj.price * temObj.off / 100);
        if (value % 10 == 0) {
            value--;
        }
        productClickRight.querySelector(".price-name").innerText = value;
        productClickRight.querySelector(".discount-title").innerText = "Discount:";
    productClickRight.querySelector(".discount-name").innerText = temObj.off + "%";

    } else {
        productClickRight.querySelector(".price-title").innerText = "Price: "
        productClickRight.querySelector(".price-title").closest(".company-con").style.left = "17px";
        productClickRight.querySelector(".price-name").innerText = temObj.price;
    }
    

    productClickRight.querySelector(".onclick-des").innerText = temObj.des;
    productClickRight.querySelector(".inc-box").innerText = "+";
    productClickRight.querySelector("#inc-deinc-input").classList.replace("inc-deinc-input","inc-deinc-input-show");
    productClickRight.querySelector(".deinc-box").innerText = "-";
    productClickRight.lastElementChild.classList.add("onclick-btn","btn");
    productClickRight.querySelector(".onclick-btn").innerText = "Add To Cart ";

}
// Increment and Decrement in Products Quantity
 let IncDeincInput = document.querySelector("#inc-deinc-input");
    function IncInput(){
        document.querySelector(".deinc-box").style.color = "#dddddd";
       IncDeincInput.value = Number(IncDeincInput.value)+1;
    }
    function DeIncInput(e){
        if(Number(IncDeincInput.value)> 0)
            IncDeincInput.value = Number(IncDeincInput.value)-1;
        else
            e.style.color = "gray";
    }
    //Add to CArt Btn working of upper animation and Taking to login page
    let userData = localStorage.getItem("username") ; //obj
       userData = JSON.parse(userData);
       if(userData){
         if(Date.now() < userData.time + 1000*60*2){
               let loginBtn = document.querySelector("#login");
               loginBtn.innerText = userData.name;
               loginBtn.style.color = "white";
               loginBtn.style.pointerEvents = "none";
               loginBtn.style.userSelect = "none";
       }
    }
   function addToCart(){   
       if(userData){
           if(Date.now() < userData.time + 1000*60*2){
               let loginBtn = document.querySelector("#login");
               loginBtn.innerText = userData.name;
               loginBtn.style.color = "white";
               loginBtn.style.pointerEvents = "none";
               loginBtn.style.userSelect = "none";
        //Copy from heartanimation section
    document.querySelector(".favProducts").classList.add("favProducts-style");
     document.querySelector(".favProducts").querySelector("div").classList.add("favProducts-show");
     document.querySelector(".favProducts").querySelector("div").classList.remove("favProducts-hide");
     if(IncDeincInput.value > 0)
         document.querySelector(".favProducts").querySelector("div").innerHTML = "ADDED TO CART";
        else
             document.querySelector(".favProducts").querySelector("div").innerHTML = "SELECT QUANTITY OF PRODUCTS";
    }else{
        localStorage.removeItem("username");
          window.location.href = "Login.html";
    }
    }
   else{
    //Redirection
        window.location.href = "Login.html";
   }
     setTimeout(() => {
       document.querySelector(".favProducts").querySelector("div").innerHTML = "";
       document.querySelector(".favProducts").classList.remove("favProducts-style");
         document.querySelector(".favProducts").querySelector("div").classList.remove("favProducts-show");
     document.querySelector(".favProducts").querySelector("div").classList.add("favProducts-hide");
   }, 500);
    } 

   
//Stoping Propogation of Child to Parent
productClickChild.addEventListener("click", e => {
    e.stopPropagation();
})

//Product Description Box Dsappearence
productClick.addEventListener("click", e => {
    productClick.classList.remove("product-onclick-toggle");
    productClick.querySelector(".product-onclick-l-con").classList.remove("product-onclick-l-con-style");
    productClick.querySelector(".product-onclick-r-con").classList.remove("product-onclick-r-con-style");
    productClickRight.querySelector("h3").innerText = "";
    productClickRight.querySelector(".company-title").innerText = "";
    productClickRight.querySelector(".company-name").innerText = "";
    productClickRight.querySelector(".price-title").innerText = ""
    productClickRight.querySelector(".price-name").innerText = "";
    productClickRight.querySelector(".onclick-des").innerText = "";
     productClickRight.querySelector(".discount-title").innerText = "";
    productClickRight.querySelector(".discount-name").innerText = "";
     productClickRight.querySelector(".inc-box").innerText = "";
     productClickRight.querySelector("#inc-deinc-input").classList.replace("inc-deinc-input-show","inc-deinc-input");
    productClickRight.querySelector(".deinc-box").innerText = "";
    productClickRight.lastElementChild.classList.remove("onclick-btn","btn");
    productClickRight.lastElementChild.innerText = "";
    document.body.style.overflow = "auto";
})
