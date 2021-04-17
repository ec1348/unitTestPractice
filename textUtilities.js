var expect = require('chai').expect;

function titleCase(title) {
    word = title.split(' ');
    var titleCasedWord = [];
    for (const element of word){
        var casedWord = element[0].toUpperCase() + element.substring(1);
        titleCasedWord.push(casedWord);
    }
    return titleCasedWord.join(' ');
}

expect(titleCase('this should be a string')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('apple')).to.equal('Apple');
expect(titleCase('this should be a string')).to.equal('This Should Be A String');