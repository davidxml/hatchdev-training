interface Task {
    id: number
    title: string
    priority: number
}

class TaskManager {
    private tasks: Task[] = [];
    // Add tasks
    public addTask (id: number, title: string, priority: number): void {
        // Define a new task (task to be added)
        const newTask: Task = {id, title, priority};
        // Action that adds the new task 
        this .tasks.push(newTask)
        console.log(`Added: '${title}'`)
    }

    public BadSearchByID(targetID: number): Task | null {
        for (let i = 0; this.tasks.length; i++) {
            if (this.tasks[i].id === targetID) {
                return this.tasks[i] // we found what we are searching for 
            }  
        }
        return null //We couldn't find the task we are searching for 
    }

    // Using O(logn)
    public GoodSearchByID (targetID: number): Task | null {
        this.tasks.sort((a, b) => a.id - b.id);
        let left = 0
        let right = this.tasks.length - 1

        while( left <= right ) { 
            let mid = Math.floor((left + right)/ 2) // getting the average
            let currentTask = this.tasks[mid]

            if (currentTask.id === targetID) {
                return currentTask;  // Task found
            } else if (currentTask.id < targetID) {
                left = mid + 1 // Throws away left side 
            } else {
                right = mid - 1 // Throws away the right side 
            }
        }
        return null;
    }

    //Sort by priority Method - using (n log n)

    public slowSortByPriority(): void{
        this.tasks.sort((a, b) => b.priority - a.priority)
    }

    public printTasks():void {
        console.log("\n ---------------Current Task List -----------")
        this.tasks.forEach(t => console.log(`[ID: ${t.id}] ${t.title} - Priority ${t.priority}`))
        console.log("-----------------------------\n")
    }
}


// initialise the task manager 

const manager = new TaskManager();
manager.addTask(1, "Build weekend project", 10)
manager.addTask(2, "Machine learning", 8)
manager.addTask(3, "Backend Engineering", 8)
manager.addTask(4, "Competetive Programming", 8)
manager.addTask(5, "Health", 10)
manager.addTask(6, "Eat", 5)
manager.addTask(7, "Sleep", 5)

manager.printTasks()

manager.GoodSearchByID(3) // Searching for task with ID 3
console.log(`\n Searching for task with ID 3: ${manager.GoodSearchByID(3)?.title}`)         


//SORTING 
console.log("\n Sorting tasks by highest priority")
manager.slowSortByPriority()
manager.printTasks()

// E-commerce Shopping Cart 