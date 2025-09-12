// Multiple of index
//https://www.codewars.com/kata/5a34b80155519e1a00000009

// Return a new array consisting of elements which are multiple
// of their own index in input array (length > 1).

function multipleOfIndex(array) {
  return array.filter((num, index) => 
    (index === 0 && num === 0) || (index !== 0 && num % index === 0));
}