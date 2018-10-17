const IsogramFinder = function (word) {
  word_lowercase = word.toLowerCase();
  this.word = word_lowercase.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  let letterArray = []
  return this.word.every(letter => {
    if(!letterArray.includes(letter)){
      letterArray.push(letter)
      return letter
    }
  });
}

module.exports = IsogramFinder;


// go through each letter in the word
// if the word has a unique letter, move on to next one
// if a letter has already been seen, return false
// if all letters unique, true
