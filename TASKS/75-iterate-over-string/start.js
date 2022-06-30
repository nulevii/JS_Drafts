/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const str = 'Today is the best day of my life';

// // Solution 1
// vowelsCount = vowels.reduce((acc, letter) => {
//   if (str.match(new RegExp(`${letter}`, 'g'))) { acc += str.match(new RegExp(`${letter}`, 'gi')).length; }
//   return acc;
// }, 0);

// // Solution 2
for (const letter of str) {
  if (vowels.includes(letter)) { vowelsCount += 1; }
}
console.log(vowelsCount);
// 9
