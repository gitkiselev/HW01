let images = [
    'https://andrei-kiselev.ru/img/react/01.jpg',
    'https://andrei-kiselev.ru/img/react/02.jpg',
    'https://andrei-kiselev.ru/img/react/0f3.jpg'
]
let loaded = [];

loadImage = (url) => {
    return new Promise((resolve, reject) => {
        const image = document.createElement('img');
        image.src = url;
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        loaded.push(image);
;    });
}


loadImage(images[0])
.then(() => loadImage(images[1]))
.then(() => loadImage(images[2]))
.then(() => {
        loaded.map((img, idx) => {
            document.body.appendChild(img);
        });
    })
    .catch((err) => {
        console.error('unloaded image path ',  err);
    })





