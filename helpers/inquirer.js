import inquirer from 'inquirer';
import 'colors';

const menuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'WHAT DO YOU WANT TO DO ?'.yellow,
        choices: [
            { value: '1', name: '1. Create Target Offer' },
            { value: '2', name: '2. Modify Target Offer' },
            { value: '3', name: '3. Delete Target Offer' },
            { value: '0', name: '0. Exit' }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('             TARGET ENGINE APP             \n'.bgWhite.red.bold);

    const { option } = await inquirer.prompt(menuQuestions);
    //console.log( option ); // This is the "value" selected by the user inside the "choices" Array, que hace referencia a el => name: 'option' de cada pregunta.
    return option;
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${ 'ENTER'.green.underline } to continue`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const readInput = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ) {
                if( value.length === 0 ){
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);
    return description;
}

export { inquirerMenu, pause, readInput };