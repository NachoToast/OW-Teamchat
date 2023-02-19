const images = document.querySelectorAll('img');

for (let i = images.length; i >= 0; i--) {
    document.body.appendChild(images.item(Math.floor(Math.random() * i)));
}
