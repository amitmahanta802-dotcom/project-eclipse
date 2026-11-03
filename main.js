// ==========================================
// PROJECT ECLIPSE V4
// MAIN APP
// MOBILE + DESKTOP SAFE VERSION
// ==========================================

const app = document.getElementById("app");

const PASSWORD = "0811";


// ==========================================
// APP START
// ==========================================

function startApp() {

    if (!app) {
        console.error("Project Eclipse: #app not found.");
        return;
    }

    renderPasswordPage();
}


// ==========================================
// PASSWORD PAGE
// ==========================================

function renderPasswordPage() {

    app.innerHTML = `

        <main class="password-page">

            <div class="password-glow"></div>

            <div class="password-card">

                <div class="password-icon">
                    🔐
                </div>

                <div class="password-eyebrow">
                    SOMTHING SPECIAL FOR YOU 😊
                </div>

                <h1 class="password-title">
                    Welcome
                </h1>

                <p class="password-description">
                    Enter the secret birthday code
                    Hint: DDMM format 😉
                </p>

                <div class="password-inputs">

                    <input
                        class="password-box"
                        type="password"
                        inputmode="numeric"
                        maxlength="1"
                        autocomplete="off"
                        aria-label="Password digit 1"
                    >

                    <input
                        class="password-box"
                        type="password"
                        inputmode="numeric"
                        maxlength="1"
                        autocomplete="off"
                        aria-label="Password digit 2"
                    >

                    <input
                        class="password-box"
                        type="password"
                        inputmode="numeric"
                        maxlength="1"
                        autocomplete="off"
                        aria-label="Password digit 3"
                    >

                    <input
                        class="password-box"
                        type="password"
                        inputmode="numeric"
                        maxlength="1"
                        autocomplete="off"
                        aria-label="Password digit 4"
                    >

                </div>

                <p
                    class="password-error"
                    id="passwordError"
                    aria-live="polite"
                ></p>

                <button
                    class="password-button"
                    id="passwordButton"
                    type="button"
                >
                    A Little Surprise Awaits You 🎀
                </button>

                <p class="password-hint">
                    ✦ Enter the 4-digit secret code ✦
                </p>

            </div>

        </main>

    `;

    setupPassword();
}


// ==========================================
// PASSWORD LOGIC
// ==========================================

function setupPassword() {

    const inputs =
        [...document.querySelectorAll(".password-box")];

    const button =
        document.getElementById("passwordButton");

    const error =
        document.getElementById("passwordError");

    if (!inputs.length || !button || !error) {
        return;
    }

    function getPassword() {

        return inputs
            .map(input => input.value)
            .join("");

    }

    function clearError() {
        error.textContent = "";
    }

    function unlock() {

        if (button.disabled) {
            return;
        }

        const enteredPassword =
            getPassword();

        if (enteredPassword !== PASSWORD) {

            error.textContent =
                "Incorrect code. Please try again.";

            inputs.forEach(input => {
                input.classList.add("wrong");
            });

            setTimeout(() => {

                inputs.forEach(input => {
                    input.classList.remove("wrong");
                });

            }, 450);

            return;
        }

        inputs.forEach(input => {
            input.classList.add("correct");
        });

        error.textContent = "";

        button.disabled = true;

        button.textContent = "Unlocked ✓";

        setTimeout(() => {

            renderGalaxyIntro();

        }, 650);
    }

    inputs.forEach((input, index) => {

        input.addEventListener("input", () => {

            input.value =
                input.value
                    .replace(/\D/g, "")
                    .slice(0, 1);

            clearError();

            if (
                input.value &&
                index < inputs.length - 1
            ) {

                inputs[index + 1].focus();

            }

            if (
                getPassword().length ===
                inputs.length
            ) {

                unlock();

            }

        });

        input.addEventListener("keydown", event => {

            if (
                event.key === "Backspace" &&
                !input.value &&
                index > 0
            ) {

                event.preventDefault();

                inputs[index - 1].focus();

            }

            if (event.key === "ArrowLeft" && index > 0) {
                inputs[index - 1].focus();
            }

            if (
                event.key === "ArrowRight" &&
                index < inputs.length - 1
            ) {
                inputs[index + 1].focus();
            }

            if (event.key === "Enter") {

                event.preventDefault();

                unlock();

            }

        });

        input.addEventListener("focus", () => {
            input.select();
        });

    });

    button.addEventListener(
        "click",
        unlock
    );

    inputs[0].focus();
}


// ==========================================
// GALAXY INTRO
// ==========================================

function renderGalaxyIntro() {

    app.innerHTML = `

        <main
            class="galaxy-page"
            id="galaxyPage"
        >

            <div class="galaxy-stars"></div>

            <div class="galaxy-particles"></div>

            <div class="galaxy-core"></div>

            <div class="galaxy-orbit orbit-one"></div>

            <div class="galaxy-orbit orbit-two"></div>

            <section class="galaxy-content">

                <p class="galaxy-label">
                    A DAY MADE EXTRA SPECIAL 💗
                </p>

                <h1 class="galaxy-title">
                    Today Is All About You 🎀
                </h1>

                <p class="galaxy-text">
                    A little effort from my side to
                     make your special day even
                      more beautiful. 🦋
                </p>

                <button
                    class="galaxy-button"
                    id="galaxyContinue"
                    type="button"
                >
                    Begin The Countdown 🥳
                </button>

            </section>

        </main>

    `;

    const page =
        document.getElementById(
            "galaxyPage"
        );

    if (!page) {
        return;
    }

    const particles =
        page.querySelector(
            ".galaxy-particles"
        );

    const continueButton =
        document.getElementById(
            "galaxyContinue"
        );


    // ======================================
    // FLOATING PARTICLES
    // ======================================

    if (particles) {

        const particleCount =
            window.innerWidth <= 480
                ? 28
                : 45;

        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.className =
                "galaxy-particle";

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.top =
                `${Math.random() * 100}%`;

            particle.style.animationDelay =
                `${Math.random() * 5}s`;

            particle.style.animationDuration =
                `${4 + Math.random() * 6}s`;

            const size =
                2 + Math.random() * 3;

            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particles.appendChild(
                particle
            );

        }

    }


    // ======================================
    // PARALLAX
    // ======================================

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    const supportsFinePointer =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;

    function updateTarget(x, y) {

        targetX =
            (x / window.innerWidth - 0.5) * 2;

        targetY =
            (y / window.innerHeight - 0.5) * 2;

    }

    if (supportsFinePointer) {

        page.addEventListener(
            "mousemove",
            event => {

                updateTarget(
                    event.clientX,
                    event.clientY
                );

            }
        );

    } else {

        page.addEventListener(
            "touchmove",
            event => {

                if (!event.touches.length) {
                    return;
                }

                updateTarget(
                    event.touches[0].clientX,
                    event.touches[0].clientY
                );

            },
            {
                passive: true
            }
        );

    }


    let animationFrame = null;

    function animateParallax() {

        currentX +=
            (targetX - currentX) * 0.04;

        currentY +=
            (targetY - currentY) * 0.04;

        page.style.setProperty(
            "--parallax-x",
            `${currentX * 12}px`
        );

        page.style.setProperty(
            "--parallax-y",
            `${currentY * 12}px`
        );

        animationFrame =
            requestAnimationFrame(
                animateParallax
            );

    }

    animateParallax();


    // ======================================
    // CONTINUE
    // ======================================

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                if (animationFrame) {
                    cancelAnimationFrame(
                        animationFrame
                    );
                }

                page.classList.add(
                    "galaxy-exit"
                );

                setTimeout(() => {

                    renderCountdown();

                }, 900);

            },
            {
                once: true
            }
        );

    }

}


// ==========================================
// CINEMATIC COUNTDOWN
// ==========================================

function renderCountdown() {

    app.innerHTML = `

        <main class="countdown-page">

            <div class="countdown-glow"></div>

            <section class="countdown-content">

                <p class="countdown-label">
                    SOMETHING SPECIAL IS COMING
                </p>

                <div
                    class="countdown-number"
                    id="countdownNumber"
                >
                    3
                </div>

                <p
                    class="countdown-message"
                    id="countdownMessage"
                >
                    Get ready...
                </p>

            </section>

        </main>

    `;

    const number =
        document.getElementById(
            "countdownNumber"
        );

    const message =
        document.getElementById(
            "countdownMessage"
        );

    if (!number || !message) {
        return;
    }

    const sequence = [

        {
            number: "3",
            message:
                "Something beautiful is about to begin..."
        },

        {
            number: "2",
            message:
                "Just a little closer..."
        },

        {
            number: "1",
            message:
                "One unforgettable moment..."
        },

        {
            number: "✨",
            message:
                "Here we go..."
        }

    ];

    let index = 0;

    function playNext() {

        const item =
            sequence[index];

        if (!item) {
            return;
        }

        number.classList.remove(
            "countdown-pop"
        );

        void number.offsetWidth;

        number.textContent =
            item.number;

        message.textContent =
            item.message;

        number.classList.add(
            "countdown-pop"
        );

        index++;

        if (
            index <
            sequence.length
        ) {

            setTimeout(
                playNext,
                1200
            );

        } else {

            setTimeout(() => {

                renderBirthdayReveal();

            }, 1500);

        }

    }

    playNext();
}


// ==========================================
// BIRTHDAY REVEAL
// ==========================================

function renderBirthdayReveal() {

    app.innerHTML = `

        <main class="birthday-page">

            <div class="birthday-glow"></div>

            <div class="birthday-sparkles"></div>

            <section class="birthday-content">

                <p class="birthday-label">
                    TODAY IS YOUR DAY
                </p>

                <div class="birthday-crown">
                    ✦
                </div>

                <h1 class="birthday-title">
                    Happy Birthday
                </h1>

                <p class="birthday-name">
                    MILI ❤️
                </p>

                <p class="birthday-message">
                    Some people are simply too special
                     to be celebrated with just a few words.
                      Today, you're that person. 😊🫣
                    <br><br>
                    Happy Birthday, Mili. ❤️
                </p>

                <button
                    class="birthday-button"
                    id="birthdayContinue"
                    type="button"
                >
                    See What's Next 🦋
                </button>

            </section>

        </main>

    `;

    createBirthdaySparkles();

    const button =
        document.getElementById(
            "birthdayContinue"
        );

    if (button) {

        button.addEventListener(
            "click",
            () => {

                renderGallery();

            },
            {
                once: true
            }
        );

    }

}


// ==========================================
// BIRTHDAY SPARKLES
// ==========================================

function createBirthdaySparkles() {

    const container =
        document.querySelector(
            ".birthday-sparkles"
        );

    if (!container) {
        return;
    }

    const sparkleCount =
        window.innerWidth <= 480
            ? 24
            : 35;

    for (
        let i = 0;
        i < sparkleCount;
        i++
    ) {

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "birthday-sparkle";

        sparkle.style.left =
            `${Math.random() * 100}%`;

        sparkle.style.top =
            `${Math.random() * 100}%`;

        sparkle.style.animationDelay =
            `${Math.random() * 4}s`;

        sparkle.style.animationDuration =
            `${3 + Math.random() * 4}s`;

        container.appendChild(
            sparkle
        );

    }

}


// ==========================================
// MEMORY GALLERY
// ==========================================

function renderGallery() {

    const photos = [

        "https://amitmahanta802-dotcom.github.io/project-eclipse/photo1.jpg",

        "images/gallery/photo2.jpg",

        "images/gallery/photo3.jpg",

        "images/gallery/photo4.jpg",

        "images/gallery/photo5.jpg",

        "images/gallery/photo6.jpg"

    ];

    app.innerHTML = `

        <main class="gallery-page">

            <section class="gallery-content">

                <p class="gallery-label">
                    IN THE SPOTLIGHT ✨
                </p>

                <h1 class="gallery-title">
                    The Birthday Girl 🎀
                </h1>

                <p class="gallery-description">
                    Today, all the attention belongs
                     to one beautiful person.
                      And that's you, Mili. 🫣🫣
                </p>

                <div class="gallery-grid">

                    ${photos.map(
                        (photo, index) => `

                        <button
                            class="gallery-item"
                            type="button"
                            data-index="${index}"
                            aria-label="Open memory ${index + 1}"
                        >

                            <img
                                src="${photo}"
                                alt="Memory ${index + 1}"
                                loading="lazy"
                                decoding="async"
                                onerror="
                                    this.parentElement
                                    .classList
                                    .add('image-missing')
                                "
                            >

                            <span class="gallery-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                        </button>

                    `
                    ).join("")}

                </div>

                <button
                    class="gallery-button"
                    id="galleryContinue"
                    type="button"
                >
                    Continue
                </button>

            </section>

        </main>

    `;


    // ======================================
    // GALLERY ITEMS
    // ======================================

    const items =
        [
            ...document.querySelectorAll(
                ".gallery-item"
            )
        ];

    items.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                item.classList.toggle(
                    "selected"
                );

            }
        );

    });


    // ======================================
    // CONTINUE
    // ======================================

    const continueButton =
        document.getElementById(
            "galleryContinue"
        );

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                renderLoveLetter();

            },
            {
                once: true
            }
        );

    }

}


// ==========================================
// LOVE LETTER
// ==========================================

function renderLoveLetter() {

    app.innerHTML = `

        <main class="letter-page">

            <div class="letter-glow"></div>

            <section class="letter-card">

                <div class="letter-icon">
                    💌
                </div>

                <p class="letter-label">
                    A LITTLE MESSAGE
                </p>

                <h1 class="letter-title">
                    For You
                </h1>

                <div class="letter-divider">
                    ✦
                </div>

                <div class="letter-body">

                    <p>
                        Happy Birthday, Mili ❤️
                    </p>

                    <p>
                        So many people come into our lives,
                         but only a few manage to create a place of their own.
                          And you're definitely one of those people for me.😊🫣
                           No matter how many people I meet along the way,
                            nobody could ever take the place you hold in my life.
                         You're genuinely one of the most special people to me! 🫶❤️
                    </p>

                    <p>
                        I never know what to expect when we start talking 😂
                         Sometimes it's all jokes and teasing,
                          sometimes the conversation takes a serious turn,
                         and sometimes you surprise me with your caring side. 😁
                    </p>

                    <p>
                         It's funny how even our most random chats have their own charm. ❤️🫶
                    </p>

                    <p>
                       Enjoy your day, birthday girl! And yes, 
                       don't you dare forget to treat me to a birthday party! 😂🎂🎀
                    </p>

                    <p class="letter-special">
                        Happy Birthday once again,
                        Mili. ❤️
                        <br>
                        May this year be your most
                        beautiful one yet. ✨
                    </p>

                </div>

                <button
                    class="letter-button"
                    id="letterContinue"
                    type="button"
                >
                    Time For Your Birthday Wish 🎂
                </button>

            </section>

        </main>

    `;

    const button =
        document.getElementById(
            "letterContinue"
        );

    if (button) {

        button.addEventListener(
            "click",
            () => {

                renderCake();

            },
            {
                once: true
            }
        );

    }

}


// ==========================================
// CAKE ANIMATION
// ==========================================

function renderCake() {

    app.innerHTML = `

        <main class="cake-page">

            <div
                class="cake-background-glow"
            ></div>

            <div
                class="cake-confetti"
                id="cakeConfetti"
            ></div>

            <section class="cake-content">

                <p class="cake-label">
                    MAKE A WISH
                </p>

                <h1 class="cake-title">
                    One Little Wish
                </h1>

                <p class="cake-description">
                    Close your eyes, make a wish,
                    and tap the candle. ✨
                </p>

                <div class="cake-scene">

                    <button
                        class="candle-button"
                        id="candleButton"
                        type="button"
                        aria-label="Tap the birthday candle"
                    >

                        <span class="flame"></span>

                        <span class="candle">

                            <span
                                class="candle-stripe"
                            ></span>

                        </span>

                    </button>

                    <div class="cake">

                        <div class="cake-top">

                            <span
                                class="icing-drip drip-one"
                            ></span>

                            <span
                                class="icing-drip drip-two"
                            ></span>

                            <span
                                class="icing-drip drip-three"
                            ></span>

                        </div>

                        <div
                            class="
                                cake-layer
                                cake-layer-one
                            "
                        ></div>

                        <div
                            class="
                                cake-layer
                                cake-layer-two
                            "
                        ></div>

                        <div
                            class="
                                cake-layer
                                cake-layer-three
                            "
                        ></div>

                        <div class="cake-plate"></div>

                    </div>

                </div>

                <p
                    class="cake-wish-message"
                    id="cakeWishMessage"
                >
                    Tap the flame 🕯️
                </p>

                <button
                    class="cake-continue"
                    id="cakeContinue"
                    type="button"
                    hidden
                >
                    Continue
                </button>

            </section>

        </main>

    `;


    const candleButton =
        document.getElementById(
            "candleButton"
        );

    const message =
        document.getElementById(
            "cakeWishMessage"
        );

    const continueButton =
        document.getElementById(
            "cakeContinue"
        );

    if (
        !candleButton ||
        !message ||
        !continueButton
    ) {
        return;
    }

    let wishMade = false;


    candleButton.addEventListener(
        "click",
        () => {

            if (wishMade) {
                return;
            }

            wishMade = true;

            candleButton.classList.add(
                "candle-out"
            );

            message.textContent =
                "May your wish come true ✨";

            message.style.animation =
                "none";

            createCakeConfetti();

            setTimeout(() => {

                continueButton.hidden =
                    false;

                continueButton.classList.add(
                    "cake-continue-show"
                );

                continueButton.focus();

            }, 700);

        },
        {
            once: false
        }
    );


    continueButton.addEventListener(
        "click",
        () => {

            if (!wishMade) {
                return;
            }

            renderFireworks();

        },
        {
            once: true
        }
    );

}


// ==========================================
// CAKE CONFETTI
// ==========================================

function createCakeConfetti() {

    const container =
        document.getElementById(
            "cakeConfetti"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const confettiCount =
        window.innerWidth <= 480
            ? 28
            : 45;

    for (
        let i = 0;
        i < confettiCount;
        i++
    ) {

        const piece =
            document.createElement("span");

        piece.className =
            "cake-confetti-piece";

        piece.style.left =
            `${Math.random() * 100}%`;

        piece.style.animationDelay =
            `${Math.random() * 0.7}s`;

        piece.style.animationDuration =
            `${2.5 + Math.random() * 2}s`;

        piece.style.setProperty(
            "--confetti-rotate",
            `${Math.random() * 720 - 360}deg`
        );

        container.appendChild(
            piece
        );

    }

    setTimeout(() => {

        if (container) {
            container.innerHTML = "";
        }

    }, 5000);

}


// ==========================================
// FIREWORKS
// ==========================================

function renderFireworks() {

    app.innerHTML = `

        <main class="fireworks-page">

            <div class="fireworks-sky"></div>

            <div
                class="fireworks-container"
                id="fireworksContainer"
            ></div>

            <section class="fireworks-content">

                <p class="fireworks-label">
                    ONE LAST SURPRISE
                </p>

                <h1 class="fireworks-title">
                    Make A Wish
                </h1>

                <p class="fireworks-message">
                    May your brightest dreams
                    become beautiful memories.
                </p>

                <button
                    class="fireworks-button"
                    id="fireworksContinue"
                    type="button"
                >
                    Continue
                </button>

            </section>

        </main>

    `;


    const container =
        document.getElementById(
            "fireworksContainer"
        );

    const continueButton =
        document.getElementById(
            "fireworksContinue"
        );

    if (!container || !continueButton) {
        return;
    }


    function createFirework() {

        if (!document.body.contains(container)) {
            return;
        }

        const firework =
            document.createElement("div");

        firework.className =
            "firework";

        firework.style.left =
            `${15 + Math.random() * 70}%`;

        firework.style.top =
            `${10 + Math.random() * 45}%`;

        const hue =
            Math.random() * 50 + 15;

        firework.style.setProperty(
            "--firework-hue",
            `${hue}`
        );

        container.appendChild(
            firework
        );

        setTimeout(() => {

            firework.remove();

        }, 1800);

    }


    createFirework();

    const intervalDelay =
        window.innerWidth <= 480
            ? 1200
            : 900;

    const interval =
        setInterval(
            createFirework,
            intervalDelay
        );


    continueButton.addEventListener(
        "click",
        () => {

            clearInterval(interval);

            renderEnding();

        },
        {
            once: true
        }
    );

}


// ==========================================
// FINAL ENDING SCENE
// ==========================================

function renderEnding() {

    app.innerHTML = `

        <main class="ending-page">

            <div class="ending-glow"></div>

            <div class="ending-stars"></div>

            <section class="ending-content">

                <div class="ending-heart">
                    ❤️
                </div>

                <p class="ending-label">
                    THE END OF THIS LITTLE JOURNEY
                </p>

                <h1 class="ending-title">
                    Keep Smiling, Mili ❤️
                </h1>

                <p class="ending-message">
                    And just like that, our little
                    journey comes to an end.
                    <br><br>
                    But I hope the smile this little
                    surprise brought to you stays
                    a little longer.
                </p>

                <p class="ending-special">
                    May your life always be filled
                    with beautiful moments,
                    happiness and love. ✨
                </p>

                <div class="ending-divider">
                    ✦
                </div>

                <p class="ending-signature">
                    Happy Birthday, Mili ❤️
                    <br>
                    08 • 11 • 2026
                </p>

                <button
                    class="ending-replay"
                    id="endingReplay"
                    type="button"
                >
                    Experience Again
                </button>

            </section>

        </main>

    `;


    const replayButton =
        document.getElementById(
            "endingReplay"
        );

    if (replayButton) {

        replayButton.addEventListener(
            "click",
            () => {

                renderPasswordPage();

            },
            {
                once: true
            }
        );

    }

}


// ==========================================
// START
// ==========================================

startApp();
