/* 
2. Funkcja powieszania napisu + brake point
3. Funkcja zmniejszania napisu +brake point
4. Funkscja zmiany koloru

*/

const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const text = document.querySelector(".text");
const childElement = text.firstElementChild;
const sizeUpp = () => {
  if (childElement) {
    let currentSize = parseInt(window.getComputedStyle(childElement).fontSize);

    if (currentSize <= 48) {
      childElement.style.fontSize = currentSize + 5 + "px";
    }
  }
};

const sizeMin = () => {
  if (childElement) {
    let currentSize = parseInt(window.getComputedStyle(childElement).fontSize);

    if (currentSize >= 12) {
      childElement.style.fontSize = currentSize - 5 + "px";
    }
  }
};

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeTextColor() {
  if (childElement) {
    const randomColor = getRandomColor();
    childElement.style.color = randomColor;
  }
}

sizeUp.addEventListener("click", sizeUpp);
sizeDown.addEventListener("click", sizeMin);
colorBtn.addEventListener("click", changeTextColor);
