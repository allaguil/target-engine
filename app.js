import 'colors';
import { inquirerMenu, pause, readInput, selectRequirement, selectOfferExperiences } from './helpers/inquirer.js';
import { Offers } from './models/offers.js';
import { saveDB, readDB } from './helpers/dbHandler.js';

import { createHTMLFile } from './helpers/fileHandler.js'; // Import the new module

console.clear();

const main = async () => {

    let option = '';
    const offers = new Offers();

    const offersDB = readDB();

    if (offersDB) { // cargar tareas
        offers.loadTasksFromArray(offersDB);
    }

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                // Prompt for JIRA number
                const { jira } = await readInput(`ENTER THE JIRA NUMBER:`.cyan, 'jira');

                // Prompt for description
                const { description } = await readInput(`ENTER THE OFFER DESCRIPTION:`.cyan, 'description');

                // Prompt for the number of offer experiences
                const { offerExperiences } = await selectOfferExperiences();

                // Prompt for requirement
                const { requirement } = await selectRequirement();


                // Prompt for DOM selector
                const { domSelector } = await readInput('ENTER THE DOM SELECTOR'.cyan, 'domSelector');

                // Prompt for new Copy Content
                const { copyContent } = await readInput('ENTER THE NEW COPY CONTENT:'.cyan, 'copyContent');

                // Create the HTML file
                createHTMLFile(jira, domSelector);
                // createHTMLFileFromTemplate


                offers.createOffer(jira, description, requirement, offerExperiences, domSelector, copyContent);
                break;
            case '2':
                offers.completeList();
                break;
            case '3':

                break;
        }

        saveDB(offers.listArr);

        await pause();
    } while (option !== '0');
}

main();