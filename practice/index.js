/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
// const personOne = {
//     name: 'Bob',
//     age: 21
// };

// function increasePersonAge(person) {

//    const  updatedPerson = JSON.parse(JSON.stringify(person))
//     updatedPerson.age +=1
//     return updatedPerson
// };

// const updatedPersor = increasePersonAge(personOne)
// console.log(personOne)
// console.log(updatedPersor)

// function anotherFunction(){
// console.log('hello')
// }

// function fnWithCallback(callbackFunction) {
//     callbackFunction()
// };

// fnWithCallback(anotherFunction)

// function printMyName() {
//     console.log('Yevgenii')

// };

// console.log('Start');
// setTimeout(printMyName, 3000);

// const a =

// console.log(a)

// const myObjct = {
//   size: 10,
//   length: 5,
// };

// function change(myObjct1) {
//   const myObjct2 = { ...myObjct1 };

//   myObjct2.size = 11;
//   myObjct2.length = 12;
//   console.log(myObjct2);
//   return myObjct2;
// }
// const myObjct2 = change(myObjct);

// console.log(myObjct2);

// console.log(myObjct);

// const a = 10;
// const b = a;
// const c = a + b;
// console.log(c);

// function countBy(x, n) {
//   const z = [];
//   let y = 0;
//   let v = x;
//   for (x; y < n; y++) {

//     z.push(v);
//     v = v+x
//   }
//   return z;
// }
// const zet = countBy(1, 10);
// console.log(zet);

// const someName = 'NAME';

// const arrName = someName.split('');
// console.log(someName.split(''));
// console.log(arrName.join(''));

// function DNAtoRNA(dna) {
//   let rna = dna;
//   rna = rna.split('');
//   for (let i = 0; i < dna.length; i++) {
//     if (rna[i] === 'T') rna[i] = 'U';
//   }

//   rna = rna.join('')

//   return (rna);
// }

// function DNAtoRNA(dna) {
//   let rna = dna;
//   rna = rna.replace(/T/g, 'U');

// //   rna = rna.join('');

//   return (rna);
// }

// console.log(DNAtoRNA('GCATTTT'));

// let b
// let a = !!b;
// console.log(a)

// const button = {
//     with: 200,
//     text: 'Buy',
// }

// const redButton = {
//     ...button,
//     color: 'red',
// }

// console.table(redButton);

// const buttonInfo = {
//   text: 'Buy',
// };

// const buttonStyle = {
//   color: 'yellow',
//   width: 200,
//   height: 300,
// };

// const button = {
//   ...buttonInfo,
//   ...buttonStyle,
// };

// console.table(button);

// const a = 1;
// let c;
// if (a === 1) { c = 10; }
// const b = `${c} is wery good ${a}`;

// console.log(b);

// const instagram = '@samanthaming';
// const twitter = '@samantha_ming';
// const tiktok = '@samanthaming';
// const hi = 'My handles are '.concat(instagram, ', ', twitter, ', ', tiktok);
// console.log(hi);

// const myName = 'Yevgenii';
// const city = 'Odesa';
// console.log(`My name is ${myName}, I'm from ${city}`);

// function newFN() {
//     console.log('Hello')
// }

// newFN = 'hello World'

// console.log(typeof(newFN))
// newFN()

// const myFN = function(a, b = 2){
//     return a - b
// }

// console.log(myFN(1))

// const myFN = (a, b = 2, c = 4) => a - b + c;
// console.log(myFN(1,5));

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// });

// const firstPost = {
//   id: 1,
//   author: 'Bogdan',
// };

// newPost(firstPost);

// console.log(newPost(firstPost));

// const century = (year) => Math.ceil(year / 100)

// console.log(century(1000))

// const likes1 = [];
// const likes2 = ['Peter'];
// const likes3 = ['Jacob', 'Alex'];
// const likes4 = ['Max', 'John', 'Mark'];
// const likes5 = ['Alex', 'Jacob', 'Mark', 'Max'];
// const likes6 = ['Alex', 'Jacob', 'Mark', 'Max', 'Max'];

// function likes(names) {
//   let likedPeople;
//   console.log(names.length)
//   if (names.length === 0) {
//     likedPeople = 'no one likes this';
//   } else if (names.length === 1) {
//     likedPeople = `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     likedPeople = `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     likedPeople = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   }else if (names.length >= 4) {
//     likedPeople = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }

//   return likedPeople;
// }

// console.log(likes(likes1));
// console.log(likes(likes2));
// console.log(likes(likes3));
// console.log(likes(likes4));
// console.log(likes(likes5));
// console.log(likes(likes6));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const str = 'wery interesting text, I like it';

// const toJadenCase1 = function (str) {
//   let textUpperCase = str;
//   textUpperCase = textUpperCase.split(' ');
//   let i = 0;
//   const textArr = []
//   for (i; i <= textUpperCase.length - 1; i++) {
//     let chart = textUpperCase[i];
//     chart = chart.charAt(0).toUpperCase(0) + chart.slice(1);
//     textArr.push(chart)
//   }
//   textUpperCase = textArr.join(' ');
//   return textUpperCase;
// };

// console.log(toJadenCase1(str));

// String.prototype.toJadenCase = toJadenCase1(str);

// console.log(String.prototype.toJadenCase)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const fnWithError = () => {
//   throw new Error('Some error');
// };
// try {
//   fnWithError();
// } catch (error) {
// console.error(error)
// console.error(error.message)
// }
// console.log('Continue...');

// const passWord = 'pd';
// function maskify(cc) {
//   const makifiedArr = cc.split('');
//   let i = 0;
//   for (i; i <= makifiedArr.length - 5; i++) {
//     makifiedArr[i] = '#';
//   }
//   const maskifiedPass = makifiedArr.join('')
//   return maskifiedPass;
// }

// console.log(maskify(passWord));

// const pangram = 'The quick brown fox jumps over the lazy dog.'
// const notPangram = 'hello 1234'
// function isPangram(string){

// }

// let ab = /ab+c/;
// var re = new RegExp("ab+c");

// console.log(ab + re)

// function containsAnyLetter(str) {
//   const regexp = /Yevgenii/im.test(str)
//   // const result = regexp.test(str)
//   return regexp

// }
// const res = 'Hello Yevgenii'
// console.log(containsAnyLetter(res))

// console.log( "Люблю HTML hello hiu".replace(/HTML/, " и JavaScript") )

// -------------------------------------------------------------------------

// const string = 'The quick brown fox jumps over the lazy dogggggg';
// function containsAnyLetter(str) {
//   const regexp = /^(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/mi.test(str);
//   return regexp;
// }
// console.log(containsAnyLetter(string));

// -------------------------------------------------------------------------

// const array1 = [1, 1, 1, 2, 3, 4, 5, 6];
// const array2 = [2,3,4,5,1];

// function arrayDiff(a, b) {
//   const diffedArray = a;
//   let i;
//   let number;

//   for (let d = 0; d <= b.length - 1; d++) {
//     number = b[d];
//     console.log(number);

//     for (i = 0; i <= a.length; i++) {
//       if (diffedArray[i] === number) {
//         diffedArray.splice(i, 1);
//         i -= 1;
//       }
//     }
//   }
//   return diffedArray;
// }

// console.log(arrayDiff(array1, array2));

// -------------------------------------------------------------------------

// const words = 'Passwordddd';
// const pass = rot13(words);

// function rot13(s) {
//   return s.replace(/[a-z]/gi, (c) => String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13)));
// }

// function rot13Return(password) {
//   return password.replace(/[a-z]/gi, (c) => String.fromCharCode(c.charCodeAt(0) + (c.toUpperCase() <= 'M' ? 13 : -13)));
// }

// console.log(rot13(words));
// console.log(rot13Return(pass));

// -------------------------------------------------------------------------

// let a = 'aAAAdsfAdsd dfssdf..d]][][][';
// function alphabetPosition(text) {
//   const textNumArray = text.replace(/[^a-z]/gi, '').toLowerCase().split('').map((b) => b.charCodeAt(0) - 96).join(' ');
//   return textNumArray;
// }

// console.log(alphabetPosition(a));

// // updated
// const a = 'aAAAddddsfAddddsddd dfssdf..d]][][][';
// const alphabetPosition = (text) => text.replace(/[^a-z]/gi, '').toLowerCase().split('').map((b) => b.charCodeAt(0) - 96)
//   .join(' ');

// console.log(alphabetPosition(a));

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// // Arrays

// const myArray = [1, true, 'a'];
// console.log(myArray);

// console.log(myArray[0]);
// console.log(myArray[1]);

// console.log(myArray.length);


// const myArray = [1, 2, 3];

// const pushArray = (arr) => {
//   // const myArray2 = JSON.parse(JSON.stringify(myArray));
//   const myArray2 = [...arr];
//   myArray2.push(5, 6, 5);
//   return myArray2;
// };
// let myArray2;
// console.log(myArray2 = pushArray(myArray));
// console.log(myArray);
// const myArray3 = myArray.forEach((b) => b + 2);
// console.log(myArray2);
// console.log(myArray3);

// myArray.push(4);

// console.log(myArray);

// myArray.pop();
// myArray.shift();
// myArray.unshift(3);

// console.log(...myArray);


// const myArray = [1, 2, 3];
// console.log(myArray)
// const newArr = myArray.map(el => el * 2);

// console.log(newArr)

// ???????????????????????????????????????????????????????????????????
// function queueTime(customers, n) {
//   let i;
//   let summ = 0;
//   for (i = 0; i <= customers.length - 1; i++) {
//     if (n === 1) {
//       summ += customers[i];
//     } else if (n >= 1) {
//       console.log(customers.sort((a, b, c, d) => a - b - c - d));
//       console.log(customers.filter((a, b) => a - b <= 0));
//     }
//   }
//   console.log(customers.sort((a, b, c, d) => a - b - c - d));
//   let d;
//   let summOfAll = 0;
//   for (d = 0; d <= customers.length - 2; d++) {
//     summOfAll += customers[d];

//     console.log(customers.filter((a) => a >= summOfAll));
//     console.log(summOfAll);
//   }

//   return summ;
// }

// console.log(queueTime([32,333,58], 3));
// ?????????????????????????????????????????????????????????????????????

/// /SMILE FINDER

// function countSmileys(arr) {
//   let newArr = arr.filter(arrNum => arrNum.match(/([:;])-?([D)])/))
//   console.log(newArr)
//   return arr.length
// }
// let newArr = [':)', ';(', ';}', ':-D', 'D', ';D'];

// console.log(countSmileys(newArr));

//---------------------------------------------------------------------

/// //ANAGRAM FINDER

// const word = 'abba';
// const words = ['aabb', 'abcd', 'bbaa', 'dada', 'abba'];

// function anagrams(word, words) {
//   const wordArr = word.split('');
//   wordRegExp = new RegExp(`(?=${wordArr.join(')(?=.*')})`);
//   console.log(wordRegExp);
//   const newWordsArr = words.filter((wordsNo) => wordsNo.match(wordRegExp));
//   return newWordsArr;
// }

// console.log(anagrams(word, words));

// const data = ['abc', 'yte', 'juu'];

// const result = `(${data.join(')(')})`;
// console.log(result);

// Nead to finish this!?!?!?!?!??!?!?!??!?!?!?!??!?!??!??!?!!?!?!??!?!?!?!??!?!?

// // Destructurisation
// const someArr = ['one', 'two', 'three', undefined, 'four'];
// const [el1, el2, el3] = someArr;
// console.log(el1, el2, el3);
// const [,,, emptyEl = '10'] = someArr;
// console.log(emptyEl);


// let a = 'b';
// let b = 'a';

// [b, a] = [a, b];
// console.log(a, b);

// --------------------------------------------------------------------------
// // SECONDS TO TIME
// function humanReadable(seconds = 0) {
//   let hours = Math.floor(seconds / 3600);
//   let minutes = Math.floor((seconds % 3600) / 60);
//   let timeSeconds = seconds - hours * 3600 - minutes * 60;

//   hours = hours < 9 ? `0${hours}` : hours;
//   minutes = minutes < 9 ? `0${minutes}` : minutes;
//   timeSeconds = timeSeconds < 9 ? `0${timeSeconds}` : timeSeconds;
//   return `${hours}:${minutes}:${timeSeconds}`;
// }

// console.log(humanReadable(1));

// --------------------------------------------------------------------------

// function orderWeight(strng) {
//   console.log(strng.split(' ').sort());
//   return (strng.split(' ').sort().sort((a, b) => a.split('').sort((a,b) => a.charCodeAt() < b.charCodeAt(0)).reduce((a, b) => Number(a) + Number(b), 0) - b.split('').reduce((a, b) => Number(a) + Number(b), 0)).sort((a, b) => (a == b ? a.charCodeAt() - b.charCodeAt() : a + b)))
//     .join(' ');
// }

// console.log(orderWeight('2000 11 11 12 10003 22 123 11 1234000 44444444 9999 12'));


////V1--------------
// const RomanNumerals = {
//   thousandsNum: {
//     1: 'M', 2: 'MM', 3: 'MMM', 4: 'MMMM', 0: '',
//   },
//   hundreadsNum: {
//     1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM', 0: '',
//   },
//   dozensNum: {
//     1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC', 0: '',
//   },
//   digitsNum: {
//     1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 0: '',
//   },
//   toRoman(number) {
//     const replaceRoman = (replacedNum, replacedArr) => replacedNum.replace(/\d/g, (m) => replacedArr[m]);

//     const thousands = String(Math.floor(number / 1000));
//     const thousandsRoman = replaceRoman(thousands, RomanNumerals.thousandsNum);

//     const hundreads = String(Math.floor((number % 1000) / 100));
//     const hundreadsRoman = replaceRoman(hundreads, RomanNumerals.hundreadsNum);

//     const dozens = String(Math.floor(((number % 1000) % 100) / 10));
//     const dozensRoman = replaceRoman(dozens, RomanNumerals.dozensNum);

//     const digits = String(Math.floor((((number % 1000) % 100) % 10)));
//     const digitsRoman = replaceRoman(digits, RomanNumerals.digitsNum);

//     return `${thousandsRoman}${hundreadsRoman}${dozensRoman}${digitsRoman}`;
//   },
  

// };

// console.log(RomanNumerals.toRoman('1223'));

////V2------------

const RomanNumerals = {

  
  // 3: ['', 'M', 'MM', 'MMM', 'MMMM'],
  // 2: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', ]
  // ,
  // 1: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',]
  // ,
  // 0: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',],

  // 3: {
  //   1: 'M', 2: 'MM', 3: 'MMM', 4: 'MMMM', 0: '',
  // },
  // 2: {
  //   1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM', 0: '',
  // },
  // 1: {
  //   1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC', 0: '',
  // },
  // 0: {
  //   1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 0: '',
  // },

//     toRoman(num) {
//       if(/\D/.test(num)) {return 'Please insert only figures'};
//     let nums = String(num)
    
//     nums = nums.split('')
//     return nums.map((cur, d) => {
//         return RomanNumerals[nums.length - 1 - d][cur];
//     }).join('');
//   },


  


//   fromRoman(romanNum) {
    
//     let i = 3;
    
//     for(i; i >= 0; i-=1) {
//       console.log(RomanNumerals[i].length)
//       console.log(Object.values(RomanNumerals[i][4]))

//     }
//     return romanNum

//   },


// };

// console.log(RomanNumerals.toRoman('122'));
// console.log(RomanNumerals.fromRoman('MMMMCCXXXIX'));
// console.log(Object.values(RomanNumerals[1][6]))



// ?????????????????????????????????????????????????????????????????????
/////conditional expressions
// const person = {
//   age: 20,
// };
// if (!person.name) {
//   console.log('Имя не указано');
// }
// if (person.name) {
//   console.log(`Имя пользователя: ${person.name}`);
// }


// const age = 18;



// if (age >= 18) {
//   console.log('Is adult');
// }
// if (age >= 12 && age < 18) {
//   console.log('Is teenager');
// }
// if (age < 12) {
//   console.log('is child');
// }

// const sumPositiveNumbers = (a, b) => {
//   if (typeof a !=='number' || typeof b !== 'number') {
//     return 'One of the arguments is not a number '
//   }
//   if (a <= 0 || b <= 0 ) {
//     return 'Numbers are not positive'
//   }
// }

// console.log(sumPositiveNumbers(-2, 2))

// const value1 = 11;
// const value2 = 25

// value1
//   ? console.log('Условие Истинно')
//   : console.log('Условие ложно')

//   function myFunction(value1, value2) {
//     return value1
//   }
// value1 && value2
// ? console.log(myFunction(value1, value2))
// : myFunction2()

// let value = -11;
// console.log(value>= 0 ? value : -value)

////-------------------------------------------------------------------------------------
////Cycles

const myArray = [true, 'abc', 10]
let i
while(i<=myArray.length-1)