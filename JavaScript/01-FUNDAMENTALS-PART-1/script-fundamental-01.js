// // mathematic operator:
// const now = 2025
// const ageJones = now - 1994
// const ageSarah = now - 2000
// const ageSum = ageJones + ageSarah
// console.log(ageSum)

// const firstName = 'Jones'
// const lastName = 'Sarah'
// const fullName = firstName + ' ' + lastName
// console.log(fullName)

// // assignment operator:
// let x = 10 + 5
// x += 10 // x = x + 10
// x -= 10 // x = x - 10

// x *= 4 // x = x * 4
// console.log(x)

// // comparison operator:
// console.log(ageJones > ageSarah) // true
// console.log(ageSarah >= 35)
// console.log(ageJones < ageSarah)

// // why substraction is taking place before > or comparison
//it is becase of operator precedence
// const now = 2025
// const ageJones = now - 1994
// const ageSarah = now - 2000

// console.log(now - 1994 > now - 2000) // true
// const averageAge = ageJones + ageSarah / 2
// console.log('Jones', ageJones)
// console.log('Sarah', ageSarah)

// //without ()
// console.log(ageJones + ageSarah / 2)
// // with ()
// console.log((ageJones + ageSarah) / 2)

// const firstName = 'Jonas'
// const job = 'teacher'
// const birthYear = 1994
// const year = 2025
// const jonas =
//   'I am ' +
//   firstName +
//   '. ' +
//   ' My job is ' +
//   job +
//   '. I am ' +
//   (year - birthYear) +
//   ' ' +
//   'years old.'
// console.log(jonas)

// const JonasNew = ` I am ${firstName}. My job is ${job}. I am ${
//   2025 - 1994
// } years old. `
// console.log(JonasNew)

// ////////////////////question
// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

//  operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height)

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const bmiMark = massMark / (heightMark * heightMark)
// const bmiJohn = massJohn / (heightJohn * heightJohn)

// if (bmiMark > bmiJohn) {
//   console.log(` Mark's BMI is ${bmiMark} is higher than John's ${bmiJohn}!`)
// } else {
//   console.log(` John's BMI is ${bmiJohn} is higher than Mark's ${bmiMark}!`)
// }

// // type conversion:
// const inputYear = '1994'
// console.log(Number(inputYear), inputYear) // 1994 '1994'
// console.log(inputYear + 18)
// console.log(Number(inputYear) + 18)

// // type coercion
// console.log('I am ' + 23 + ' years old') // I am 23 year
// // s old
// console.log('23' - '10' + '5')
// console.log('23' - '10' + '5')
// console.log('23' + '10' - '23')
// console.log('23' - '10' + '23')

// let n = '10' - '10'
// n = n + 10
// console.log(n) // 100
// //1010-10 101010

// console.log('-23' - '10' + 5)
// console.log('10' / '2')
// console.log('10' * '2')

// falsy values : 0, null, undefined, '', NaN
// let height = ''
// if (height) {
//   console.log('Height is defined')
// } else {
//   console.log('Height is not defined')
// }

// // equality operator:
// == compare karna
// === compare with type
// const age = 18
// if (age === 18) {
//   console.log('You just became an adult (Strict)')
// }
// const ageNew = '18'
// if (ageNew == 18) {
//   console.log('You just became an adult (Loose)')
// }

// // prompt is used to take input from user
// const favourite = Number(prompt('What is your age?'))
// console.log(favourite)
// console.log(typeof favourite) // string

// if (favourite === 23) {
//   console.log('It is an amazing number (Strict)')
// } else if (favourite === 7) {
//   console.log('It is also an amazing number (Strict)')
// } else if (favourite === 9) {
//   console.log('It is also an amazing number (Strict)')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) {
//   console.log('Why not 23?')
// }

// Operators
// Logical Operators
//  && || !
// const hasDriversLicense = true
// const hasGoodVision = true
// const isTired = false
// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!')
// // } else {
// //   console.log('Someone else should drive...')
// // }

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive...')
// }

// challenge
//  Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// const scoreDolphins = (96 + 108 + 89) / 3
// console.log(scoreDolphins)

// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy')
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy')
// } else {
//   console.log('Both win the trophy')
// }

////////////////////////////////////// /////////////////////////switch statement////////////////

// const day = 'sunday'
// if (day === 'monday') {
//   console.log('Plan course structure')
// } else if (day === 'tuesday') {
//   console.log('prepare the theory videos')
// } else if (day === 'wednesday') {
//   console.log('Write code examples')
// } else if (day === 'thursday' || day === 'friday') {
//   console.log('Record videos')
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend')
// } else {
//   console.log('Not a valid day')
// }

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure')
//     break
//   case 'tuesday':
//     console.log('prepare the theory videos')
//     break
//   case 'wednesday':
//     console.log('Write code examples')
//     break
//   case 'thursday':
//   case 'friday':
//     console.log('Record videos')
//     break
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend')
//     break
//   default:
//     console.log('Not a valid day')
// }

// // conditional (ternary) operator:
// const age = 23

// const drinkAge = age >= 18 ? (drink = 'wine') : (drint = 'water')
// console.log(drinkAge)
// console.log(`I like to dring ${drinkAge}`)

//////////////////////////////////////////////////////////////////////////// CHALLENGE #4////////////////////////

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// const bill = 275
// const tip = bill >= 50 && bill <= 275 ? bill * 0.15 : bill * 0.2
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${
//     bill + tip
//   }.`,
// )
