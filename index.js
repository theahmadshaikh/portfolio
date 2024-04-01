let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 500);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

document.getElementById('resume-button-1').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1so7tRJoECYa6ko4BiaKF6taMFsakrReT/view?usp=sharing", "_blank");
});

// JavaScript to simulate typing effect
const greeting = "Hello👋, I'm ";
const name = "Ahmad Shaikh";
const jobTitle = "Full Stack Web Developer";

let i = 0;
let j = 0;
let k = 0;

function typeGreeting() {
    if (i < greeting.length) {
        document.querySelector(".home-text span").innerHTML += greeting.charAt(i);
        i++;
        setTimeout(typeGreeting, 100);
    }
}

function typeName() {
    if (j < name.length) {
        document.querySelector(".home-text h1").innerHTML += name.charAt(j);
        j++;
        setTimeout(typeName, 100);
    }
}

function typeJobTitle() {
    if (k < jobTitle.length) {
        document.querySelector(".home-text h2").innerHTML += jobTitle.charAt(k);
        k++;
        setTimeout(typeJobTitle, 100);
    }
}

// Call the typing functions
typeGreeting();
setTimeout(typeName, 1500); // Delayed start for the name typing effect
setTimeout(typeJobTitle, 2500); // Delayed start for the job title typing effect

// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Create a scene for each section
$('section').each(function(e) {
   console.log(e)
  let scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.65, // Trigger the animation 90% from the top of the viewport
    reverse: true // Only animate once
  })
  .setClassToggle(this, 'active') // Add 'active' class to section
  .addTo(controller);
});
