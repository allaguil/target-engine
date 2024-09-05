import fs from 'fs';
import path from 'path';

const folderPath = './tntOffers';
const templatePath = path.join(folderPath, 'tnt-template.html');



const createHTMLFile = (jira, domSelector) => {

    const filePath = path.join(folderPath, `${jira}.html`);
    
    // Read the existing template
    let templateContent = fs.readFileSync(templatePath, 'utf-8');
    
    // Replace placeholders in the template with dynamic values
     const modifiedContent = templateContent
         .replace(/\${domSelector}/g, domSelector);
    
    // Write the modified content to a new HTML file
    fs.writeFileSync(filePath, modifiedContent);
    console.log(`File created: ${filePath}`.green);
};

export { createHTMLFile };
