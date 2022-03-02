const button = document.getElementById("button");
const words_div = document.getElementById("words_div");
const word0 = document.getElementById("word0");
const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");
var randomNum1 = 0;
var randomNum2 = 0;
var randomNum3 = 0;

const wordMin = 0;

let wordsArray = [];

function randomWord() {
    wordsArray = words.split("\n");

    let wordMax = wordsArray.length;

    randomNum1 = Math.floor(Math.random() * wordMax);
    randomNum2 = Math.floor(Math.random() * wordMax);
    randomNum3 = Math.floor(Math.random() * wordMax);

    word0.innerHTML = wordsArray[randomNum1];
    word1.innerHTML = wordsArray[randomNum2];
    word2.innerHTML = wordsArray[randomNum3];

    words_div.classList.add("visible");
    
    
    console.log(wordsArray.length);   
    console.log(wordsArray[wordMax - 1]);
}