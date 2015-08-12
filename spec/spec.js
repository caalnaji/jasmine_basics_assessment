var yourCode = require("../grader");

describe("letterGrader", function() {
  it("returns the letter grade of the input number", function() {
    var input = 98;
    expect(yourCode.letterGrader(input)).toEqual("A");
  });

  it("returns the letter grade of the input number", function() {
    var input = 62;
    expect(yourCode.letterGrader(input)).toEqual("D");
  });
});

describe("averageScore", function() {
  it("returns the average score from an array of numbers", function() {
    var input = [90, 95, 87, 60];
    expect(yourCode.averageScore(input)).toEqual(83);
  });
});

describe("medianScore", function() {
  it("returns the median score from an array of numbers", function() {
    var input = [52, 80, 80, 86, 94];
    expect(yourCode.medianScore(input)).toEqual(80);
  });

  it("returns the average of two middle scores if an even number of array elements", function() {
    var input = [60, 72, 81, 83, 90, 101];
    expect(yourCode.medianScore(input)).toEqual(82);
  });
});

describe("modeScore", function() {
  it("returns the mode score from an array of numbers", function() {
    var input = [82, 92, 75, 91, 92, 89, 95, 100, 86];
    expect(yourCode.modeScore(input)).toEqual(92);
  });
});
