/* ================= LOADER ================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 600);

});



/* ================= SECRET MESSAGE ================= */

const secretButton =
    document.getElementById("secretButton");

const secret =
    document.getElementById("secret");

const closeSecret =
    document.getElementById("closeSecret");


secretButton.addEventListener("click", function () {

    secret.classList.add("open");

    document.body.classList.add("lock");

});


closeSecret.addEventListener("click", function () {

    secret.classList.remove("open");

    document.body.classList.remove("lock");

});



/* ================= MUSIC ================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


musicButton.addEventListener("click", async function () {

    try {

        if (!musicPlaying) {

            await music.play();

            musicPlaying = true;

            musicButton.innerHTML =
                "♫ <span>Music On</span>";

        }

        else {

            music.pause();

            musicPlaying = false;

            musicButton.innerHTML =
                "♪ <span>Music</span>";

        }

    }

    catch (error) {

        alert(
            "Please add music.mp3 inside the assets folder."
        );

    }

});



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".story-text, .portrait-container, " +
        ".love-card, .timeline-item, " +
        ".cinematic-text, .gallery-card, " +
        ".us-container, .letter-container"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    observer.observe(element);

});



/* ================= CINEMATIC PARALLAX ================= */

const cinematicImage =
    document.querySelector(
        ".cinematic img"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!cinematicImage) return;


        const section =
            cinematicImage.parentElement;

        const rect =
            section.getBoundingClientRect();


        if (
            rect.bottom > 0 &&
            rect.top < window.innerHeight
        ) {

            const progress =
                (
                    window.innerHeight -
                    rect.top
                ) /
                (
                    window.innerHeight +
                    rect.height
                );


            cinematicImage.style.transform =
                `scale(1.08)
                 translateY(${(progress - 0.5) * 25}px)`;

        }

    },
    {
        passive: true
    }

);