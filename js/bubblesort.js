function bubbleSort(theArray){
  if(!Array.isArray(theArray)) {
    return null;
  }
  if(theArray.length === 0) return null;
  if(theArray.length == 1) return theArray;
  var iterations = 1;
  while(iterations < theArray.length) {
    var swaps = 0;
    for (var i = 0; i <= theArray.length - 2; i++) {
      if(!Number(theArray[i])) return null;
      if (theArray[i+1] < theArray[i]) {
        theArray = bubble(theArray, i);
        swaps++;
      }
    }
    theArray.iterations = iterations;
    console.log('theArray.iterations: ', theArray.iterations);
    if(swaps === 0) return theArray;
    ++iterations;
  }
  return theArray;
}

function bubble(theArray, indx){
  var currentItem = theArray[indx];
      theArray[indx] = theArray[indx+1];
      theArray[indx+1] = currentItem;
      return theArray;
}

// var testArray = [5,4,6,3,12,8,1];
// console.log('bubbleSort(testArray): ', bubbleSort(testArray));