let images = [
    'https://andrei-kiselev.ru/img/react/01.jpg',
    'https://andrei-kiselev.ru/img/react/02.jpg',
    'https://andrei-kiselev.ru/img/react/03.jpg'
]

// const array1 = ['a', 'b', 'c'];

// for (const image of images) {
  
// }
loadImage = (url) => {
    return new Promise((resolve, reject) => {
        const image = document.createElement('img');
        image.src = url;
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        return image;
        //document.body.appendChild(image);
;    });
}
images.map(img => {
    document.body.appendChild(loadImage(img));
    //loadImage(img)
});


let promise1 = loadImage(images[0]);
let promise2 = loadImage(images[1]);
let promise3 = loadImage(images[2]);


