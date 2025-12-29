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

//SHOP bottom line Effect
const navShop = document.getElementById("shop");
const navBtns = document.getElementsByClassName("nav-buttons");
for (const key in navBtns) {
    if (!Object.hasOwn(navBtns, key)) continue;
    const element = navBtns[key];
    element.addEventListener("mouseover", () => {
        navShop.classList.remove("home-line");
    })
    element.addEventListener("mouseout", () => {
        navShop.classList.add("home-line");
    })
}
//Red Heart
function redHeart(e,heart) {
    e.stopPropagation();
    heart.classList.toggle("red-heart");
    //Favorites Appearence Box
    document.querySelector(".favProducts").classList.add("favProducts-style");
     document.querySelector(".favProducts").querySelector("div").classList.toggle("favProducts-show");
     document.querySelector(".favProducts").querySelector("div").classList.toggle("favProducts-hide");
   if(heart.classList.contains("red-heart")){
     document.querySelector(".favProducts").querySelector("div").innerHTML = "Add To Favorites";
   }else{
     document.querySelector(".favProducts").querySelector("div").innerHTML = "Removed From Favorites";
   }
   setTimeout(() => {
       document.querySelector(".favProducts").querySelector("div").innerHTML = "";
       document.querySelector(".favProducts").classList.remove("favProducts-style");
         document.querySelector(".favProducts").querySelector("div").classList.toggle("favProducts-show");
     document.querySelector(".favProducts").querySelector("div").classList.toggle("favProducts-hide");
   }, 500);
}

//Deals-Section
function createProductsDisplay(obj, productDisplay, dealSec) {
    let newProductDisplay = productDisplay.cloneNode(true);
    let img = newProductDisplay.querySelector("img");
    img.src = obj.src;
    img.alt = obj.name;
    let cutPrice = newProductDisplay.querySelector(".cut-price").querySelector("span");
    let remPrice = newProductDisplay.querySelector(".rem-price").querySelector("span");
    let productName = newProductDisplay.querySelector(".deal-name").innerHTML = obj.name;
    let off = newProductDisplay.querySelector(".off");
    if (obj.off) {
        let discount = parseInt(obj.off) / 100 * parseInt(obj.price);
        let disPrice = parseInt(obj.price) - parseInt(discount);
        if (disPrice % 10 == 0)
            disPrice--;
        remPrice.innerHTML = " " + disPrice;
        cutPrice.innerHTML = " " + obj.price;
        off.innerHTML = obj.off + "% off";
    }
    else {
        off.remove();
        remPrice.innerHTML = " " + obj.price;
        newProductDisplay.querySelector(".cut-price").remove();
    }
    newProductDisplay.querySelector(".deal-hidden").querySelector("span").innerText = JSON.stringify(obj);
    dealSec.querySelector(".deals-container").insertAdjacentElement("beforeend", newProductDisplay);
}


let dealSections = document.querySelectorAll(".deals-section");
let productDisplay = document.querySelector(".deal-card");//innerHtml is a text and we cant clone that
document.querySelector(".deals-container").innerHTML = "";
dealSections.forEach(dealSec => {
    let cate = dealSec.previousElementSibling.querySelector(".tag-image-con").firstElementChild.innerHTML.trim().toLowerCase();
    products.forEach(e => {
        if (cate == e.category)
            createProductsDisplay(e, productDisplay, dealSec);
    })
})

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
    let onclickBtn = `<div class="onclick-btn btn">
                     Add To Cart 
                </div>`;
    productClickRight.insertAdjacentHTML("beforeend", onclickBtn);

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
    productClickRight.querySelector(".onclick-btn").remove();
    document.body.style.overflow = "auto";
})
