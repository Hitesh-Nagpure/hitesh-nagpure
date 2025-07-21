// Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    lerp: 0.03,
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Cursor
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        left: dets.x,
        top: dets.y,
        // duration: 0.7,
    })
});

// Project cards hover effects
var projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: "transparent",
            border: "2px solid #a2d2ff",
        });
        // cursor.innerHTML = '<div style="color:#a2d2ff; font-size:4px; margin-top:45%; margin-left:12px;">VIEW</div>';
    });

    card.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#a2d2ff",
            border: "none",
        });
        cursor.innerHTML = '';
    });
});

// Nav hover effect
var purple = document.querySelector("#purple");
var nav = document.querySelector("#nav");
var navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
        gsap.to(purple, {
            display: "block",
            opacity: 1,
        });
    });
});

nav.addEventListener("mouseleave", function () {
    gsap.to(purple, {
        display: "none",
        opacity: 0,
    });
});

// Hero animation
gsap.from(".works-hero h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

gsap.from(".works-hero p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.8,
});

// Projects animation
gsap.from(".project-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".projects-grid",
        scroller: ".main",
        start: "top 80%",
    }
});

// Counter animation
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

ScrollTrigger.create({
    trigger: ".stats-section",
    scroller: ".main",
    start: "top 80%",
    onEnter: () => {
        document.querySelectorAll('.stat-number').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
        });
    }
});

// Floating elements animation
gsap.to(".floating-icon", {
    y: -20,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.5
});
