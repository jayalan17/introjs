function getValue(rome) {
  if (rome === 'I') {
    return 1;
  }
  else if (rome === 'V') {
    return 5;
  }
  else if (rome === "X"){
     return 10;
  }
  else if (rome === "L"){
     return 50;
  }
  else if (rome === "C"){
     return 100;
  }
  else if (rome === "D"){
     return 500;
  }
  else if (rome === "M"){
     return 1000;
  }
}

function nextValue(currentValue, lastchar){
  if(needToSubtract(currentValue, lastchar)){
    return - getValue(currentValue);
  }
  else {
    return getValue(currentValue);
  }

}

function needToSubtract(currentValue, lastchar){
    return getValue(currentValue) < getValue(lastchar) && lastchar !== "";
}

function romanNumberalConverter(roman) {
  var sum = 0;
  var lastchar = '';
//   for (var i = roman.length - 1; i >= 0; i--) {
//     sum += nextValue(roman[i], lastchar);
//     lastchar = roman[i];
//   }
//   return sum;
// }
  roman.split('').reverse().forEach(function(x){sum += nextValue(x, lastchar);
  lastchar = x;});
  return sum;
}

romanNumberalConverter("XXXVIII");

module.exports = romanNumberalConverter;
