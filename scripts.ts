const slider: HTMLInputElement = document.querySelector("#myRange")!;

const changeSliderBgColor = (): void => {
  const sliderMultiplier = 5;
  const value = Number(slider.value) * sliderMultiplier;
  const backgroundColor = `linear-gradient(90deg, var(--color-neon-green) ${value}%, var(--color-very-dark-gray) ${value}%)`;
  slider.style.background = backgroundColor;
};

slider.addEventListener("input", changeSliderBgColor);
