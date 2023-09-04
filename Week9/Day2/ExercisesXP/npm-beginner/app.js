import chalk from 'chalk';

(() => {
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
    console.log(chalk.blue.bgRed.bold('Hello world!'));
    console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
    console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
})()
