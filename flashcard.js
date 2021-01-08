import Vocab from "./vocab";
// const vocab = require('./vocab')
export class Flashcard {
    constructor(args) {
    }
    parseText(text) {
        let groups = text.split(/\n{2,}/);
        let vocab_groups = [];
        for (let g in groups) {
            let group_parse = g.split('\n');
            let group_name = group_parse[0];
            let group_list = {};
            for (let p in group_parse.slice(1)) {
                let pair = p.split('=');
                let answer = pair[0].trim();
                let translation = pair[1].trim();
                if (answer in vocab_groups) {
                    console.log(`Duplicate group name: ${answer}. Only the most recent entry will be entered`);
                }
                group_list[answer] = translation.trim();
            }
            vocab_groups.push(new Vocab(group_name, group_list));
        }
        return vocab_groups;
    }
}
export default Flashcard;
