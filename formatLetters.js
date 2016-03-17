
var ascii =  "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ [\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

var asciiArray = new Array();
asciiArray = ascii.split("");
// console.log(asciiArray);
// console.log(asciiArray.length);

var notesArray = new Array();
for(var i = 0; i<=7; i++){
  notesArray.push("A" + [i]);
  notesArray.push("Ab" + [i]);
  notesArray.push("B" + [i]);
  notesArray.push("Bb" + [i]);
  notesArray.push("C" + [i]);
  notesArray.push("Cb" + [i]);
  notesArray.push("D" + [i]);
  notesArray.push("Db" + [i]);
  notesArray.push("E" + [i]);
  notesArray.push("Eb" + [i]);
  notesArray.push("F" + [i]);
  notesArray.push("Fb" + [i]);
  notesArray.push("G" + [i]);
  notesArray.push("Gb" + [i]);
}
// console.log(notesArray);
// console.log(notesArray.length);

// var str = "!Aasdsdf7651234%^&*  dsfa    ";

function noteify(str){
  var strArray = new Array();
  strArray = str.split("");

  var finalSeq = new Array();

  for(var i = 0; i < strArray.length; i++){
    var num = asciiArray.indexOf(strArray[i]);
    // newStr = newStr.replace(strArray[i], notesArray[num]);
    finalSeq.push(notesArray[num]);
  }

  return finalSeq;
}


// console.log(strArray);
// console.log(noteify(str));
