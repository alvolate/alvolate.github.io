const images = ["ocean-3605547_960_720.jpg","milky-way-2695569_960_720.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);