//-------------JS TASK 1 WITH FUNCTION--------------

//#region
// 1. TaSK

// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");

// CalculateFormula(a, b);
// function CalculateFormula(a, b) {
//   x = a / b;
//   y = a % b;
//   console.log(x + ' ' + y);
// }

//#endregion

//#region
// 2. TaSK

// let a = prompt("Enter the value of a");
// let b = prompt("Enter the value of B");

// SwapNumbers(a, b);

// function SwapNumbers(a, b) {
//   let c = a;
//   a = b;
//   b = c;
//   console.log(a + " " + b);
// }

//#endregion

//#region
// 3. TaSK
// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");
// const c = +prompt("Enter the value of C");

// CalculateFormula(a, b, c)

// function CalculateFormula(a, b, c){
// if (a !== 0 && b !== 0 && c !== 0) {
//   console.log((c - b) / a);
// } else {
//   console.log("one of the number is zero");
// }
// }
//#endregion

//#region
//4. TaSK

// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");

// CalculateFormula(a, b)

// function CalculateFormula(a, b){
//     if (a > b) {
//         console.log(a + b);
//       } else if (a == b) {
//         console.log(a * b);
//       } else {
//         console.log(a - b);
//       }
// }

//#endregion

//#region
// 5. TaSK
// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");
// const c = +prompt("Enter the value of C");

// CalculateRoots(a, b, c)

// function CalculateRoots(a, b, c){
//     let x1, x2;
//     let d = b * b - 4 * a * c;
//     if (d > 0) {
//       x1 = (-b + d ** (1 / 2)) / (2 * a);
//       x2 = (-b - d ** (1 / 2)) / (2 * a);
//       console.log(`${x1} , ${x2}`);
//     } else if (d == 0) {
//       x1 = -b / (2 * a);
//       x2 = -b / (2 * a);
//       console.log(`${x1} , ${x2}`);
//     }else {
//       console.log(`the equation has no real roots`);
//     }
// }

//#endregion

//#region
// 6. TaSK

// const a = +prompt("Enter two digit number")

// CalculateFormula(a)

// function CalculateFormula(a) {
//   if (a / 10 >= 1) {
//     let x = "";
//     let y = "";
//     let check = false;

//     switch (parseInt((a / 10) % 10)) {
//       case 1:
//         if (a % 10 === 0) {
//           x += "ten";
//         } else if (a % 10 === 1) {
//           x += "eleven";
//         } else if (a % 10 === 2) {
//           x += "twelve";
//         } else if (a % 10 === 3) {
//           x += "thirteen";
//         } else if (a % 10 === 4) {
//           x += "fourteen";
//         } else if (a % 10 === 5) {
//           x += "fifteen";
//         } else if (a % 10 === 6) {
//           x += "sixteen";
//         } else if (a % 10 === 7) {
//           x += "seventeen";
//         } else if (a % 10 === 8) {
//           x += "eighteen";
//         } else if (a % 10 === 9) {
//           x += "nineteen";
//         }
//         check = true;
//         break;
//       case 2:
//         x += "twenty";
//         break;
//       case 3:
//         x += "thirty";
//         break;
//       case 4:
//         x += "fourty";
//         break;
//       case 5:
//         x += "fifty";
//         break;
//       case 6:
//         x += "sixty";
//         break;
//       case 7:
//         x += "seventy";
//         break;
//       case 8:
//         x += "eighty";
//         break;
//       case 9:
//         x += "ninety";
//         break;
//       default:
//         break;
//     }
//     if (!check) {
//       switch (a % 10) {
//         case 1:
//           y += "one";
//           break;
//         case 2:
//           y += "two";
//           break;
//         case 3:
//           y += "three";
//           break;
//         case 4:
//           y += "four";
//           break;
//         case 5:
//           y += "five";
//           break;
//         case 6:
//           y += "six";
//           break;
//         case 7:
//           y += "seven";
//           break;
//         case 8:
//           y += "eight";
//           break;
//         case 9:
//           y += "nine";
//           break;
//         default:
//           break;
//       }
//     }
//     console.log(x + " " + y);
//   }
// }
// #endregion

//-------------JS TASK 2 WITH FUNCTION--------------

//#region TASK1
// const a = +prompt("Enter the number")

// console.log(PrintNumbers(a))

// function PrintNumbers(a){
//     for (let index = 1; index < 1000; index++) {
//         if( index % a == 0){
//            return index;
//         }
//     }
// }

//#endregion

//#region TASK2
// const a = +prompt("Enter the number");

// console.log(FindNumbers(a))

// function FindNumbers(a) {
//   let b = a ** (1 / 2);
//   let counter = 0;
//   for (let index = 1; index < b; index++) {
//     counter++;
//   }
//   return counter;
// }

//#endregion

//#region TASK3

// const a = +prompt("Enter the number")

// console.log(FindNumber(a))

// function FindNumber(a){
//     let b = 0
// for (let index = 0; index < a; index++) {
//   if (a % index == 0) {
//     if (index > b) {
//       b = index
//     }
//   }
// }
// return b
// }

//#endregion

//#region TASK4

// const a = +prompt("Enter the value of A");
// const b = +prompt("Enter the value of B");

// console.log(CalculateSum(a, b));

// function CalculateSum(a, b) {
//   let sum = 0;
//   if (a < b) {
//     for (let index = a + 1; index < b; index++) {
//       if (index % 7 == 0) {
//         sum += index;
//       }
//     }
//   } else if (b < a) {
//     for (let index = b + 1; index < a; index++) {
//       if (index % 7 == 0) {
//         sum += index;
//       }
//     }
//   }
//   return sum;
// }

//#endregion

//#region TASK5

// const n = +prompt("Enter the positive number");

// console.log(FindFibonacNum(n));

// function FindFibonacNum(n) {
//   let n1 = 1;
//   let n2 = 1;
//   let next;

//   if (n <= 2) {
//     console.log(1);
//   } else if (n > 0) {
//     for (let i = 0; i <= n; i++) {
//       if (i === n - 2) return n2;
//       next = n1 + n2;
//       n1 = n2;
//       n2 = next;
//     }
//   } else {
//     console.log("The number must be positive");
//   }
// }

//#endregion

//#region TASK6

// let a = prompt("Enter first number");
// let b = prompt("Enter second number");

// console.log(FindCommon(a, b))

// function FindCommon(a, b) {
//   while (a != b) {
//     if (a > b) {
//       a -= b;
//     } else {
//       b -= a;
//     }
//   }
//   return a;
// }

//#endregion

//#region TASK7

// let a = +prompt("Enter the number")

// console.log(FindMirrorNum(a))

// function FindMirrorNum(a){
// let b, sum = 0
// let z = a
// while (a > 0) {
//   b = a % 10
//   sum = sum * 10 + b
//   a = parseInt(a / 10)
// }
// return sum;
// }

//#endregion

//#region TASK8

// let n = +prompt("Enter the value of first number");
// let m = +prompt("Enter the value of second number");

// HaveSameDigit(n, m)

// function HaveSameDigit(n, m) {
//   let digitN = 0;
//   let digitM = 0;
//   let differentDigit = true;
//   while (n) {
//     digitN = n % 10;
//     n = n / 10;
//     while (m) {
//       digitM = m % 10;
//       m = parseInt(m / 10);
//       if (digitN === digitM) {
//         console.log("yes");
//         differentDigit = false;
//         break;
//       }
//     }
//   }

//   if (differentDigit) {
//     console.log("no");
//   }
// }

//#endregion
