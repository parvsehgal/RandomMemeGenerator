// async await implementation

let image = document.querySelector('img');
let memeButton = document.querySelector('button');

function changeImg(value) {
    image.src = value;
}

async function generateMeme() {
    const apiLink = 'https://meme-api.com/gimme';
    let response = await fetch(apiLink);
    let data = await response.json();
    changeImg(data.url);
}
setTimeout(generateMeme, 1);
memeButton.addEventListener('click', generateMeme);


// .then implementation
/*
let image = document.querySelector('img');
let memeButton = document.querySelector('button');

function changeImg(value) {
    image.src = value;
}

function generateMeme() {
    const apiLink = 'https://meme-api.com/gimme';
    fetch(apiLink).then((res) => res.json()).then((data) => changeImg(data.url));
}

setTimeout(generateMeme, 1);
memeButton.addEventListener('click', generateMeme);
*/