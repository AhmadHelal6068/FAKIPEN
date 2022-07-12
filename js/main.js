// -------------- Start Loader
window.addEventListener("load", () => {
    // document.querySelector(".loader").classList.add("active");
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"
    }, 2000);
})


// ---------------- Start Active List
let pars = document.querySelector(".bars");
let remove = document.querySelector(".list .remove");
let navList = document.querySelector(".nav");
pars.onclick = function(){
    navList.classList.add("active");
}
remove.onclick = function(){
    navList.classList.remove("active");
}

// ------------------------- Start Slider Img
let sliderBox = document.querySelectorAll(".slider-box");
let index = 0;

function next (){
    sliderBox[index].classList.remove("active");
    index = (index + 1) % sliderBox.length;
    sliderBox[index].classList.add("active");
}
function prev () {
    sliderBox[index].classList.remove("active");
    index = (index - 1 + sliderBox.length) % sliderBox.length;
    sliderBox[index].classList.add("active");
}

// ------------------------- Start Faq Accordion
let accordion = document.querySelectorAll(".accordion-container .accordion");
accordion.forEach(acc => {
    acc.onclick = () => {
        accordion.forEach(remove => {
            remove.classList.remove("active");
        })
        acc.classList.toggle("active");
    }
})