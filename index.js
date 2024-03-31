#! /user/bin/env node
//import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message: "Enter first name", type: "number", name: "firstnumber"},
    {message: "Enter second number", type: "number", name: "secondnumber"},
    {
        message: "Selct one of the operator to perform an operation",
        type: "list",
        name: "operators",
        choices: [ "Addition", "Substraction", "Multipication", "Division" ],
    },
]);

//conditional statemeNt
if (answer.operators === "Addition") {
    console.log(+answer.firstname + answer.secondname);
}
else if(answer.operators === "Substaction") {
    console.log(+answer.firstname - answer.secondname);
}
else if(answer.operators === "Multipication") {
    console.log(+answer.firstname * answer.secondname);
}
else if(answer.operators === "Division") {
    console.log(+answer.firstname / answer.secondname);
}