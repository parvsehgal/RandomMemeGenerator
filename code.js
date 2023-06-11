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

memeButton.addEventListener('click', generateMeme);

