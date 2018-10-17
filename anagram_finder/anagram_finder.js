const AnagramFinder = function (word) {
  word_lowercase = word.toLowerCase()
  this.word_split = word_lowercase.split('');
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let includesAllLetters = otherWords.filter(word => this.word_split.every(n => word.toLowerCase().includes(n)) === true)
  let excludesSelf = includesAllLetters.filter(otherWord => otherWord.toLowerCase() != this.word)
  return excludesSelf.filter(otherWord => otherWord.length === this.word.length);
}

module.exports = AnagramFinder;

//
// return this.alphabet.every(n => this.phrase.includes(n) )
