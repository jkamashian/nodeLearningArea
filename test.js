var readlineSync = require('readline-sync');

var input = readlineSync.question('What Year were you born?');

var birthYear = parseInt(input);
var currentYear = 2021

var Age= currentYear - birthYear
console.log("you are",Age )
