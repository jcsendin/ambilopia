//we get all the buttons (except the pause one)
selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) =>
    selector.addEventListener("click", (e) => updateAnimation(e.target.id))
);

//with this variables we store the current information
let selectedAnimation = "square";
let selectedVariation = "";

//getting the checkboxes and the ball
const checkboxColor = document.getElementById("color");
const checkboxShape = document.getElementById("shape");
const ball = document.getElementById("ball");

//this function updates the chosen animation
function updateAnimation(type) {
        ball.classList.remove(selectedAnimation + selectedVariation);

        if (type == "color" || type == "shape") {
            const variation = updateVariation();
            ball.classList.add(selectedAnimation + variation);
            selectedVariation = variation;
        } else {
            ball.classList.add(type + selectedVariation);
            selectedAnimation = type;
        }
}

//we check which variations of the motion have been chosen
function updateVariation() {
    if (checkboxColor.checked && checkboxShape.checked) {
        return "_color_shape";
    } else {
        if (checkboxColor.checked) {
            return "_color";
        } else {
            if (checkboxShape.checked) {
                return "_shape";
            } else {
                return "";
            }
        }
    }
}

//managing the pause and continue with a toggle
const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click', () => {
    pauseButton.textContent = pauseButton.textContent === "Pausa" ? "Continua" : "Pausa";
    const animation = document.querySelectorAll('.'+selectedAnimation+selectedVariation);
    const running = animation[0].style.animationPlayState === 'running';
    animation[0].style.animationPlayState = running ? 'paused' : 'running';
});