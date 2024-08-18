import inquirer from "inquirer";
import chalk from 'chalk';
let todolist = [];
let starting = async () => {
    let option = await inquirer.prompt([{
            message: 'what you want to do',
            type: "list",
            name: 'select',
            choices: ['ADD SOMETHING IN YOUR TODO LIST', 'REMOVE SOMETHING IN TODOLIST', 'VIEW TODOLIST', 'EXICT']
        }]);
    if (option.select == 'ADD SOMETHING IN YOUR TODO LIST') {
        let sentence = await inquirer.prompt([{
                message: chalk.green('PLEASE ENTER SOMETHING WHICH YOUR WANTTO ADD IN TODOLIST'),
                type: "input",
                name: 'add'
            }]);
        todolist.push(sentence.add);
        console.log(chalk.yellow('SENTECE ADD SECESSFULLY IN YOUR TODO LIST'));
        if (todolist.includes('')) {
            let value = todolist.indexOf('');
            todolist.splice(value, 1);
        }
        await starting();
    }
    else if (option.select == 'REMOVE SOMETHING IN TODOLIST') {
        let remove = await inquirer.prompt([{
                message: chalk.green('PLEASE ENTER THE SENTENCE WHICH YOU WANT TO REMOVE FROM LIST'),
                name: "dlt",
                type: "input"
            }]);
        if (todolist.includes(remove.dlt)) {
            let value = todolist.indexOf(remove.dlt);
            todolist.splice(value, 1);
            console.log(chalk.yellow('SENTENCE DELTE SUCESSFULLY FROM TODOLIST'));
            await starting();
        }
        else {
            console.log(chalk.red('THIS SENTENCE IS NOT PRESENT IN TODO LIST KINDLY ADD FIRST'));
            await starting();
        }
    }
    else if (option.select == 'VIEW TODOLIST') {
        if (todolist.length == 0) {
            console.log(chalk.red('YOUR TODOLIST IS EMPTY'));
            await starting();
        }
        else {
            console.log(chalk.yellow('YOUR TODO LIST IS HERE'));
            for (let i = 0; i < todolist.length; i++) {
                console.log(`${i}:${todolist[i]}`);
            }
            await starting();
        }
    }
    else if (option.select == 'EXICT') {
        console.log(chalk.green('GOOD BYE '));
    }
};
starting();
