selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) =>
    selector.addEventListener("click", (e) => updateAnimation(e.target.id))
);

let selectedAnimation = "square";

function updateAnimation(type) {
    const ball = document.getElementById("ball");
    const activatedSelector = document.getElementById(type);

    ball.classList.remove(selectedAnimation);
    ball.classList.add(type);

    selectedAnimation = type;
}
