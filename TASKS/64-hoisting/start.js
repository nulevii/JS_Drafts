/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5
const b = 10

if (b > a) {
  let c = 2
  c = a + b + c
  console.log(c)
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  // 17
}

console.log(c) // 'c' Создана внутри блока if
// Uncaught ReferenceError: c is not defined
