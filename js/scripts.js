const reducer = (accumulator, currentValue) => accumulator + currentValue;

var vowelRemover = function(sentence) {
  var sentenceArray = sentence.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  for(var i = 0; i < sentenceArray.length; i++) {
    for(vi = 0; vi < vowels.length; vi++){
      if(sentenceArray[i] === vowels[vi]){
        sentenceArray.splice(i, 1, "-");
      }
    }
  }
  return sentenceArray;
}

$(document).ready(function() {
  $("form#wordPlay").submit(function(event) {
    event.preventDefault();
    var sentence = $("#inputString").val();
    var sentenceArray = vowelRemover(sentence);

    $("#output1").text(sentenceArray.reduce(reducer));
  }); //End of submit function
}); //End of document ready
