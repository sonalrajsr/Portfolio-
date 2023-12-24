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


// page 4 starts here
let proj_title = document.querySelectorAll(".proj-title");
let proj_disc = document.querySelectorAll(".proj-disc");
for (let i =0; i < proj_title.length ; i++ ){
    gsap.from(proj_title[i], {
        scrollTrigger : {
            trigger : proj_title[i],
            scroller : "body",
            markers : false,
            start : "top 80%"
        },
        y : 20,
        duration : 1,
        opacity : 0
    })
    gsap.from(proj_disc[i], {
        scrollTrigger : {
            trigger : proj_disc[i],
            scroller : "body",
            markers : false,
            start : "top 80%",
        },
        y : 30,
        duration : 1.2,
        ease: "back.inOut(1.7)",
        opacity : 0
    })
}
// page 5 begains here
let programming = 0;
let tools = 0;
let libraries = 0;
let theories = 0;

document.querySelector("#skill1").addEventListener("click", () => {
    programming = 1;
    tools = 0;
    libraries = 0;
    theories = 0;
    if (programming == 1){
        gsap.to(".programming",{
            opacity : 1,
            duration : 1
        })
        document.querySelector(".tools").style.opacity = "0";
        document.querySelector(".libraries").style.opacity = "0";
        document.querySelector(".theories").style.opacity = "0";
    }

})

document.querySelector("#skill2").addEventListener("click", () => {
    programming = 0;
    tools = 1;
    libraries = 0;
    theories = 0;
    if (tools === 1){
        gsap.to(".tools",{
            opacity : 1,
            duration : 1
        })
        document.querySelector(".programming").style.opacity = "0";
        document.querySelector(".libraries").style.opacity = "0";
        document.querySelector(".theories").style.opacity = "0";

    }
})
document.querySelector("#skill3").addEventListener("click", () => {
    programming = 0;
    tools = 0;
    libraries = 1;
    theories = 0;
    if (libraries === 1){
        gsap.to(".libraries",{
            opacity : 1,
            duration : 1
        })
        document.querySelector(".programming").style.opacity = "0";
        document.querySelector(".tools").style.opacity = "0";
        document.querySelector(".theories").style.opacity = "0";
    }
})
document.querySelector("#skill4").addEventListener("click", () => {
    programming = 0;
    tools = 0;
    libraries = 0;
    theories = 1;
    if (theories === 1){
        gsap.to(".theories",{
            opacity : 1,
            duration : 1
        })
        document.querySelector(".programming").style.opacity = "0";
        document.querySelector(".libraries").style.opacity = "0";
        document.querySelector(".tools").style.opacity = "0";
    }
})
