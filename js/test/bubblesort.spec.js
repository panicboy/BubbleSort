// var chai = require('chai');
chai.should();

var testArray0;
var testArray1;
var testArray2;
var testArray3;
var testArray4;
var expectedResult;

  beforeEach(function() {
    testArray0 = [];
    testArray1 = [5,4,6,3,12,8,1];
    testArray2 = '9,4,1,2,6,5,0';
    testArray3 = [5,4,6,3,'one',8,0];
    testArray4 = [7];
    expectedResult = [ 1, 3, 4, 5, 6, 8, 12 ];
  });


describe('bubbleSort', function(){

  it('should be a function', function() {
    sortyMcBubbleSort.should.be.a.function;
  });

  it('should be a function', function() {
    sortyMcBubbleSort.should.be.a.function;
  });

  describe('input', function(){
    it('should accept an array of numbers as an input', function() {
      expect(sortyMcBubbleSort(testArray1)).to.not.be.null;
    });
    it('should return null if not passed an array', function() {
      expect(sortyMcBubbleSort(testArray2)).to.be.null;
    });
    it('should return null if not passed an array of numbers', function() {
      expect(sortyMcBubbleSort(testArray3)).to.be.null;
    });
  });

  describe('results', function(){
    it('should return the same array if passed an array with a single item', function() {
      expect(sortyMcBubbleSort(testArray4)).to.equal(testArray4);
    });
    it('should return a sorted array of numbers', function() {
      (sortyMcBubbleSort(testArray1).join()).should.be.equal(expectedResult.join());
    });
    it('should return null if passed an empty array', function() {
      expect(sortyMcBubbleSort(testArray0)).to.be.null;
    });
  });

});