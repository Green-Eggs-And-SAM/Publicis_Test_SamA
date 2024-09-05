const buildingImg = document.querySelector(".building");
const logo = document.querySelector(".logo");
const redBG = document.querySelector(".red-banner");
const txt2A = document.querySelector(".txt2A");
const txt2B = document.querySelectorAll(".txt2B");
const frame2 = document.querySelector(".frame-2");

window.addEventListener("load", reveal);

function reveal() {
    //create timeline object
    const tl = gsap.timeline({
        default: {
            ease: "power3",
        }, // <- these commas are added by "prettier extension"
    });

    //====== Frame 1 ======
    tl.from(logo, { scale: 0.3, autoAlpha: 0, duration: 1 }) //fade in logo
        .to(logo, { autoAlpha: 0, duration: 0.6, delay: 1 }) // fade out logo
        .to(redBG, { y: 140, duration: 0.8 }, "-=0.25"); //slide redBG down. start this animation 0.25 seconds early

    //====== Frame 2a ======
    tl.from(
        buildingImg,
        { scale: 2.3, y: -300, x: -50, duration: 2.5 },
        "-=1.5"
    ) //start from the left //slide redBG down. start this animation 1 second early
        // tl.from(txt2A, { x: -70, duration: 0.5 })
        .to(txt2A, { x: 0, autoAlpha: 1, duration: 1 }, "-=1") // center and reveal text (from 70px left)
        .to(redBG, { y: 80, duration: 0.5, delay: 0.25 }) //slide redBG up. start this animation 3.25 seconds early
        .to(frame2, { y: 140, duration: 0.5 }, "-=0.5");

    //====== Frame 2b ======
    tl.to(txt2B, { autoAlpha: 1, duration: 1 });
}
