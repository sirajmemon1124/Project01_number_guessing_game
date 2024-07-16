import inquirer from "inquirer";







const randomNumber = Math.floor(Math.random()* 6);
console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guessed a number: between 1-7",
    },
]);

// console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
console.log("congratulations! you guessed right number")
} else {
    console.log("you guessed wrong number")
}