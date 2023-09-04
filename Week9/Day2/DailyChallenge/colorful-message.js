// npm i chalk@4.1.2 
const chalk = require('chalk');

function callMsg() {
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
    console.log(chalk.blue.bgRed.bold('Hello world!'));
    console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
    console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
}

module.exports = {callMsg};