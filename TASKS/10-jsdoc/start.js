/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */

/**
 * Returns difference between numbers
 *
 * @param {Number} a Number one
 * @param {Number} b Number two
 * @returns {Number} Difference between numbers
 */
function diff(a, b) {
  return a - b;
}

const result = diff(10, 5);
console.log(result);

/**
 * This fuction will accept details about a person
 * and create an object for them.
 *
 * @param {String} name The person's full name
 * @param {Number} age The peston's age
 * @param {Boolean} isDeveloper Whether or not the person is developer
 * @returns {Object} Object with peron's data
 */
function creattePerson(name, age, isDeveloper) {
  return {
    name,
    age,
    isDeveloper,
  };
}
const yevgenii = creattePerson(23, 'Yevgenii', false);
console.log(yevgenii);
