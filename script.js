const text = "Software Developer | Java | Frontend | Problem Solver";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add("active");
    }
  });
});
