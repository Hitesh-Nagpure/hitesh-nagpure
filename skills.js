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

var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        left: dets.x,
        top: dets.y,
    })
});



var skillCards = document.querySelectorAll(".skill-card");
var interactiveSkill = document.querySelector(".interactive-skill");
var skillInfo = document.getElementById("skill-info");

const skillDescriptions = {
    python: "Used for machine learning, web development, and automation scripts",
    javascript: "Frontend development, Node.js backend, and interactive web applications",
    cpp: "System programming, competitive programming, and embedded systems",
    java: "Object-oriented programming and Android development basics",
    html: "Semantic markup, accessibility, and modern web standards",
    css: "Advanced styling, animations, flexbox, and grid layouts",
    react: "Component-based UI development and state management",
    nodejs: "Server-side JavaScript and API development",
    ml: "Supervised learning, neural networks, and data analysis",
    robotics: "Arduino programming, sensor integration, and mechanical design",
    iot: "ESP32/ESP8266, MQTT, and cloud connectivity",
    ai: "Natural language processing and computer vision basics"
};

skillCards.forEach(function (card) {
    card.addEventListener("mouseenter", function (dets) {
        gsap.to(cursor, {
            scale: 3,
            backgroundColor: "transparent",
            border: "2px solid #a2d2ff",
            color: "black",
        });
        // cursor.innerHTML = '<div style="color:#000; font-size:4px; margin-top:40%; margin-left:10px;">SKILL</div>';

        const skillType = card.getAttribute('data-skill');
        if (skillType && skillDescriptions[skillType]) {
            skillInfo.textContent = skillDescriptions[skillType];

            interactiveSkill.style.mixBlendMode = "difference";
            interactiveSkill.classList.add('active');
            gsap.to(interactiveSkill,{
                left:dets.x - 100,
                top:dets.y + 200
            })
        }
        gsap.to(card, {
            scale: 1.1,
            duration: 0.5,
            translateY: -10,
            rotate: "5deg",
        })
    });

    card.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#a2d2ff",
            border: "none",
        });
        cursor.innerHTML = '';
        interactiveSkill.classList.remove('active');
        gsap.to(card, {
            scale: 1,
            duration: 0.5,
            translateY: 0,
            rotate: "0deg",

        })
    });
});

var purple = document.querySelector("#purple");
var nav = document.querySelector("#nav");
var navLinks = document.querySelectorAll("#nav a");
var certCards = document.querySelectorAll(".cert-card");

certCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        gsap.to(card, {
            duration: 0.5,
            scale: 1.1,
        })

    });
    card.addEventListener("mouseleave", function () {
        gsap.to(card, {
            duration: 0.5,
            scale: 1,
        })

    });


});

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

gsap.from(".skills-hero h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

gsap.from(".skills-hero p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.8,
});

gsap.from(".skill-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".tech-stack",
        scroller: ".main",
        start: "top 80%",
    }
});

ScrollTrigger.create({
    trigger: ".tech-stack",
    scroller: ".main",
    start: "top 60%",
    onEnter: () => {
        document.querySelectorAll('.skill-progress-bar').forEach(bar => {
            const width = bar.getAttribute('data-width');
            gsap.to(bar, {
                width: width,
                duration: 1.5,
                ease: "power2.out",
            });
        });
    }
});

gsap.from(".timeline-item", {
    x: (index) => index % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".experience-section",
        scroller: ".main",
        start: "top 65%",
    }
});

gsap.to(".timeline", {
    transform: "translateY(-75%)",
    // smooth:0.1,

    scrollTrigger:{
        trigger:".experience-section",
        scroller:".main",
        scrub:true,
        // markers: true,
        pin:true,
    }
})

gsap.from(".cert-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".cert-grid",
        scroller: ".main",
        start: "top 80%",
    }
});

ScrollTrigger.create({
    trigger: ".tech-stack",
    scroller: ".main",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(".main", { backgroundColor: "#fff" }),
    onLeaveBack: () => gsap.to(".main", { backgroundColor: "#000" })
});

ScrollTrigger.create({
    trigger: ".experience-section",
    scroller: ".main",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => gsap.to(".main", { backgroundColor: "#000" }),
    onLeave: () => gsap.to(".main", { backgroundColor: "#fff" })
});

const createFloatingIcon = (icon, delay) => {
    const div = document.createElement('div');
    div.innerHTML = icon;
    div.style.cssText = `
                position: absolute;
                font-size: 2rem;
                opacity: 0.1;
                pointer-events: none;
                color: #a2d2ff;
            `;
    document.querySelector('.skills-hero').appendChild(div);

    gsap.set(div, {
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
    });

    gsap.to(div, {
        y: -100,
        duration: 15,
        delay: delay,
        ease: "none",
        rotation: 360,
        repeat: -1,
        onComplete: () => div.remove()
    });
};


setInterval(() => {
    const icons = ['💻', '🚀', '⚡', '🎯', '💡', '🔧'];
    createFloatingIcon(icons[Math.floor(Math.random() * icons.length)], 0);
}, 3000);
