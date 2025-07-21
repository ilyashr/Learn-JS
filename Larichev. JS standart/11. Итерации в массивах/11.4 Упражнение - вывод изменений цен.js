/* 
Имеется массив изменения цен prices, где внутри
1-й элемент массива является ценой в момент X,
2-й - ценой в момент Y.
Нужно преобразовать данные в массив, где будут отображены
только положительные изменения цен: [100, 150]
 */

let prices = [[100, 200], [120, 100], [200, 350]];
const result = prices
.map((product, index, array) => {
    console.log(product, index, array);
  return  [1] - product[0];
})
.filter(price => price > 0);
console.log(result);