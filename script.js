// ========================================
// ✨ AESTHETIC WEBSITE ANIMATION
// ========================================


// ========================================
// 1. SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {
    revealObserver.observe(element);
});


// ========================================
// 2. SKILL BAR ANIMATION
// ========================================

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                const width =
                    entry.target.dataset.width;

                entry.target.style.width = width;

                skillObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.5
    }
);

skillBars.forEach(function(bar) {
    skillObserver.observe(bar);
});


// ========================================
// 3. ACTIVE NAVIGATION
// ========================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ========================================
// 4. MOUSE GLOW
// ========================================

document.addEventListener(
    "mousemove",
    function(event) {

        document.documentElement.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );

    }
);


// ========================================
// 5. CARD 3D TILT
// ========================================

const cards = document.querySelectorAll(
    ".section-card, .artist-card, .project"
);

cards.forEach(function(card) {

    card.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "";

        }
    );

});


// ========================================
// 6. BUTTON RIPPLE
// ========================================

const buttons =
    document.querySelectorAll(".btn, .song");

buttons.forEach(function(button) {

    button.addEventListener(
        "click",
        function(event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                button.getBoundingClientRect();

            ripple.style.left =
                (event.clientX - rect.left) + "px";

            ripple.style.top =
                (event.clientY - rect.top) + "px";

            button.appendChild(ripple);

            setTimeout(function() {

                ripple.remove();

            }, 600);

        }
    );

});


// ========================================
// 7. TYPING EFFECT
// ========================================

const greeting =
    document.querySelector(".greeting");

if (greeting) {

    const originalText =
        greeting.textContent;

    greeting.textContent = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            greeting.textContent +=
                originalText.charAt(index);

            index++;

            setTimeout(typeText, 35);
        }

    }

    setTimeout(typeText, 500);
}


// ========================================
// 8. PAGE LOAD FADE
// ========================================

window.addEventListener(
    "load",
    function() {

        document.body.classList.add("loaded");

    }
);


// ========================================
// 9. BACK TO TOP
// ========================================

let backTop =
    document.querySelector(".back-top");

if (backTop) {

    window.addEventListener(
        "scroll",
        function() {

            if (window.scrollY > 500) {

                backTop.classList.add("show");

            } else {

                backTop.classList.remove("show");

            }

        }
    );

    backTop.addEventListener(
        "click",
        function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}
// ========================================
// 3D MOUSE PARALLAX
// ========================================

const scene3D =
    document.querySelector(".scene-3d");

if (scene3D) {

    document.addEventListener(
        "mousemove",
        function(event) {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);

            scene3D.style.transform =
                `rotateY(${x * 4}deg)
                 rotateX(${y * -4}deg)`;

        }
    );

}