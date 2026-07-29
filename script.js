// ==============================
// Portfolio JavaScript
// ==============================

// Mobile Menu
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}

// Sticky Header

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="#08111f";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.background="#0b1628";
header.style.boxShadow="none";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Reveal Animation

const reveals=document.querySelectorAll(

".about-card,.project-card,.skill-box,.contact-card,.achievement-card,.timeline-content,.research-card"

);

function reveal(){

const windowHeight=window.innerHeight;

reveals.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<windowHeight-100){

card.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

// Typing Effect

const words=[

"AI Engineer",

"LLM Developer",

"NLP Engineer",

"FastAPI Developer",

"Researcher"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

const typing=document.querySelector(".hero-left h2");

function typeEffect(){

if(!typing) return;

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

// Active Navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#3ea6ff";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Card Hover Animation

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// Console Message 😄

console.log("Portfolio Loaded Successfully");
console.log("Developed by Abu Shahed");
