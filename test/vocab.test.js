const assert = require('assert')
const vocab = require('../vocab')

describe('Vocab constructor test', () => {
    it('Should return "category" and (pomme, apple) pair', () =>{
        let name = '[category]'
        let list = new Map()
        list.set('pomme', 'apple')
        list.set('some random shit', 'some random value')

        const v = new vocab.Vocab(name, list)

        assert.equal('category', v.getName())
        assert.equal(v.getVocabList(), list)
    })
})

describe('Vocab mutator/accessor test', () => {
    let name = '[category]'
    let list = new Map()
    list.set('apple', 'pomme')

    const v = new vocab.Vocab(name, list)
    it('Should return correct values (look at the code)', () => {
        

        assert.equal('category', v.getName())
        assert.equal(v.getVocabList().size, 1)
        assert.equal(v.check('apple', 'pomme'), true)
        assert.notEqual(v.check('apple', 'bitch'), true)
        assert.equal(v.getAnswer('apple'), 'pomme')
            
    }),

    it('Should set the values correctly', () => {
        
    })
    
})



// assert.equal(v.getAnswer('apple'), 'pomme')