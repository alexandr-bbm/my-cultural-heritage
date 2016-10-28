export default class Storage {
    static STORAGE_KEY_VOTED = 'my_cultural_heritage_voted';

    static addVoted (id) {
        let voted = this.getVoted();
        voted.push(id);
        localStorage[Storage.STORAGE_KEY_VOTED] = JSON.stringify(voted);
    }

    static isVoted (id) {
        const voted = this.getVoted();
        return voted.includes(id);
    }


    static getVoted () {
        const localItems = localStorage[Storage.STORAGE_KEY_VOTED];
        if (localItems) {
            return JSON.parse(localItems);
        }
        return [];
    }
}