'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//-------------------------------------------------------
console.log(`I'm working`)



//Practice
// let guessArray = ["a", "b", "c", "t", "r", "g"]
// let solutionArray = ["p", "p", "e", "d", "l", "h"]
// let correctPlace = 0

// let correctLetter = 0
// for (let i = 0; i<guessArray.length; i++) {
//   console.log(`GH guessArray at i ${i}: ${guessArray[i]} and solutionArray at i ${i}: ${solutionArray[i]}`)
//   if (guessArray[i] == solutionArray[i]) {
//     console.log(`GH These are the matching values of guessArray and solutionArray at index ${i}: ${guessArray[i]} and ${solutionArray[i]}`)
    
//     correctPlace = correctPlace + 1
//     console.log(`GH This is how many pieces are in the correct place: ${correctPlace}`)

//     console.log(`GH This is current i, the index to be removed ${[i]}`)
//     let splicedValue = guessArray.splice([i], 1)
//     console.log(`GH This is the spliced value of guessArray: ${splicedValue}`)
//     console.log(`GH Updated guessArray: ${guessArray}`)

//     console.log(`GH This is current i, the index to be removed ${[i]}`)
//     let splicedValue2 = solutionArray.splice([i], 1)
//     console.log(`GH This is the spliced value of solutionArray: ${splicedValue2}`)
//     console.log(`GH Updated guessArray: ${solutionArray}`)
//     console.log(`GH this many are in the correctPlace: ${correctPlace}`)
//     i=-1
//     }
//   }


// console.log(`What does this return? ${array2.includes("z")}`)
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
let solution = ""; //I updated this from the orifinal, an empty string, as per the suggestion of the specs
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


const printBoard = (board) =>  {
  console.log(`PB  board: ${board}`)
  for (let i = 0; i < board.length; i++) {
    console.log(`Turn ${i+1} : ${board[i]}`);
  }
  console.log(`PB Length of the board: ${board.length}`)
  if (board.length == 10) {
    // console.log(`You ran out of turns! The solution was ${solution}`)
    // return `You ran out of turns! The solution was ${solution}`
  }
  else {
    return ('Guess again')
  }
}

// const generateSolution = () =>  {
//   for (let i = 0; i < 4; i++) {
//     const randomIndex = getRandomInt(0, letters.length);
//     solution += letters[randomIndex];
//   }
// }

//fixed it to not do doubles
const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    console.log(`proposed letter outside the if statement: ${letters[randomIndex]}`)
    console.log(`Current index of solution: ${i}`)
    console.log(`Does the solution include the letter at that random index?: ${solution.includes(letters[randomIndex])} `)
    
    if(solution.includes(letters[randomIndex]) == false) {
      console.log(`proposed letter inside if statement: ${letters[randomIndex]}`)
      solution = solution + letters[randomIndex]
      console.log(`current solution: ${solution}`)
    }
    else {
      console.log(`'there was a double; let's try again`)
      i--
    }
  }
  console.log(`solution: ${solution}`)
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
  let guessArray = guess.split("")
  console.log(`GH This is guess as an array: ${guessArray}`)

  let solutionArray = solution.split("")
  console.log(`GH This is solution as an array: ${solutionArray}`)

  let correctPlace = 0
  let correctLetter = 0

  for (let i = 0; i<guessArray.length; i++) {
    console.log(`GH guessArray at i ${i}: ${guessArray[i]} and solutionArray at i ${i}: ${solutionArray[i]}`)
    if (guessArray[i] == solutionArray[i]) {
      console.log(`GH MATCH PLACE These are the matching values of guessArray and solutionArray at index ${i}: ${guessArray[i]} and ${solutionArray[i]}`)
      
      correctPlace = correctPlace + 1
      console.log(`GH MATCH PLACE This is how many pieces are in the correct place: ${correctPlace}`)

      console.log(`GH MATCH PLACEThis is current i, the index to be removed ${[i]}`)
      let splicedValue = guessArray.splice([i], 1)
      console.log(`GH  MATCH PLACE This is the spliced value of guessArray: ${splicedValue}`)
      console.log(`GH MATCH PLACE Updated guessArray: ${guessArray}`)

      console.log(`GH MATCH PLACE This is current i, the index to be removed ${[i]}`)
      let splicedValue2 = solutionArray.splice([i], 1)
      console.log(`GH MATCH PLACEThis is the spliced value of solutionArray: ${splicedValue2}`)
      console.log(`GH MATCH PLACE Updated guessArray: ${solutionArray}`)
      i = -1
      }
  console.log(`GH this many MATCH PLACE: ${correctPlace}`)
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

//this generates the second hint - if any letters match - accounting for double letters
//the solution above does not account for double letters
// for (let i=0; i< guessArray.length; i++) {
//   let letter = solutionArray[i]
//   let found = guessArray.indexOf(letter) //returns first position that matches that letter
//   if (found>-1) {
//   correctLetter = correctLetter + 1
//   guessArray[found] = null
// //guess array is bade; solution array is abbb; i = 0;  letter = a; found = 1;
// //guess array b_de; round three _ _de 
//   }
// }
// return `${correctPlace}-${correctLetter}`
// }


const mastermind = (guess) => {
  solution = 'abcd'
  if (guess == solution) {
    console.log(`You guessed it!`)
    return(`You guessed it!`)
  }
  else {
    generateHint(guess)
    let hint = generateHint(guess)
    console.log(`MM Hint that will be combined with the guess: ${hint}`)
    hint = guess.concat(`: ${hint}`)
    console.log(`MM Hint push guess: ${hint}`)
    console.log(`MM Hint to board: ${hint}`)
  
    board.push(hint)
    console.log(`MM Board push hint: ${board}`)
  }
  console.log(`MM Board length at the end: ${board.length}`)
  
}

const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    // mastermind(guess);
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