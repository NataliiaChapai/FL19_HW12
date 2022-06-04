import { dictionary } from './dictionary.js';

const count = dictionary.length;
const boxCount = 5;
const lastElIndex = -2;
const initialRow = -1;
let inputLetters = [];
let rowNumber = -1;
const firstWordIndex = Math.round(Math.random() * count);
const firstWord = dictionary[firstWordIndex];
const secondWordIndex = Math.round(Math.random() * count);
const secondWord = dictionary[secondWordIndex];
const thirdWordIndex = Math.round(Math.random() * count);
const thirdWord = dictionary[thirdWordIndex];
const fourthWordIndex = Math.round(Math.random() * count);
const fourthWord = dictionary[fourthWordIndex];
const fifthWordIndex = Math.round(Math.random() * count);
const fifthWord = dictionary[fifthWordIndex];
const sixthWordIndex = Math.round(Math.random() * count);
const sixthWord = dictionary[sixthWordIndex];
const wordsArray = [firstWord, secondWord, thirdWord, fourthWord, fifthWord, sixthWord]

const block = document.querySelector('#block');
const resetBtn = document.querySelector('#reset');
const checkBtn = document.querySelector('#check');

checkBtn.disabled = true;

if (rowNumber === initialRow) {
    block.addEventListener('input', onInput);
}

resetBtn.addEventListener('click', onResetBtnClick);
checkBtn.addEventListener('click', onCheckBtnClick);

function onInput(event) {
    let letter = event.target.value.toLowerCase();
    inputLetters.push(letter);
    if (inputLetters.length === boxCount) {
        checkBtn.disabled = false;
    }
    if (letter === '') {
        inputLetters.splice(lastElIndex);    
    }
}

function onResetBtnClick() {
    document.location.reload(); 
}

function onCheckBtnClick() {
    checkBtn.disabled = true;
    const inputWord = inputLetters.join('');
    if (inputLetters.length !== boxCount) {
        alert('Input only 5 letters in one row!');
    } else {
        rowNumber += 1;   
    }
    if (inputLetters.join('') === wordsArray[rowNumber]) {
        alert('Congratulations! You won.'); 
        block.removeEventListener('input', onInput);
        rowNumber === initialRow;
    }
    if (!dictionary.includes(inputWord)) {
        alert('Word not in list!');
        inputLetters = [];
        block.children[rowNumber].reset();
        rowNumber -= 1;
        return;
    }
    for (let i = 0; i < boxCount; i++) {
        for (let j = 0; j < boxCount; j++) {
            let word = wordsArray[rowNumber].split('');
            let box = block.children[rowNumber].children[i];
            box.style.backgroundColor = 'grey';
            if (inputLetters[i] === word[j]) {
                if (i === j) {
                    box.style.backgroundColor = 'green';
                    break;
                } else {
                    box.style.backgroundColor = 'yellow';
                }
            } 
        }
    }

    inputLetters = [];
    if (rowNumber === boxCount) {
        alert('Game over.');
    }
}