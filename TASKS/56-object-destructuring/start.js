/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = ({ name, age: personAge, location }) => {
  console.log(name);
  console.log(personAge);
  const { country: origin,
          city: homeCity,
          createdAtYear = new Date().getFullYear()
   } = location;
  return {
    name,
    personAge,
    origin,
    homeCity,
    createdAtYear
  };
};
const now = new Date(2011,00,01,01,01,03)
console.log(now)

console.log(now)


const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
};

const result = personInfo(person);

console.log(result);
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
