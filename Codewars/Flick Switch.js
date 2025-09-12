// Flick Switch
// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb

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