//import { v4 as uuidv4 } from 'uuid';

class Offer {

    id = '';
    description = '';
    requirement = '';
    offerExperiences = '';
    domSelector = '';
    copyContent = '';
    completed = null;

    constructor( jira, description, requirement, offerExperiences, domSelector, copyContent ) {
        this.id = jira;
        this.description = description;
        this.requirement = requirement;
        this.offerExperiences = offerExperiences;
        this.domSelector = domSelector;
        this.copyContent = copyContent;
        this.completed = null;
    }
}

export { Offer };