var swaps = Number;
var iterations = 1;
var iterDiv;
var swapDiv;
var currentSortBar;
var nextSortBar;


function sortyMcBubbleSort(theArray, domSort){
  // are we visualizing in the document?
  if(arguments.length == 1) {
    domSort = false;
  }
  // else {
  //   // get the document elements
  //   iterDiv = document.getElementById('iterDiv');
  //   swapDiv = document.getElementById('swapDiv');
  // }
  // check for edge cases with the input
  if(!Array.isArray(theArray) || theArray.length === 0) {
    return null;
  }
  if(theArray.length == 1) {
    return theArray;
  }
  // the meat
  while(iterations < theArray.length) {
    swaps = 0;
    // if updating the dom
    // if(domSort){
    //   swapDiv.innerHTML = 'Swaps: ' + swaps;
    //   iterDiv.innerHTML = 'Iterations: ' + iterations;
    // }
    for (var i = 0; i <= theArray.length - 2; i++) {
      // exit on non-numbers
      if(!Number(theArray[i])) {
        return null;
      }
      // if there's a swap
      if (theArray[i+1] < theArray[i]) {
        theArray = swappyMcSwap(theArray, i, domSort);
        ++swaps;
        // if(domSort) swapDiv.innerHTML = 'Swaps: ' + swaps;
      }
    }

    theArray.iterations = iterations;
    if(swaps === 0) return theArray;
    ++iterations;
  }
  return theArray;
}

function swappyMcSwap(theArray, indx, domSort){
  // if(domSort){
  //   currentSortBar = document.getElementById(indx+1);
  //   nextSortBar = document.getElementById(indx+2);
  //   nextSortBar.h = theArray[indx];
  //   currentSortBar.h = theArray[indx+1];
  //   updateSortbars(currentSortBar, nextSortBar);
  // }
  var currentItem = theArray[indx];
      theArray[indx] = theArray[indx+1];
      theArray[indx+1] = currentItem;
      return theArray;

}

function updateDom(theArray){

}

// function updateSortbars(currentSortBar, nextSortBar){
//   nextSortBar.style.height = nextSortBar.h * 20;
//   currentSortBar.style.height = currentSortBar.h * 20;
//   nextSortBar.class = 'sortBars sorting';
//   currentSortBar.class = 'sortBars sorting';
// }

