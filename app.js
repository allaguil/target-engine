import 'colors';
import { inquirerMenu } from './helpers/inquirer.js';

console.clear();

const main = async () => {

    let option = '';
    do {
        option = await inquirerMenu();
        console.log({ option });

    } while (option !== '0');

}

main();