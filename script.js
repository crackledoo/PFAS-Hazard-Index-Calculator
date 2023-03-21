const inputNodeList = document.querySelectorAll('.equation-input');
const inputArray = Array.from(inputNodeList);

const inputFieldIds = ['#pfhxs', '#pfna', '#hfpo-da', '#pfbs'];

const findFieldValue = function(id) {
  const field = document.querySelector(id);
  return parseFloat(field.value);
}

const findDenominator = function(id) {
  const field = document.querySelector(id);
  const parent = field.parentNode;
  const grandParent = parent.parentNode;
  const child = grandParent.querySelector('.denominator');
  return parseFloat(child.innerHTML);
}

inputArray.forEach(input => input.addEventListener("keyup", () => {
  let sum = 0;
  inputFieldIds.forEach(id => {
    let value = findFieldValue(id);
    let denominator = findDenominator (id);
    let weightedValue = value / denominator;
    if (!isNaN(weightedValue)) {
      sum = sum + weightedValue;
    }
  });
  const result = document.querySelector('.hi-result');
  result.innerHTML = sum;
}));