/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

// // Solution 1
// const findPostById = (postID, postsArr) => {
//   let result;
//   postsArr.forEach((element) => {
//     if (Object.values(element).includes(postID)) {
//       result = element;
//       console.log(postID);
//     }
//   });
//   return result;
// };

// Solution 2
function findPostById(postID, postsArr) {
  return postsArr.find((post) => post.postId === postID);
}

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)); // undefined
