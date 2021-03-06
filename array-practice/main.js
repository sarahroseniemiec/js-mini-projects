// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const oldInventors = inventors.filter(function (inventor) {
  return inventor.year < 1600 && inventor.year > 1499;
});
console.log(oldInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// const inventornames = inventors.map(function (inventor) {
//     return inventor.first + " " + inventor.last;
// });
const inventornames = inventors.map(inventor => inventor.first + " " + inventor.last);
console.log(inventornames);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => a.year - b.year);
console.table(sortedInventors);
const ordered = inventors.sort((a,b) => (a.year < b.year) ? -1 : 1);
console.table(ordered);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const yearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
},0);

console.log(yearsLived);
// 5. Sort the inventors by years lived
const sortedInventorsTwo = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
console.log(sortedInventorsTwo);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//
// let list = document.querySelector('.mw-category');
// let items = [...list.querySelectorAll('a')];
//
// let de = items
//   .map(item => item.textContent)
//   .filter(streetName => streetName.includes('de'));
// console.log(de);
//

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log(sortedPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const numOfThing = data.reduce((allThings, thing) => {
  if (thing in allThings) {
    allThings[thing]++;
  } else {
    allThings[thing] = 1;
  } return allThings;
}, {});

console.log(numOfThing);



const peopleTwo = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const nineteen = peopleTwo.some((person) => {return ((new Date().getFullYear()) - person.year > 19);
});
console.log(nineteen);
const allNineteen = peopleTwo.every((person) => {return ((new Date().getFullYear()) - person.year > 19)});
console.log(allNineteen);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const myComment = comments.find((comment) => {return comment.id === 823423});
console.log(myComment);

// Array.prototype.findIndex()
// Find the comment with this ID

const commentIndex = comments.findIndex((comment) => comment.id === 823423);
console.log(commentIndex);

// delete the comment with the ID of 823423
const newComments = comments.splice(commentIndex, 1);

// const newComments = [
//   ...comments.slice(0, commentIndex),
//   ...comments.slice(commentIndex + 1)
// ];
console.log(comments);
