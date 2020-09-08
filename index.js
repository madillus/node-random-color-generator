const randomColor = require('randomColor');
const chalk = require('chalk');



console.log(randomColor({ hue: 'random', luminosity: 'random', count: 1 }));
console.log(chalk('Hello world!'));

if (randomColor.chalk) { console.log("I'm right") }
else { console.log("I'm stupid") }


