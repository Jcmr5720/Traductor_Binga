function encrypt() {
  var input = document.getElementById("input").value;
  var output = "";
  input = input.toUpperCase();
  for (var i = 0; i < input.length; i++) {
    var char = input.charAt(i);
    var bingaChar = bingaChars[char];
    if (bingaChar) {
      output += bingaChar + " ";
    } else {
      output += char + " ";
    }
  }
  document.getElementById("output").value = output;
}

function decrypt() {
  var input = document.getElementById("input").value;
  var output = "";
  input = input.toUpperCase();
  var bingaCharsReverse = {};
  for (var key in bingaChars) {
    if (bingaChars.hasOwnProperty(key)) {
      bingaCharsReverse[bingaChars[key]] = key;
    }
  }
  var words = input.split(" ");
  for (var i = 0; i < words.length; i++) {
    var bingaWord = words[i];
    var spanishChar = bingaCharsReverse[bingaWord];
    if (spanishChar) {
      output += spanishChar;
    } else {
      output += bingaWord;
    }
  }
  document.getElementById("output").value = output;
}
