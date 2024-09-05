const buildingImg = document.querySelector(".building");
const logo = document.querySelector(".logo");

window.addEventListener("load", reveal);

function reveal() {
    const tl = gsap.timeline({
        default: {
            ease: "power2",
        }, // <- these commas are added by "prettier extension"
    });

    //Frame 1
    tl.from(logo, { scale: 0.3, autoAlpha: 0, duration: 1 }).to(logo, {
        autoAlpha: 0,
        duration: 1,
        delay: 1.5,
    });

    //Frame 2a

    // timeline
    //     .from(title, { autoAlpha: 0, y: -50, delay: 0.2 })
    //     .to(verticalLine, { height: 200 }, "-=0.2")
    //     .from(grapesLogo, { autoAlpha: 0, y: -50 }, "-=0.2")
    //     .from(homeBtn, { autoAlpha: 0, y: -50 }, "-=0.2")
    //     .from(
    //         navLinks,
    //         { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
    //         "-=0.2"
    //     )
    //     .from(imgsNav, { autoAlpha: 0, y: -50 });
}
