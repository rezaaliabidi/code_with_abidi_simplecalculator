#! /usr/bin/env node
import inquirer from "inquirer";
//Asking questions from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "select any one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answers);
// conditional statements If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    "Please select correct operator";
}
