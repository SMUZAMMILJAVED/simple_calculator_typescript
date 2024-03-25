#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: ("Enter 1st number"),
        type: "number",
        name: 'firstnumber'
    },
    {
        message: ("Enter 2nd number"),
        type: "number",
        name: 'secondnumber'
    }, {
        message: ("Select operation"),
        type: "list",
        name: 'operator',
        choices: ["add", "sub", "mul", "div"]
    }
]);
if (answer.operator === "add") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "sub") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "mul") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "div") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log(" please select valid operator");
}
