import inquirer from 'inquirer';


let wordCount: {
    text : string
} = await inquirer.prompt(
    {
        name: "text",
        message: "Type your text:",
        type: "input"
    }
)

let word: string[] = wordCount.text.trim().split(" ");
console.log(`The word count of your text is ${word.length}`);
