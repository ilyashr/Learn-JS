// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
// Cat years, Dog years
function humanYearsCatYearsDogYears (humanYears, catYears, dogYears) {
  if (humanYears == 1) {
      catYears = 15;
      dogYears = 15;
  } else {
      catYears = 15 + 9 + 4 * (humanYears - 2);
      dogYears = 15 + 9 + 5 * (humanYears - 2);
  }
  return [humanYears, catYears, dogYears];
}