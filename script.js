window.addEventListener("scroll", reveal);

function reveal() {
  let elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}