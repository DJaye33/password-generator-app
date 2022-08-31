var slider = document.querySelector("#myRange");
var changeSliderBgColor = function () {
    var sliderMultiplier = 5;
    var value = Number(slider.value) * sliderMultiplier;
    var backgroundColor = "linear-gradient(90deg, var(--color-neon-green) ".concat(value, "%, var(--color-very-dark-gray) ").concat(value, "%)");
    slider.style.background = backgroundColor;
};
slider.addEventListener("input", changeSliderBgColor);
