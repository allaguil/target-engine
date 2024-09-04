import 'colors';
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';
import { saveDB, readDB } from './helpers/dbHandler.js';

console.clear();

const main = async () => {

    let option = '';
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) { // cargar tareas
        tasks.loadTasksFromArray( tasksDB );
    }

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const description = await readInput(`ENTER TARGET OFFER NAME:`.cyan);
                tasks.createTask(description);
                break;
            case '2':
                tasks.completeList();
                break;
            case '3':

                break;
        }

        saveDB( tasks.listArr );

        await pause();
    } while (option !== '0');

}

main();