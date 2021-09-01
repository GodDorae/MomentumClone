const images = ["img/0.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const image = document.createElement("img");

//image.src = `img/${chosenImage}`;

//document.body.appendChild(image);


document.querySelector(".bg").style.backgroundImage = `url(${chosenImage})`;
