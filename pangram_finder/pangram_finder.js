const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  phrase_lowercase = phrase.toLowerCase()
  this.phrase = phrase_lowercase.split('');
}

PangramFinder.prototype.isPangram = function () {
  // go through each letter in the phrase and make sure it is part of the alphabet


  return this.alphabet.every(n => this.phrase.includes(n) )
}

module.exports = PangramFinder;
