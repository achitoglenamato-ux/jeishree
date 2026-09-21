/* ==========================================
   Happy Birthday Jeishree 🎀
   Main Script
========================================== */

// ------------------------------
// Begin Journey Button
// ------------------------------

const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

    document
        .getElementById("journey")
        .scrollIntoView({
            behavior:"smooth"
        });

});

// ------------------------------
// Floating Hearts, Sparkles & Art Icons
// ------------------------------

const particleLayer = document.getElementById("particles") || document.body;
const floatIcons = ["🩷","✨","🎀","🎨","👓"];

function createFloatingIcon(){

    const el = document.createElement("div");

    el.innerHTML = floatIcons[Math.floor(Math.random()*floatIcons.length)];

    el.style.position = "absolute";
    el.style.left = Math.random()*100 + "vw";
    el.style.bottom = "-10vh";
    el.style.fontSize = (20 + Math.random()*24)+"px";
    el.style.animation = `floatUp ${8 + Math.random()*6}s linear forwards`;

    particleLayer.appendChild(el);

    setTimeout(()=>{
        el.remove();
    },14000);

}

setInterval(createFloatingIcon,900);
createFloatingIcon();

// ------------------------------
// Sparkle Effect
// ------------------------------

document.addEventListener("mousemove",(e)=>{

    const spark=document.createElement("span");

    spark.innerHTML="✨";

    spark.style.position="fixed";

    spark.style.left=e.clientX+"px";

    spark.style.top=e.clientY+"px";

    spark.style.pointerEvents="none";

    spark.style.fontSize="12px";

    spark.style.opacity="1";

    spark.style.transition="1s";

    document.body.appendChild(spark);

    setTimeout(()=>{

        spark.style.transform="translateY(-30px)";
        spark.style.opacity="0";

    },20);

    setTimeout(()=>{

        spark.remove();

    },1000);

});

// ------------------------------
// Welcome Message
// ------------------------------

setTimeout(()=>{

    console.log("Happy Birthday Jeishree 🎀");

},1000);
