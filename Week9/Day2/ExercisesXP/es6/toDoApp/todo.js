export class TodoList{
    constructor() {
        this.tasks = [];
        this.counter = 0;
    }
    
    addTasks(task) { 
        this.tasks.push({id: this.counter, todo: task, completed:false});
        this.counter++;
    }

    markComplete(id) {
        this.tasks[id]["completed"] = true;
    }

    listAll() {
        return this.tasks
    }
}
