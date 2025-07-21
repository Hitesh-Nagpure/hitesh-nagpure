
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll


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



function updateScroll() {
  requestAnimationFrame(() => {
    locoScroll.update();
    ScrollTrigger.refresh();
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    updateScroll();
  }, 1000); 
});

window.addEventListener("resize", () => {
  updateScroll();
});
const resizeObserver = new ResizeObserver(() => {
  locoScroll.update();
  ScrollTrigger.refresh();
});

resizeObserver.observe(document.querySelector(".main"));

function fullInit() {
  // Always call update first
  locoScroll.update();

  // Then trigger ScrollTrigger refresh
  ScrollTrigger.refresh();
}

window.addEventListener("load", () => {
  // Delay longer to ensure layout is stable
  setTimeout(() => {
    fullInit();
  }, 800); // Try 800ms to 1200ms if needed
});
imagesLoaded(document.querySelector("[data-scroll-container]"), { background: true }, () => {
  setTimeout(() => {
    locoScroll.update();
    ScrollTrigger.refresh();
  }, 500); // adjust timing if needed
});



///////////////////////////////////////////////////////////////////////////////////////////////////////


var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
var video = document.querySelector(".page1 video");
var page2 = document.querySelector(".page2");
var page2Right = document.querySelector(".page2-right");
var page3 = document.querySelector(".page3");
var page4 = document.querySelector(".page4");


document.addEventListener("mousemove", function (dets) {

    gsap.to(cursor, {
        left: dets.x,
        top: dets.y,
    })

});

video.addEventListener("mouseenter", function () {
    cursor.innerHTML = '<h1 style="color:black; font-size:5px;margin-top:32%; margin-left:2.5px;">Video</h1>';

    gsap.to(cursor, {
        scale: 3.5,

        // duration:"1s",
    })

});

video.addEventListener("mouseleave", function () {
    cursor.innerHTML = '';


    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#a2d2ff",
        // duration:"1s",
    })
});


// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         scrub: 2,
//         // markers:true,
//         start: "top 27%",
//         end: "top 0%",

//     }
// });


gsap.to(".page1 video", {
    width: "90%",
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        scrub: 2,
        // markers:true,
        start: "top 27%",
        end: "top 0%",
    }
})


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        scrub: 2,
        // markers:true,
        start: "top -85%",
        end: "top -120%",

    }
})

if (window.innerWidth > 768)
{
    tl2.to(".main", {
        backgroundColor: "#FFF"
    })

}

gsap.to(".page3 h1", {
    transform: "translate(-160%)",
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".main",
        // markers:true,
        scrub: 2,
        pin: true,
        end: "top -100%",
    }


})

page4.addEventListener("mouseenter", function(){
    cursor.innerHTML = '<h1 style="color:black;text-align:center;margin-top:6px; font-size:3px;">Hover "Photos"</h1>'; 
    gsap.to(cursor, {
        scale:3.5,
    })
})
page4.addEventListener("mouseleave", function(){
    cursor.innerHTML = ''; 
    gsap.to(cursor, {
        scale:1,
    })
})


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        scrub: 2,
        // markers:true,
        start: "top -395%",
        end: "top -405%",

    }
});

if (window.innerWidth > 768){

    tl3.to(".main", {
        backgroundColor: "#000",
    });
}

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {

        var att = elem.getAttribute("data-image");
        gsap.to(cursor, {
            width: "300px",
            height: "250px",
            borderRadius: "10px",
            backgroundImage: `url(${att})`,
            duration: "1s",
            border:"2px solid #a2d2ff",
        })


    });
    elem.addEventListener("mouseleave", function () {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundImage = `none`;

    });

});


var a = document.querySelectorAll("#nav a");
var purple = document.querySelector("#purple");
var nav = document.querySelector("#nav");

a.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        gsap.to(purple, {
            display: "block",
            opacity: 1,

        });
    });
    nav.addEventListener("mouseleave", function () {
        gsap.to(purple, {
            display: "none",
            opacity: 0,

        });
    });
});



page3.addEventListener("mouseenter", function(){
    cursor.innerHTML = '<h1 style="color:black; font-size:5px;margin-top:32%; margin-left:2.5px;">Scroll</h1>';

    gsap.to(cursor, {
        scale: 3.5,

        // duration:"1s",
    })
})

page3.addEventListener("mouseleave", function () {
    cursor.innerHTML = '';

    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#a2d2ff",
        // duration:"1s",
    })
});




