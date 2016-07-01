//body
var body = document.body;
body.id = 'body';

var div = 'div';
var sortBarSize = 20;

// add document parts
var controlDiv = makeElement(div, 'controlDiv', 'body');
var buttonDiv = makeElement(div, 'buttonDiv', 'controlDiv','controls');
var statusDiv = makeElement(div, 'statusDiv', 'controlDiv','controls');
var iterDiv = makeElement(div, 'iterDiv', 'statusDiv','statusDisplay');
var swapDiv = makeElement(div, 'swapDiv', 'statusDiv','statusDisplay');
var displayDiv = makeElement(div, 'displayDiv', 'body', 'display');
// // var sortButton = makeElement('button', 'sortButton', 'buttonDiv','', 'Bubble Sort', 'mousedown', 'bubbleSort(sortValues, true)');
// buttonDiv.innerHTML = `<input type="button" value = "Bubble Sort" onclick="bubbleSort(sortValues, true)"></input>`;

// initialize sort elements
var sortValues = randomNumberArray(20, 20);

for (var i = 0; i <= sortValues.length - 1; i++) {
  var hite = sortValues[i];
  var theSortBar = makeElement(div, i, 'displayDiv', 'sortBars');
  setSortbarHeight(i,hite);
  // theSortBar.onclick=myRect();
}

function setSortbarHeight(sortBarIndex, hite){
  var theSortBar = document.getElementById(sortBarIndex);
  theSortBar.h = hite;
  theSortBar.style.height = (sortBarSize*hite) + 'px';
}

function myRect(){
var rect = this.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
}

sortyMcBubbleSort(sortValues, true);



     // >>>> UTILITY FUNCTIONS <<<<

function randomNumberArray(num, max){
  var arrayOfNumbers = [];
  while(arrayOfNumbers.length < num) {
    var currentNum = Math.ceil(Math.random()*max);
    if(arrayOfNumbers.indexOf(currentNum) < 0) arrayOfNumbers.push(currentNum);
  }
  return arrayOfNumbers;
}

function appendLinebreak(theElementId){
    let theElement = document.getElementById(theElementId);
    var lineBreak = document.createElement('br');
    theElement.appendChild(lineBreak);
}

function setElementHTML(theElementId, theInnerHTML){
  let theElement = document.getElementById(theElementId);
  theElement.innerHTML = theInnerHTML;
}

function makeElement(elementType, theElementId, theParentId_, theClassName_, theInnerHTML_, theEventListener_, theFunction_){
  // elementType: String. 'div', 'button', etc.
  // theElementId: String. id of the new element
  // theParentId_: [optional] String. The new element will be appended as a child of the element with this id
  // theClassName_: [optional] String. Class name of the new element
  // theInnerHTML_:  [optional] String. Text that will be in the new element.
  // theEventListener_:  [optional] String. Event listener type, if there is one.
  // theFunction_:  [optional] Function called by the event listener
  var theNewElement = document.createElement(elementType);
  theNewElement.id = theElementId;
  if(arguments.length > 3 && theClassName_.length > 1) theNewElement.className = theClassName_;
  if(arguments.length > 4 && theInnerHTML_.length > 0) theNewElement.innerHTML = theInnerHTML_;
  if(arguments.length > 2 && theParentId_.length > 0) {
    theParent = document.getElementById(theParentId_);
    theParent.appendChild(theNewElement);
  }
  if(arguments.length > 5) {
    theNewElement.addEventListener(theEventListener_, theFunction_);
  }
  return document.getElementById(theElementId);
}

function appendById(theChildId, theParentId){
  let childDiv = document.getElementById(theChildId);
  let parentDiv = document.getElementById(theParentId);
  parentDiv.appendChild(childDiv);
}
