// custom cursor
document.addEventListener("mousemove", function(dets) {
    gsap.to(".custom-cursor",{
        left : dets.x,
        top : dets.y
    })
    
})

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

//  page 2 starts
gsap.from(".page-2-content h1", {
    scrollTrigger : {
        trigger : ".page-2-content h1",
        scroller : "body",
        markers : false,
        start : "top 70%"
    },
    y : -60,
    duration : 1.5,
    opacity : 0
})
gsap.from(".page-2-content h3", {
    scrollTrigger : {
        trigger : ".page-2-content h3",
        scroller : "body",
        markers : false,
        start : "top 70%"
    },
    y : 60,
    duration : 1.5,
    opacity : 0
})
gsap.from(".line", {
    scrollTrigger : {
        trigger : ".line",
        scroller : "body",
        markers : false,
        start : "top 70%"
    },
    y : 60,
    duration : 1.5,
    opacity : 0
})
gsap.from(".page-2-content-common img", {
    scrollTrigger : {
        trigger : ".line",
        scroller : "body",
        markers : false,
        start : "top 100%"
    },
    x : -100,
    duration : 1.5,
    opacity : 0
})


// Educational page starts here
let edu_text = document.querySelectorAll(".edu-text")
let text_hover = document.querySelectorAll(".text-hover")
gsap.from(".edu-cards", {
    scrollTrigger : {
        trigger : ".edu-cards",
        scroller : "body",
        markers : false,
        start : "top 80%"
    },
    ease: "bounce.out",
    duration : 1,
    scale : 0
})
edu_text[0].addEventListener("mouseover", () => {
    gsap.to("#text-hover-1", {
        opacity : 1,
        y : "-100%",
        duration : 1
    })
})
text_hover[0].addEventListener("mouseout", () => {
    gsap.to("#text-hover-1", {
        y : "100%",
        opacity : 0,
        duration : 1
    })
})
edu_text[1].addEventListener("mouseover", () => {
    gsap.to("#text-hover-2", {
        opacity : 1,
        y : "-100%",
        duration : 1
    })
})
text_hover[1].addEventListener("mouseout", () => {
    gsap.to("#text-hover-2", {
        y : "100%",
        opacity : 0,
        duration : 1
    })
})
edu_text[2].addEventListener("mouseover", () => {
    gsap.to("#text-hover-3", {
        opacity : 1,
        y : "-100%",
        duration : 1
    })
})
text_hover[2].addEventListener("mouseout", () => {
    gsap.to("#text-hover-3", {
        y : "100%",
        opacity : 0,
        duration : 1
    })
})
