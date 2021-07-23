'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//-------------------------------------------------------

let board = [];
let solution = ""; 
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = (board) =>  {
  console.log(`The Board:`)
  console.log(solution)
  for (let i = 0; i < board.length; i++) {
    console.log(`Turn ${i+1} : ${board[i]}`);
  }
  if (board.length < 10) {
    console.log(`Guess again!`)
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    if(solution.includes(letters[randomIndex]) == false) {
      solution = solution + letters[randomIndex]
    }
    else {
      i--
    }
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  let guessArray = guess.split("")
  let solutionArray = solution.split("")

  let correctPlace = 0
  let correctLetter = 0

  for (let i = 0; i<guessArray.length; i++) {
    
    if (guessArray[i] == solutionArray[i]) {
      correctPlace = correctPlace + 1
      guessArray.splice([i], 1)
      solutionArray.splice([i], 1)
      i--
      }
    }
  
    for (let i=0; i< guessArray.length; i++) {
      if (guessArray.includes(solutionArray[i])) {
      console.log(`GH guessArray contains solutionArray value: ${solutionArray[i]}`)
  
      correctLetter = correctLetter + 1
      console.log(`GH correctLetter current count: ${correctLetter}`)
      }
    }
    console.log(`GH This is your hint!${correctPlace}-${correctLetter}`)
    return `${correctPlace}-${correctLetter}`
}

const mastermind = (guess) => {
  if (guess == solution) {
    console.log(`You guessed it!`)
    return(`You guessed it!`)
  }
  else {
    generateHint(guess)
    let hint = generateHint(guess)
    hint = guess.concat(`: ${hint}`)
  
    board.push(hint)
  }
}

const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    if (mastermind(guess) == `You guessed it!`){
      return true
    }
    printBoard(board);
    if (board.length >= 10) {
      console.log(`You ran out of turns! The solution was ${solution}`)
      return `You ran out of turns! The solution was ${solution}`
    }
    getPrompt();
  });
}

// // Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}