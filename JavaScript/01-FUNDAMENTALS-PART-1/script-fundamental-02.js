'use strict'
// function logger() {
//   console.log('My name is Jonas')
// }
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges)
//   const juice = `Juice with ${apples} Apple and ${oranges} Oranges`
//   return juice
// }
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// function fruitProcesor(apple, orange) {
//   console.log(apple, orange)
//   const juice = `Juice with ${apple} amd ${orange} `
//   return juice
// }
// const total = fruitProcesor(5, 0)
// console.log(total)

// function makeSmoothie(banana, strawberry) {
//   console.log(banana, strawberry)
//   const smoothieForBoth = `smoothie with ${banana} Banana and ${strawberry} Strwaberry`
//   return smoothieForBoth
// }
// const smootheie = makeSmoothie(3, 2)
// console.log(smootheie)

// /////////////**************function declation************************* */
// function calcAge1(birthYear) {
//   return 2037 - birthYear
// }
// const age1 = calcAge1(1991)
// console.log(age1)
// /////////////**************function expression************************* */
// const calcAge2 = function calcAge1(birthYear) {
//   return 2037 - birthYear
// }
// const age2 = calcAge1(1992)
// console.log(age2)

// /////////////**************arrow function************************* */
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2035 - birthYear
//   const retirementAge = 60 - age
//   return `${firstName} retires in ${retirementAge} years from now`
// }
// console.log(yearsUntilRetirement(1990, 'Jonas'))
// console.log(yearsUntilRetirement(1995, 'Bob'))

// /////////////**************  function calling other functions************************* */

// function fruitCutPieces(fruits) {
//   return fruits * 4
// }

// function fruitProcesor(apple, orange) {
//   const applePieces = fruitCutPieces(apple)
//   const orangePieces = fruitCutPieces(orange)

//   console.log(applePieces, orangePieces)
//   return `${applePieces} and ${orangePieces}`
// }
// console.log(fruitProcesor(2, 3))

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// console.log(calcAverage(44, 23, 71)) // Dolphins
// console.log(calcAverage(65, 54, 49)) // Koalas
// test data 1

// const calcAverage = (a, b, c) => (a + b + c) / 3

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`)
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
//   } else {
//     console.log('No team wins...')
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas)
// ///test data 2
// const scoreDolphins2 = calcAverage(85, 54, 41)
// const scoreKoalas2 = calcAverage(23, 34, 27)
// checkWinner(scoreDolphins2, scoreKoalas2)

// ///////////////////////////////////Array Function/////////////////////////

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)
// console.log(friends[0])
// console.log(friends[2])
// console.log(friends[friends.length - 1])
// friends[2] = 'Jay'
// console.log(friends)

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends]
// console.log(jonas)
// console.log(jonas.length)

// const years = new Array(1994, 2001, 1998, 1999, 2000, 'Rajesh', 'Ravi')
// console.log(years)

// const calcAge = function calcAge(birthYear) {
//   return 2037 - birthYear
// }
// const years = [1991, 1992, 1993, 1994]
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// // console.log(age1,age2,age3)

// //  const ages= [age1,age2,age3]
// //  or
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ]
// console.log(ages)

// ///////////////////////////////////////Array Methods/////////////////////////

//push

// const friends = ['Michael', 'Steven', 'Peter']

// //  add elements
// friends.push('Jay')
// console.log(friends)

// friends.unshift('John')
// console.log(friends)

// // remove elements
// friends.pop()
// console.log(friends)

// friends.shift()
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Jay'))

// console.log(friends.includes('Steven'))
// console.log(friends.includes('Jay'))

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven')
// }

// ///////////////////////////////////CHALLENGE #2////////////////////////////////////////////////

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// const calcTip = bill => bill>=50 && bill<=300 ?
// bill*0.15 : bill*0.20

// const calcTip= (bill)=>{
//     if(bill>=50 && bill<=300){
//         return(bill*0.15)
//     }
//     else{ return(bill*0.20)}
// }
// console.log(calcTip(100))

//  const bills =[125,555,44]
//  const tips= [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])]
//  console.log(tips)

//  const total = [ bills[0]+tips[0],bills[1]+tips[1] , bills[2]+tips[2] ]
//   console.log(total)

// /////////////////////////////////////Objects/////////////////////////////////////

// const jonasArray = [
//   'Jonas',
//   'Schmedtnam',
//   2037 - 1991,
//   'Teacher',
//   ['Michael', 'Peter', 'Steven'],
// ]
// console.log(jonasArray)
////////////////////////////////////////////////dot vs vs bracket notation/////////////////////////////////////

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtnam',
//   age: 2037 - 1991,
//   job: 'Teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// }

// const interestedIn = prompt(
//   'what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends',
// )
// console.log(jonas[interestedIn])
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn])
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job, and friends`,
//   )
// }
// jonas.location = 'India'
// jonas['twitter'] = '@jonasschmedtman'
// console.log(jonas)
// console.log(
//   `jonas has ${jonas.friends.length} friends and his best friend name is ${jonas.friends[0]}  `,
// )

// /////////////////////////////////////objects methods/////////////////////////////////////

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtnam',
//   //   age: 2037 - 1991,
//   birthYear: 1991,
//   name: 20,
//   job: 'Teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriverLicence: true,
//   calcAge: function (birthYear) {
//     this.age = 2037 - this.birthYear
//     return this.age
//   },
// }
// console.log(jonas.calcAge())
// console.log(jonas.calcAge())
// console.log(jonas.calcAge())

//   console.log(jonas['calcAge'](1991))

// ////////////////////////////////////// challenge//////////////////////////////////////////////////////
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtnam',
//   //   age: 2037 - 1991,
//   birthYear: 1991,
//   name: 20,
//   job: 'Teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriverLicence: false,
//   calcAge: function (birthYear) {
//     this.age = 2037 - this.birthYear
//     return this.age
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}
//      years old ${this.job}, and he has  ${
//       this.hasDriverLicence ? 'a' : 'No'
//     } driver's license`
//   },
// }
// //   console.log(jonas['calcAge'](1991))
// console.log(jonas.getSummary())

// ///////////////////////////////////////challenge/////////////////////////////////////
// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
// }
// const john={
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
// }
// mark.calcBMI = function () {
//   this.bmi = this.mass / (this.height * this.height)
//   return this.bmi
// }
// john.calcBMI = function () {
//   this.bmi = this.mass / (this.height * this.height)
//   return this.bmi
// }

// /* Write your code below. Good luck! 🙂 */

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 70,
//     height: 1.69,
//     calcBmi: function (){
//         this.bmi= this.mass/(this.height * this.height)

//         return this.bmi
//     }
// }
//  mark.calcBmi()
// const john={
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBmi: function() {
//          this.bmi= this.mass/(this.height * this.height)
//           return this.bmi
// }
// }
// john.calcBmi()

// if(mark.bmi>john.bmi){
//     console.log(`${mark.fullName}'s BMI ${mark.bmi}is higher than ${john.fullName}`)
// }else if(john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//     `Both have the same BMI of ${mark.bmi}`
// }

// /////////////////////////////////////// FOR-loop/////////////////////////////////////

//  console.log("lifting weight")
//  console.log("lifting weight")
//  console.log("lifting weight")
//  console.log("lifting weight")
//  console.log("lifting weight")
//  console.log("lifting weight")
//  console.log("lifting weight")
//  console.log("lifting weight")

//  //rep=rep+1
//  for(let rep=1; rep<=10; rep++  ) {
//      console.log(`lifting weight ${rep}`)
//  }

// const jonasArray = [
//   'Jonas',
//   'Schmedtnam',
//   2037 - 1991,
//   'Teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ]
// const types=[]
// for(let i=0; i<jonasArray.length;i++){
//     console.log(jonasArray[i] , typeof jonasArray[i])
//     // filling types array
//     //   types[i]= typeof jonasArray[i]
//     types.push(typeof jonasArray[i])

// }
//   console.log(types)

// const years = [1991, 2007, 1969, 2020]
// //  2037
// const age = []
// for (let i = 0; i < years.length; i++) {
//   age.push(2037 - years[i])
// }
// console.log(age)

// ////////////////////////continue and break/////////////////////////////////////
// const jonas = [
//   'Jonas',
//   'Schmedtnam',
//   2037 - 1991,
//   'Teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ]

// // //// continue//////
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue
//   console.log(jonas[i], typeof jonas[i])
// }

// // //// break with number//////
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break
//   console.log(jonas[i], typeof jonas[i])
// }

// /////////////////////////////////////Looping Backwards and Loops in Loops/////////////////////////////////////

//   const jonas = [
//   'Jonas',
//   'Schmedtnam',
//   2037 - 1991,
//   'Teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ]
// // console.log(jonas)

// //0,1,2,3,4
// //4,3,2,1,0

// for(let i=jonas.length-1;i>=0; i--){
//     console.log(i, jonas[i])
// }

// for(let exercise=1; exercise<4;exercise++){
//     console.log(`starting exercise----------${exercise}` )

//     for(let rep=1; rep<7;rep++){
//         console.log(`Exercise ${exercise}: lifting weight reps  ${rep}`)
//     }
// }
// /////////////////////////////////////While Loop/////////////////////////////////////

// While loops are used when you don't know how many times you will loop.
// For loops are used when you know, how many umes the loop will run.
// let dice = Math.trunc(Math.random() * 6) + 1
// while (dice !== 6) {
//   console.log(`You got a random number${dice}`)
//   dice = Math.trunc(Math.random() * 6) + 1
// }
// console.log('You got 6')

// ///////////////////////////////////////CHALLENGE #4//////////////////////////////////////
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

//  const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

//  const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
//  let tips=[]
//  let totals=[]

//  for(i=0; i<bills.length;i++){

//      tips.push(calcTip(bills[i]))
//      totals.push(bills[i]+calcTip(bills[i]))
//  }
//  console.log('tips: ',tips)
//  console.log(totals)

//  const calcAverage=(arr)=>{
//      let sum=0
//   for(let i=0;i<arr.length;i++){
//         sum +=arr[i]
//     //   sum=sum+arr[i]
//         }
//      return sum/arr.length
//  }
//  console.log("averageTotal",calcAverage(totals))
