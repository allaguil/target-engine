import { Offer } from "./offer.js";

class Offers {

    _list = {};

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const offer = this._list[key];
            list.push(offer);
        });
        return list;
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArray(offers = []) {
        offers.forEach(offer => {
            this._list[offer.id] = offer;
        });
    }

    createOffer(jira = '', description = '', requirement = '', offerExperiences = '', domSelector = '', copyContent = '') {
        const offer = new Offer(jira, description, requirement, offerExperiences, domSelector, copyContent);
        this._list[offer.id] = offer;
    }

    completeList() {
        console.log();
        this.listArr.forEach((offer, i) => {
            const index = `${i + 1}.`.green;
            const { id, description } = offer;
            //const state = (completed) ? 'Completed'.green : 'Pending'.red;
            console.log(`${index} ${id} - ${description}`);
        });
    }
}

export { Offers };

