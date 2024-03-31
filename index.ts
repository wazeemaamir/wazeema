#! /user/bin/env node
//import inquirer from "inquirer";

let todos: string[] = [];
let condition = true;

while(condition){
    //l//et addingtodos = await inquirer.prompt([
        // {
        //     name: "todo",
        //     type: "input",
        //     message: "what do you want to add in your todos",
        // },
        {
        //     name: "addMoreTodos",
        //     type: "confirm",
        //     message: "Are you sure you add more todos",
        //     default: "false",
        // },
    // ]);

    // todos.push(addingtodos.todo);
    // condition = addingtodos.addMoreTodos;
    console.log(todos);
}

// let removeTodos = await inquirer.prompt([
//     {
//         name: "removeTodo",
//         type: "confirm",
//         message: "Do you want to remove a todo",
//         default: "false",
//     },
// ]);

// if(removeTodos.removeTodo){
    todos.pop();
}

console.log("Your todos:");
for(let i = 0; i < todos.length; i++){
    console.log(todos[i]);
}