import inquirer from 'inquirer';
import 'colors';

const menuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'WHAT DO YOU WANT TO DO ?'.yellow,
        choices: [
            { value: '1', name: `${'1.'.cyan} Create Target Offer` },
            { value: '2', name: `${'2.'.cyan} List Target Offers` },
            { value: '3', name: `${'3.'.cyan} Delete Target Offer` },
            { value: '0', name: `${'0.'.cyan} Exit` }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('             TARGET OFFER ENGINE             \n'.bgWhite.red.bold);

    const { option } = await inquirer.prompt(menuQuestions);
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

const readInput = async (message, key) => {
    const question = [
        {
            type: 'input',
            name: key,
            message,
            validate(value) {
                if (value.length === 0) {
                    return `Please enter a valid ${key}`;
                }
                return true;
            }
        }
    ];

    const input = await inquirer.prompt(question);
    return input; // Will return { [key]: value }
}

const selectRequirement = async () => {
    const question = [
        {
            type: 'list',
            name: 'requirement',
            message: 'WHAT IS THE REQUIREMENT?'.cyan,
            choices: [
                { value: '1', name: 'Copy Update' },
                { value: '2', name: 'Remove Component' },
                { value: '3', name: 'Move existing Component' },
                { value: '4', name: 'Create and append New Component' },
                { value: '5', name: 'Update Hyperlink' },
                { value: '6', name: 'Change Img Source' },
            ]
        }
    ];

    const { requirement } = await inquirer.prompt(question);
    return { requirement };
}

const selectOfferExperiences = async () => {
    const question = [
        {
            type: 'list',
            name: 'offerExperiences',
            message: 'HOW MANY OFFER EXPERIENCES?'.cyan,
            choices: [
                { value: '1', name: 'Control & ExpB' },
                { value: '2', name: 'Control, ExpB & ExpC' },
                { value: '3', name: 'Control, ExpB, ExpC & ExpD' },
            ]
        }
    ];

    const { offerExperiences } = await inquirer.prompt(question);
    return { offerExperiences };
}

export { inquirerMenu, pause, readInput, selectRequirement, selectOfferExperiences };