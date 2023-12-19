// page 1 js
let text_page1 = document.querySelector(".page-1-content .text");
let image_page1 = document.querySelector('.page-1-content img');

gsap.from(text_page1,{
    delay : 0.5,
    y : -200,
    duration : 1.7, 
    opacity : 0
})
gsap.from(image_page1, {
    delay : 0.5,
    x : -150,
    duration : 1.5
})


// Educational page starts here
let edu_text = document.querySelectorAll(".edu-text")
let text_hover = document.querySelectorAll(".text-hover")

edu_text[0].addEventListener("mouseenter", () => {
    gsap.to("#text-hover-1", {
        opacity : 1,
        y : "-100%",
        duration : 1.5
    })
})
text_hover[0].addEventListener("mouseout", () => {
    gsap.to("#text-hover-1", {
        y : "100%",
        opacity : 0,
        duration : 1.5
    })
})
edu_text[1].addEventListener("mouseenter", () => {
    gsap.to("#text-hover-2", {
        opacity : 1,
        y : "-100%",
        duration : 1.5
    })
})
text_hover[1].addEventListener("mouseout", () => {
    gsap.to("#text-hover-2", {
        y : "100%",
        opacity : 0,
        duration : 1.5
    })
})
edu_text[2].addEventListener("mouseenter", () => {
    gsap.to("#text-hover-3", {
        opacity : 1,
        y : "-100%",
        duration : 1.5
    })
})
text_hover[2].addEventListener("mouseout", () => {
    gsap.to("#text-hover-3", {
        y : "100%",
        opacity : 0,
        duration : 1.5
    })
})
