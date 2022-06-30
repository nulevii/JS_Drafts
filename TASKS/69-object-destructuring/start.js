/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

const mult = ({x = 1, y = 1, z = 1}) =>{
  return x * y * z
}

const result = mult(objectWithNumbers)
console.log(result)
// 300
