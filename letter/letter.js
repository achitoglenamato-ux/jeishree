/* ==========================================
   Secret Letter — envelope reveal + wishes
========================================== */

const envelope = document.getElementById("envelope");
const envelopeWrap = document.getElementById("envelopeWrap");
const letterContent = document.getElementById("letterContent");

const verses = [
    { text: "May your art always come from the heart, and never run out of ideas.", ref: "For your creativity" },
    { text: "May you have El's courage: brave enough to face anything, upside down or not.", ref: "For your strength" },
    { text: "May this year be as bright and lovely as the color pink itself.", ref: "For your joy" },
    { text: "May every hill you run up lead somewhere beautiful.", ref: "For your journey" },
    { text: "May you always see the world clearly — through your specs and your heart.", ref: "For your vision" }
];

envelope.addEventListener("click", () => {

    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    setTimeout(() => {
        envelopeWrap.classList.add("hidden");
        letterContent.classList.remove("hidden");
        letterContent.classList.add("fade-in");
        renderVerses();
        letterContent.scrollIntoView({ behavior: "smooth", block: "start" });
        burstConfetti();
    }, 700);

});

function renderVerses() {
    const grid = document.getElementById("versesGrid");
    grid.innerHTML = "";
    verses.forEach(v => {
        const card = document.createElement("div");
        card.className = "verse-card";
        card.innerHTML = `<p>"${v.text}"</p><span>— ${v.ref}</span>`;
        grid.appendChild(card);
    });
}

// ------------------------------
// Confetti burst on letter open
// ------------------------------

function burstConfetti() {
    const icons = ["🎉", "🎊", "✨", "🎀", "🩷", "💌"];
    for (let i = 0; i < 26; i++) {
        const el = document.createElement("div");
        el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        el.style.position = "fixed";
        el.style.left = "50%";
        el.style.top = "30%";
        el.style.fontSize = (16 + Math.random() * 18) + "px";
        el.style.pointerEvents = "none";
        el.style.zIndex = "2000";
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 200;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        el.style.transition = "transform 1.3s ease-out, opacity 1.3s ease-out";
        document.body.appendChild(el);
        requestAnimationFrame(() => {
            el.style.transform = `translate(${dx}px, ${dy}px)`;
            el.style.opacity = "0";
        });
        setTimeout(() => el.remove(), 1400);
    }
}

// ------------------------------
// Floating hearts & sparkles (matches main site)
// ------------------------------

const particleLayer = document.getElementById("particles") || document.body;
const floatIcons = ["🩷", "✨", "🎀"];

function createFloatingIcon() {
    const el = document.createElement("div");
    el.innerHTML = floatIcons[Math.floor(Math.random() * floatIcons.length)];
    el.style.position = "absolute";
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-10vh";
    el.style.fontSize = (20 + Math.random() * 24) + "px";
    el.style.animation = `floatUp ${8 + Math.random() * 6}s linear forwards`;
    particleLayer.appendChild(el);
    setTimeout(() => el.remove(), 14000);
}

setInterval(createFloatingIcon, 1200);
createFloatingIcon();
