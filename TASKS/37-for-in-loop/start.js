/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
};
// console.log(myObject.city instanceof myObject)
Object.prototype.country = 'England';

for (const key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(myObject[key]);
  }
  console.log(myObject[key]);
}
