const randomColor = require('randomColor');
const chalk = require('chalk');

const chooseColor = {
  hue: process.argv[2],
  luminosity: process.argv[3],
};

const colorInput = randomColor(chooseColor);

const hexSquare = `
############################## 
############################## 
##############################   
########              ########
########    ${colorInput}   ########
########              ########
##############################
##############################
##############################` ;

console.log(chalk.hex(`${colorInput}`).bold(`${hexSquare}`));