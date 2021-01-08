export class Vocab{
    groupName:string = 'default'
    vocabList = new Map()

    constructor(name, vocab){
        this.groupName = name.replace(/^\[|\]$/g, '')
        this.vocabList = vocab
    }

    getName(): string {
        return this.groupName
    }

    getVocabList(): Map<string, string> {
        return this.vocabList
    }

    toString(): string {
        return this.groupName + '\n' + this.vocabList.toString()
    }

    check(word: string, guess: string): boolean {
        return this.getAnswer(word) === guess
    }

    getAnswer(word): string {
        return this.getVocabList().get(word)
    }

    setName(newName: string) {
        this.groupName = newName
    }

    setVocabList(newVocabList) {
        this.vocabList = newVocabList
    }
}

export default Vocab