#! /usr/bin/env node
//                                      WORD-COUNTER
//==========================================================================================================
//Importing inquirer and chalk packages.
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourful heading
console.log(chalk.bold.cyanBright("\n\t\tWelcome To Word-Counter"));
console.log("=".repeat(60));
//Prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "\nEnter a sentence :"
    }
]);
//Trimming the sentence and splitting it into words based spaces
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("\nSentence Words :"));
console.log(words);
console.log(chalk.bold(`\nWords Count :${chalk.bold.redBright(words.length)}\n`));
console.log("=".repeat(60));
