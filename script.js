// -----------------------------
// WAIT FOR DOM
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // IMAGE LIST
  // -----------------------------

  const images = [
    "images/error.png",
    "images/exit.png",
    "images/frame.png",
    "images/image.png",
    "images/no.png",
    "images/yes.png",
    "images/puntatore.png",
    "images/robot.png"
  ];

  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  // -----------------------------
  // MOUSE IMAGE SYSTEM
  // -----------------------------

  let lastX = 0;
  let lastY = 0;
  let distanceThreshold = getRandomThreshold();

  let isHoveringMenu = false;
  const menu = document.querySelector(".menu");

  if (menu) {
    menu.addEventListener("mouseenter", () => {
      isHoveringMenu = true;
    });

    menu.addEventListener("mouseleave", () => {
      isHoveringMenu = false;
    });
  }

  document.addEventListener("mousemove", (e) => {
    if (isHoveringMenu) return;

    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > distanceThreshold) {
      createImage(e.clientX, e.clientY);

      lastX = e.clientX;
      lastY = e.clientY;

      distanceThreshold = getRandomThreshold();
    }
  });

  function createImage(x, y) {
    const size = 200 + Math.random() * 200;

    const el = document.createElement("div");
    el.classList.add("square");

    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.left = x + "px";
    el.style.top = y + "px";

    el.style.backgroundImage = `url('${getRandomImage()}')`;
    el.style.backgroundSize = "contain";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";

    // rotation + position
    el.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 20 - 10}deg)`;

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 5000);
  }

  function getRandomThreshold() {
    return 40 + Math.random() * 30;
  }

  // -----------------------------
  // FONT SWITCHING SYSTEM
  // -----------------------------

  const fonts = ["cecil", "pixel", "zamruds", "maskdownone", "faceless", "angerraven"];
  const nameElement = document.querySelector(".name");

  function changeFont() {
    if (!nameElement) return;

    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    nameElement.style.fontFamily = randomFont;

    // IMPORTANT: preserve centering + scale cleanly
    const scale = (randomFont === "pixel") ? 0.9 : 1;
    nameElement.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  // start immediately
  changeFont();

  // consistent timing (no drift feeling)
  setInterval(changeFont, 1000);

});





document.addEventListener("DOMContentLoaded", () => {

  const messages = [
    "you are safe here",
    "a captcha a day keeps the doctor away",
    "don't trust me",
    "everything is watching you",
    "click click click baby",
    "this site remembers you",
    "are you ignoring me?",
    "this is my house!",
    "don't go!",
    "can you bring me a snack?"
  ];

  const bubble = document.getElementById("bubble");

  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function showBubbleCycle() {

    // set message
    bubble.textContent = getRandomMessage();

    // show bubble
    bubble.classList.add("show");

    // hide
    setTimeout(() => {
      bubble.classList.remove("show");

      // restart cycle
      setTimeout(() => {
        showBubbleCycle();
      }, 2000);

    }, 2000);
  }

  setTimeout(() => {
    showBubbleCycle();
  }, 2000);

});