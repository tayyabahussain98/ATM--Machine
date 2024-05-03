#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Show My Balance.... Done
// 2) Ask Pin Code.... Done
// 3) Ask Withdraw & Check Balance.... Done
// 4) Select Withdraw and input your withdraw amount.... Done
// 5) Select Check Balance show your remaining balance.... Done
console.log("Welcome To My ATM Machine!!!!");
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct your Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    //console.log("operationAns");
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                message: "enter your amount",
                type: "number"
            },
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is:" + myBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is:" + myBalance);
    }
    if (operationAns.operation === "fast cash") {
        let fastAns = await inquirer.prompt([
            {
                name: "fast",
                message: "How much money do you want to withdraw?",
                type: "list",
                choices: [2000, 4000, 5000, 7000],
            },
        ]);
        myBalance -= fastAns.fast;
        console.log("Your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect your Pin Number");
}
console.log("Have A Nice Day!!!!");
