export class Vocab {
    constructor(name, vocab) {
        this.groupName = 'default';
        this.vocabList = new Map();
        this.groupName = name.replace(/^\[|\]$/g, '');
        this.vocabList = vocab;
    }
    getName() {
        return this.groupName;
    }
    getVocabList() {
        return this.vocabList;
    }
    toString() {
        return this.groupName + '\n' + this.vocabList.toString();
    }
    check(word, guess) {
        return this.getAnswer(word) === guess;
    }
    getAnswer(word) {
        return this.getVocabList().get(word);
    }
    setName(newName) {
        this.groupName = newName;
    }
    setVocabList(newVocabList) {
        this.vocabList = newVocabList;
    }
}
export default Vocab;
