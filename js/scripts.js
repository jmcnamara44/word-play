var sentence;
var stringToSplit=[];





$(document).ready(function() {
  $("#words").submit(function(event) {
      event.preventDefault();

    sentence = $("input#firstWord").val();
    stringToSplit = sentence.split(" ");
    // alert(stringToSplit.reverse());
    var longerWords = stringToSplit.map(function(words) {
      if (words.length >=  3) {
        return words
      }
    });
    alert(longerWords.join());

  });
});
