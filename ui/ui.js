
const slider = document.getElementById("slider");
const result = document.getElementById("result");

slider.addEventListener("input",() => {
    result.textContent=slider.value
})