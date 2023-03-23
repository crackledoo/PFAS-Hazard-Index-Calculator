var inputNodeList = document.querySelectorAll('.equation-input');
var inputArray = [];
for (var i = 0; i < inputNodeList.length; i++) {
  inputArray.push(inputNodeList[i]);
}

Array.from(inputNodeList);

var inputFieldIds = ['#pfhxs', '#pfna', '#hfpo-da', '#pfbs'];

var findFieldValue = function(id) {
  var field = document.querySelector(id);
  return parseFloat(field.value);
}

var findDenominator = function(id) {
  var field = document.querySelector(id);
  var parent = field.parentNode;
  var grandParent = parent.parentNode;
  var child = grandParent.querySelector('.denominator');
  return parseFloat(child.innerHTML);
}

inputArray.forEach(function(input) {
  input.addEventListener("keyup", function() {
    var sum = 0;
    inputFieldIds.forEach(function(id) {
      var value = findFieldValue(id);
      var denominator = findDenominator (id);
      var weightedValue = value / denominator;
      if (!isNaN(weightedValue)) {
        sum = sum + weightedValue;
      }
    });
    var result = document.querySelector('.hi-result');
    result.innerHTML = sum;
  })
});