import 'colors';
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { Tasks } from './models/tasks.js';

console.clear();

const main = async () => {

    let option = '';
    const tasks = new Tasks();

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const description = await readInput(`ENTER TARGET OFFER NAME: `.cyan);
                console.log(description);
                break;
            case '2':
                console.log(tasks._listado);
                break;
            case '3':

                break;
        }

        await pause();
    } while (option !== '0');

}

main();