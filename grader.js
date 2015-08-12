var yourCode = {

  letterGrader: function(input) {
    var output = "";
    if (input >= 90) output = "A";
    if (input >= 80 && input < 90) output = "B";
    if (input >= 70 && input < 80) output = "C";
    if (input >= 60 && input < 70) output = "D";
    if (input < 60) output = "F";
    return output;
  },

  averageScore: function(input) {
    var summation = input.reduce(function(prev, curr) {
      return prev + curr;
    })
    var avg = summation/input.length;
    return avg;
  },

  medianScore: function(input) {
    var arrayInOrder = input.sort(function(a, b) {
      return a - b;
    });
    if (arrayInOrder.length % 2 !== 0) {
      for (var i = 0; i < arrayInOrder.length; i++) {
        if (arrayInOrder.length > 1) {
          arrayInOrder = arrayInOrder.slice(1, arrayInOrder.length - 1);
        }
      }
      return arrayInOrder[0];
    }
    else if (arrayInOrder.length % 2 === 0) {
      for (var i = 0; i < arrayInOrder.length; i++) {
        if (arrayInOrder.length > 2) {
          arrayInOrder = arrayInOrder.slice(1, arrayInOrder.length - 1);
        }
      }
      var avg = (arrayInOrder[0] + arrayInOrder[1]) / arrayInOrder.length;
      return avg;
    } 
  },

  modeScore: function(input) {
    var counter = 0;
    var arrayInOrder = input.sort(function(a, b) {
      return a - b;
    });
    for (var i = 0; i < arrayInOrder.length; i++) {
        if (arrayInOrder[i] === arrayInOrder[i + 1]) {
            counter += 1;
        }
        else continue;
    }
    return counter;
    //must call on the index for the element that marks up the counter
  }
}

module.exports = yourCode;