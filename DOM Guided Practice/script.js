const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.textContent = "Mona Lisa";
h1.style.color = "#ffffff"; // Dark Red color
root.appendChild(h1);

const monaImg = document.createElement("img");
monaImg.setAttribute("src", "img/mona_lisa.jpg");
monaImg.setAttribute("width", "304");
monaImg.setAttribute("height", "auto");
root.appendChild(monaImg);

const pTag = document.createElement("p");
pTag.textContent = "The Mona Lisa is a famous painting.";
pTag.style.color = "#ffffff"; // Black color
root.appendChild(pTag);

root.style.backgroundColor = "#000000"; // Beige color
root.style.padding = "20px";
root.style.textAlign = "center";
