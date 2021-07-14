'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//-------------------------------------------------------
console.log(`I'm working`)



//Practice
let array1 = ["b", "c", "d", "e"]
let array2 = ["z", "y", "d", "x"]

console.log(`What does this return? ${array2.includes("z")}`)
//splice:
// console.log(`This is the item being deleted: ${array1.splice(2, 1)}, and the returning array ${array1}`)


// //**THIS WORKS
//let correctPlace = 0 
//   for (let i = 0; i<array1.length; i++) {
//     console.log(`array1 i: ${array1[i]} and array2 i: ${array2[i]}`)
//     if (array1[i] == array2[i]) {
//       console.log(`These are the matching values of array1 and array2 at index ${i}: ${array1[i]} and ${array2[i]}`)
      
//       correctPlace = correctPlace + 1
//       console.log(`This is how many pieces are in the correct place: ${correctPlace}`)

//       console.log(`This is current i, the index to be removed ${[i]}`)
//       let splicedValue = array1.splice([i], 1)
//       console.log(`This is the spliced value: ${splicedValue}`)
//       console.log(`Updated array1: ${array1}`)

//       console.log(`This is current i, the index to be removed ${[i]}`)
//       let splicedValue2 = array2.splice([i], 1)
//       console.log(`This is the spliced value: ${splicedValue2}`)
//       console.log(`Updated array1: ${array2}`)
     
//     // **  
//       }
//     }



let board = [];
let solution = "a b c d"; //I updated this from the orifinal, an empty string, as per the suggestion of the specs
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  let guessArray = guess.split(" ")
  console.log(`GH This is guess as an array: ${guessArray}`)

  let solutionArray = solution.split(" ")
  console.log(`GH This is solution as an array: ${solutionArray}`)

  let correctPlace = 0

  let correctLetter = 0

  for (let i = 0; i<guessArray.length; i++) {
    console.log(`GH guessArray at i ${i}: ${guessArray[i]} and solutionArray at i ${i}: ${solutionArray[i]}`)
    if (guessArray[i] == solutionArray[i]) {
      console.log(`GH These are the matching values of guessArray and solutionArray at index ${i}: ${guessArray[i]} and ${solutionArray[i]}`)
      
      correctPlace = correctPlace + 1
      console.log(`GH This is how many pieces are in the correct place: ${correctPlace}`)

      console.log(`GH This is current i, the index to be removed ${[i]}`)
      let splicedValue = guessArray.splice([i], 1)
      console.log(`GH This is the spliced value of guessArray: ${splicedValue}`)
      console.log(`GH Updated guessArray: ${guessArray}`)

      console.log(`GH This is current i, the index to be removed ${[i]}`)
      let splicedValue2 = solutionArray.splice([i], 1)
      console.log(`GH This is the spliced value of solutionArray: ${splicedValue2}`)
      console.log(`GH Updated guessArray: ${solutionArray}`)
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
  return `${correctPlace} - ${correctLetter}`
  
}
generateHint("b a c z") 

const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

}


// const getPrompt = () =>  {
//   rl.question('guess: ', (guess) => {
//     mastermind(guess);
//     printBoard();
//     getPrompt();
//   });
// }

// Tests

// if (typeof describe === 'function') {
//   solution = 'abcd';
//   describe('#mastermind()', () => {
//     it('should register a guess and generate hints', () => {
//       mastermind('aabb');
//       assert.equal(board.length, 1);
//     });
//     it('should be able to detect a win', () => {
//       assert.equal(mastermind(solution), 'You guessed it!');
//     });
//   });

//   describe('#generateHint()', () => {
//     it('should generate hints', () => {
//       assert.equal(generateHint('abdc'), '2-2');
//     });
//     it('should generate hints if solution has duplicates', () => {
//       assert.equal(generateHint('aabb'), '1-1');
//     });

//   });

// } else {

//   generateSolution();
//   getPrompt();
// }