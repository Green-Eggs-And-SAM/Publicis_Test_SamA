//get background images
const buildingImg = document.querySelector(".building");
const officeImg = document.querySelector(".office");
const redBG = document.querySelector(".red-banner");
//get logos
const logo = document.querySelector(".logo");
const title = document.querySelector(".title");

//get text
const txt2A = document.querySelector(".txt2A"); //"PUBLICIS TORONTO IS HIRING"
const txt2B = document.querySelectorAll(".txt2B"); //["JUNIOR INTERACTIVE" + "DEVELOPERS"]
const txt3 = document.querySelectorAll(".lead-the-change"); //["LEAD" + "THE" + "CHANGE"]
const frame2 = document.querySelector(".frame-2"); //txt2A and txt2B (frame2A and frame2B)
const btnApply = document.querySelector();

window.addEventListener("load", playAnimation);

function playAnimation() {
    //create timeline object
    const fadeTime = 0.4;
    const slideTime = 0.55;
    const pauseTime = 1.2;
    const beat = pauseTime / 2.0;
    const tl = gsap.timeline({
        default: {
            ease: "power2.out", //a nice easing effect for all animations.
        },
    });
    tl.from;

    //====== Frame 1 ======
    tl.from(logo, { scale: 0.1, autoAlpha: 0, duration: 1 }) //fade in logo
        .to(logo, { autoAlpha: 0, duration: fadeTime, delay: pauseTime }) // pause. fade out logo
        .to(redBG, { y: 140, duration: slideTime }, "-=0.25"); //slide redBG down. start this animation 0.25 seconds early

    //====== Frame 2a ======
    tl.from(buildingImg, { scale: 2.3, y: -300, x: -50, duration: 3.5 }, "-=1") //Scale and pan building
        .to(txt2A, { x: 0, autoAlpha: 1, duration: fadeTime }, "-=2.3") // center and reveal "Publicis is Hiring" (from 70px left)
        .to(redBG, { y: 80, duration: slideTime, delay: 0.25 }) //slide redBG up.
        .to(frame2, { y: 140, duration: slideTime }, "-=0.55"); // slide "Publicis is Hiring" up

    //====== Frame 2b ======
    tl.to(txt2B, { autoAlpha: 1, duration: fadeTime }) // "JUNIOR INTERACTIVE DEVELOPERS" Fade in
        .to(txt2A, { autoAlpha: 0, duration: fadeTime, delay: pauseTime }) //pause. "JUNIOR INTERACTIVE DEVELOPERS" Fade out.
        .to(txt2B, { autoAlpha: 0, duration: fadeTime }, "-=0.4") //fade out.
        .to(redBG, { y: -70, duration: slideTime }) //slide red up. fills screen. time has to m
        .to(buildingImg, { autoAlpha: 0, duration: 0 }) //hide building when covered.
        .to(officeImg, { autoAlpha: 1, duration: 0 }); //reveal office when covered.
    //====== Frame 3 ======
    tl.to(
        txt3,
        { autoAlpha: 1, scale: 0.85, duration: 0.4, stagger: 0.3 },
        "-=0.1"
    ) //Fade in "Lead the change". each word fades in at a different time with stagger.
        .to(txt3, { autoAlpha: 0, duration: 0.4, delay: pauseTime }); //Fade out "Lead the change"

    //====== Frame 4 ======
    tl.to(redBG, { y: -310, duration: slideTime }) //slide red up
        .to(title, { autoAlpha: 1, duration: fadeTime })
        .from(officeImg, { x: -100, duration: 5 }, "-=0.8"); // fade in title
}
