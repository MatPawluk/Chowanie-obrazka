const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const change = () => {
  if (one.textContent.includes("°C")) {
    one.textContent = "°F";
    two.textContent = "°C";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
  }
  result.textContent = "";
};

const celsiusToFahrenheit = () => {
  fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
  converter.value = "";
};

const fahrenheitToCelsius = () => {
  celsius = (converter.value - 32) / 1.8;
  result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
  converter.value = "";
};

const conversion = () => {
  if (converter.value !== "") {
    if (one.textContent.includes("°C")) {
      celsiusToFahrenheit();
    } else {
      fahrenheitToCelsius();
    }
  } else {
    result.textContent = "Podaj wartość";
  }
};

const restart = () => {
  result.textContent = "";
  converter.value = "";
};

changeBtn.addEventListener("click", change);
convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", restart);
