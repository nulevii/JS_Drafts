/// /V1--------------
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

/// /V2------------

// const RomanNumerals = {


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

