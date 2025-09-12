https://www.codewars.com/kata/5ab6538b379d20ad880000ab

Area or Perimeter

const areaOrPerimeter = function(l , w) {
  if (l == w) {
    return l * w;
  } else {
    return (l + w) * 2;
  }
};