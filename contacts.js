

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1
    });
});
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_ssx67nc", "template_j3s5i0f", params).then(console.log("Email Sent!"));
};


const hoverElements = document.querySelectorAll('.info-item, .fun-card, .submit-btn, .social-link, .surprise-button');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            backgroundColor: '#a2d2ff',
            duration: 0.3
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: '#a2d2ff',
            duration: 0.3
        });
    });
});

const typingText = document.querySelector('.typing-text');
const text = "Let's Connect";
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeText, 100);
    }
}

setTimeout(typeText, 1000);

gsap.registerPlugin(ScrollTrigger);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    gsap.fromTo(element,
        { opacity: 1, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #81C784)';
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'linear-gradient(45deg, #a2d2ff, #ffffff)';
            this.reset();
        }, 2000);
    }, 1000);

});


const navLinks = document.querySelectorAll('#nav a');
const purple = document.querySelector('#purple');
const nav = document.querySelector('#nav');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(purple, {
            display: 'block',
            opacity: 1,
            duration: 0.3
        });
    });
});

nav.addEventListener('mouseleave', () => {
    gsap.to(purple, {
        display: 'none',
        opacity: 0,
        duration: 0.3
    });
});



const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach(item => {
    item.addEventListener('click', () => {
        const text = item.querySelector('p').textContent;

        if (text.includes('@') || text.includes('+')) {
            const feedback = document.createElement('div');
            feedback.textContent = 'Copied!';
            feedback.style.cssText = `
                        position: absolute;
                        top: -30px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: #4CAF50;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 12px;
                        z-index: 1000;
                        pointer-events: none;
                    `;
            item.style.position = 'relative';
            item.appendChild(feedback);

            setTimeout(() => feedback.remove(), 2000);

            gsap.fromTo(item,
                { scale: 1 },
                { scale: 1.05, duration: 0.1, yoyo: true, repeat: 1 }
            );
        }
    });
});

const shapes = document.querySelectorAll('.shape');
shapes.forEach((shape, index) => {
    gsap.to(shape, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        rotation: 360,
        duration: 4 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

function handleResize() {
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    } else {
        cursor.style.display = 'block';
    }
}

window.addEventListener('resize', handleResize);
handleResize();


const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input.parentElement, {
            scale: 1.02,
            duration: 0.3
        });
    });

    input.addEventListener('blur', () => {
        gsap.to(input.parentElement, {
            scale: 1,
            duration: 0.3
        });
    });
});




