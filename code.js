
const ar = ["line.jpg", "money.png", "pen.jpeg", "bob.png", "python.jpeg"];

function show_meme() {
    let randomnumber = Math.floor(Math.random() * 5);
    let ourimg = document.querySelector(".image-itself");
    ourimg.src = ar[randomnumber];
    console.log(ar[randomnumber]);
}