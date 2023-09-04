import { TodoList } from "./todo.js";

const newList = new TodoList;
newList.addTasks("Buy milk");
newList.addTasks("Buy bread");
newList.addTasks("Walk with dog");

console.log(newList.listAll());

newList.markComplete(1);

console.log(newList.listAll());
