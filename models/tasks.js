import { Task } from "./task.js";

class Tasks {

    _list = {};

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    constructor( ) {
        this._list = {};
    }

    loadTasksFromArray( tasks = [] ) {
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }

    createTask( description = '' ) {
        const task = new Task( description );
        this._list[task.id] = task;
    }

    completeList() {
        console.log();
        this.listArr.forEach( (task, i) => {
            const idx = `${i + 1}.`.green;
            const { description, completed } = task;
            const state = (completed) ? 'Completed'.green : 'Pending'.red;
            console.log(`${idx} ${description} :: ${state}`);
        });
    }
}

export { Tasks };

