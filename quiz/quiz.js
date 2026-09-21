const quiz = [

{
question:"What are Jeishree's favorite colors?",
answers:["Blue & Black","Pink & White","Red & Yellow","Purple & Orange"],
correct:1
},

{
question:"Which Stranger Things character is her favorite?",
answers:["Dustin","Steve","Eleven (El)","Vecna"],
correct:2
},

{
question:"What song does she have on repeat?",
answers:["Running Up That Hill","Wuthering Heights","Heads Will Roll","Dreams"],
correct:0
},

{
question:"What does Jeishree wear that makes her look extra smart?",
answers:["A cap","Specs (glasses)","A scarf","Gloves"],
correct:1
},

{
question:"What does Jeishree love spending her free time on?",
answers:["Sports & News","Art & Drawing","Cooking Shows","Gardening"],
correct:1
},

{
question:"When is Jeishree's birthday?",
answers:["Next month","Last week","Today!","In a year"],
correct:2
}

];

let current = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){

const q = quiz[current];

question.innerText = q.question;

answers.innerHTML = "";

q.answers.forEach((answer,index)=>{

const btn = document.createElement("button");

btn.className = "answer-btn";

btn.innerText = answer;

btn.onclick = ()=>{

document.querySelectorAll(".answer-btn").forEach(b=>{

b.disabled = true;

});

if(index===q.correct){

btn.style.background="#4CAF50";
btn.style.color="#fff";

score++;

}else{

btn.style.background="#e0507a";
btn.style.color="#fff";

}

};

answers.appendChild(btn);

});

}

nextBtn.onclick=()=>{

current++;

if(current<quiz.length){

loadQuestion();

}else{

document.querySelector(".quiz-box").style.display="none";

document.getElementById("result").classList.remove("hidden");

document.getElementById("scoreText").innerHTML=

"You scored <b>"+score+" / "+quiz.length+"</b><br><br>Pink, white, El, and Running Up That Hill — you know yourself well! 🩷";

}

};

loadQuestion();
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
