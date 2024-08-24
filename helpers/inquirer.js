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
    //console.log( option ); // This is the "value" selected by the user inside the "choices" Array.
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

export { inquirerMenu, pause };