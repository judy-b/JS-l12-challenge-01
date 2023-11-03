const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    selectRandomImage(images)
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
}

const displayImage = function(image) {
    const author = image.author;
    const imageAddress = image.download_url;
    authorSpan.innerText = `${author}`;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
}

button.addEventListener("click", function () {
    getImage();
})