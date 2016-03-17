
var ascii =  "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ [\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

var asciiArray = new Array();
asciiArray = ascii.split("");
// console.log(asciiArray);
// console.log(asciiArray.length);

var notesArray = new Array();
for(var i = 0; i<=6; i++){
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

var pentnotesArray = new Array();
for(var j = 0; j<=3; j++){
  for(var i = 0; i<=6; i++){
    pentnotesArray.push("A" + [i]);
    pentnotesArray.push("C" + [i]);
    pentnotesArray.push("D" + [i]);
    pentnotesArray.push("E" + [i]);
    pentnotesArray.push("G" + [i]);
  }
}
var majnotesArray = new Array();
for(var j = 0; j<=3; j++){
  for(var i = 0; i<=6; i++){
    majnotesArray.push("Gb" + [i]);
    majnotesArray.push("Ab" + [i]);
    majnotesArray.push("Bb" + [i]);
    majnotesArray.push("B" + [i]);
    majnotesArray.push("Db" + [i]);
    majnotesArray.push("Eb" + [i]);
    majnotesArray.push("F" + [i]);
  }
}
var minnotesArray = new Array();
for(var j = 0; j<=3; j++){
  for(var i = 0; i<=6; i++){
    minnotesArray.push("C" + [i]);
    minnotesArray.push("Eb" + [i]);
    minnotesArray.push("Gb" + [i]);
    minnotesArray.push("A" + [i]);
    minnotesArray.push("Bb" + [i]);
  }
}

// console.log(pentnotesArray);
// console.log(notesArray.length);

// var str = "!Aasdsdf7651234%^&*  dsfa    ";

function noteify(str, number){
  var strArray = new Array();
  strArray = str.split("");

  var finalSeq = new Array();

  for(var i = 0; i < strArray.length; i++){
    var num = asciiArray.indexOf(strArray[i]);
    // newStr = newStr.replace(strArray[i], notesArray[num]);

    if(number == 1){
      finalSeq.push(minnotesArray[num]);
    } if(number == 2) {
      finalSeq.push(pentnotesArray[num]);
    } if(number == 3) {
      finalSeq.push(majnotesArray[num]);
    } if(number == 4) {
      finalSeq.push(notesArray[num]);
    }
      // finalSeq.push(notesArray[num]);

  }
  return finalSeq;
}


// console.log(strArray);
// console.log(noteify(str));
