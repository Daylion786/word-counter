import inquirer from 'inquirer';
let wordCount = await inquirer.prompt({
    name: "text",
    message: "Type your text:",
    type: "input"
});
let word = wordCount.text.trim().split(" ");
console.log(`The word count of your text is ${word.length}`);
