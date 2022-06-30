/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: 'Pejo',
    price: 100,
    isAvailableForSale: true,
  },
  {
    carBrand: 'Nisan',
    price: 200,
    isAvailableForSale: false,
  },
  {
    carBrand: 'Mitsubisi',
    price: 300,
    isAvailableForSale: true,
  },
];

cars.push({
  carBrand: 'Ford',
  price: 150,
  isAvailableForSale: true,
});

console.log(cars);
