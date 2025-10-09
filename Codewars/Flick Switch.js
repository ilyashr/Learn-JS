// Flick Switch
// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb

// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr){
  let result = [];
  let currentState = true;
  
  for (let item of arr) {
    if (item === 'flick') {
      currentState = !currentState;
    }
  result.push(currentState);
    }
  return result;
}