import inquirer from 'inquirer';
import 'colors';

const menuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'WHAT DO YOU WANT TO DO ?'.yellow,
        choices: [
            { value: '1', name: 'Create Target Offer' },
            { value: '2', name: 'Modify Target Offer' },
            { value: '3', name: 'Delete Target Offer' },
            { value: '0', name: 'Exit' }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('             TARGET ENGINE APP             \n'.bgWhite.red.bold);

    const answers = await inquirer.prompt(menuQuestions);
    console.log(answers.option); // This is the "value" selected by the user inside the "choices" Array.
    return answers.option;
}

export { inquirerMenu };