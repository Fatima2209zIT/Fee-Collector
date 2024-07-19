#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n\t ^^^ Welcome to Fatima Zeeshan School's Fee-Collector ^^^ \n\t");
const classSelection = await inquirer.prompt({
    name: "ClassSelector",
    type: "list",
    message: "Kindly select the class!",
    choices: [
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "Class 6",
        "Class 7",
        "Class 8",
        "Class 9",
        "Class 10",
    ],
});
if (classSelection.ClassSelector === "Class 1") {
    console.log(chalk.bgBlueBright("Please submit 3000Rs as class one's fee!"));
}
else if (classSelection.ClassSelector === "Class 2") {
    console.log(chalk.bgGray("Please submit 4000Rs as class two's fee!"));
}
else if (classSelection.ClassSelector === "Class 3") {
    console.log(chalk.bgCyanBright("Please submit 5000Rs as class three's fee!"));
}
else if (classSelection.ClassSelector === "Class 4") {
    console.log(chalk.bgGreenBright("Please submit 6000Rs as class four's fee!"));
}
else if (classSelection.ClassSelector === "Class 5") {
    console.log("Please submit 7000Rs as class fives's fee!");
}
else if (classSelection.ClassSelector === "Class 6") {
    console.log(chalk.bgYellowBright("Please submit 8000Rs as class six's fee!"));
}
else if (classSelection.ClassSelector === "Class 7") {
    console.log(chalk.bgMagentaBright("Please submit 9000Rs as class seven's fee!"));
}
else if (classSelection.ClassSelector === "Class 8") {
    console.log(chalk.bgRed("Please submit 10000Rs as class eight's fee!"));
}
else if (classSelection.ClassSelector === "Class 9") {
    console.log(chalk.bgYellowBright("Please submit 14000Rs as class nine's fee!"));
}
else if (classSelection.ClassSelector === "Class 10") {
    console.log(chalk.blueBright("Please submit 14000Rs as class ten's fee!"));
}
const Classfees = {
    "Class 1": 3000,
    "Class 2": 4000,
    "Class 3": 5000,
    "Class 4": 6000,
    "Class 5": 7000,
    "Class 6": 8000,
    "Class 7": 9000,
    "Class 8": 10000,
    "Class 9": 14000,
    "Class 10": 14000,
};
const selectedClass = classSelection.ClassSelector;
const expectedFee = Classfees[selectedClass];
let correctAmountSubmitted = false;
while (!correctAmountSubmitted) {
    const Rupees = await inquirer.prompt({
        name: "Rupees",
        type: "input",
        message: "Enter the amount you want to submit:",
    });
    const submittedAmount = parseInt(Rupees.Rupees, 10);
    if (submittedAmount === expectedFee) {
        console.log(chalk.bgBlue("Thank you for submitting the amount"));
        correctAmountSubmitted = true;
    }
    else {
        console.log(chalk.red(`Incorrect amount. The required fee for ${selectedClass} is ${expectedFee} Rs. Please try again.`));
    }
}
console.log("***Thank you for paying the fees see you next month :)***");
