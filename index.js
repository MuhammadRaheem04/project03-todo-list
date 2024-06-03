import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    const todoQuestions = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add a todo", "Delete a todo", "View all todos", "Exit"],
    });
    if (todoQuestions.action === "Add a todo") {
        const addTodoQuestions = await inquirer.prompt({
            name: "text",
            type: "input",
            message: "Enter the todo item:",
        });
        todoList.push({ text: addTodoQuestions.text });
        // todoList.push(todoQuestions.text)
        console.log(`Todo "${addTodoQuestions.text}" added!`);
    }
    else if (todoQuestions.action === "Delete a todo") {
        if (todoList.length === 0) {
            console.log("There are no todos to delete.");
        }
        else {
            const deleteTodoQuestions = await inquirer.prompt({
                name: "index",
                type: "number",
                message: "Enter the index of the todo to delete (starting from 1):",
            });
            const indexToDelete = deleteTodoQuestions.index - 1;
            if (indexToDelete >= 0 && indexToDelete < todoList.length) {
                const deletedTodo = todoList.splice(indexToDelete, 1)[0];
                console.log(`Todo "${deletedTodo.text}" deleted!`);
            }
            else {
                console.log("Invalid index. Please enter a valid todo index.");
            }
        }
    }
    else if (todoQuestions.action === "View all todos") {
        if (todoList.length === 0) {
            console.log("There are no todos in the list.");
        }
        else {
            console.log("Your todo list:");
            todoList.forEach((todo, index) => {
                console.log(`${index + 1}. ${todo.text}`);
            });
        }
    }
    else if (todoQuestions.action === "Exit") {
        condition = false;
        console.log("Exiting the program.");
    }
    else {
        console.log("Invalid action. Please choose a valid option.");
    }
}
