selectors = document.querySelectorAll(".selector");
selectors.forEach((selector) =>
    selector.addEventListener("click", (e) => updateAnimation(e.target.id))
);

let selectedAnimation = "square";
let selectedVariation = "";

const checkboxColor = document.getElementById("color");
const checkboxShape = document.getElementById("shape");
const ball = document.getElementById("ball");

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

    console.log(selectedAnimation + selectedVariation);
}

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