var assert = require('chai').assert;
var romanNumeralConverter = require('./romanNumeralConverter');

function testRoman(value, numeral){
  //Arrange
  var expected = value;
  //Act
  var actual = romanNumeralConverter(numeral);
  //Assert
  assert.equal(actual, expected);
}

describe("RomanNumeralConverter", function() {

  it("can convert I to 1", function() {
    testRoman(1, "I");
  });
  it("can convert V to 5", function() {
    testRoman(5, "V");
  });
  it("can convert X to 10", function() {
    testRoman(10, "X");
  });
   it("can convert IV to 4", function() {
    testRoman(4, "IV");
  });
  it("can convert IX to 9", function() {
    testRoman(9, "IX");
  });
  it("can convert III to 3", function() {
    testRoman(3, "III");
  });
  it("can convert XI to 11", function() {
    testRoman(11, "XI");
  });
  it("can convert XV to 15", function() {
    testRoman(15, "XV");
  });
  it("can convert XXXVIII to 38", function() {
    testRoman(38, "XXXVIII");
  });
  it("can convert L to 50", function() {
    testRoman(50, "L");
  });
  it("can convert XLVIII to 48", function() {
    testRoman(48, "XLVIII");
  });
  it("can convert C to 100", function() {
    testRoman(100, "C");
  });
  it("can convert XCII to 92", function() {
    testRoman(92, "XCII");
  });
  it("can convert XCIX to 99", function() {
    testRoman(99, "XCIX");
  });
  it("can convert CLVIII to 158", function() {
    testRoman(158, "CLVIII");
  });
  it("can convert DCCCXLIII to 843", function() {
    testRoman(843, "DCCCXLIII");
  });
});
