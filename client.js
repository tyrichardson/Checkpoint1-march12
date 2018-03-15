console.log('ty js');

let pCounter = 0;

$(document).ready(readyNow);

function readyNow(){
  console.log('in readyNow function; DOM is ready');
  onClickListeners();
}

function onClickListeners(){
  console.log('in onClickListeners function');
  $('#generateButton').on('click', appendDivFunc);
  $('.containerDiv').on('click', '.swapButton', swapFunc);
  $('.containerDiv').on('click', '.deleteButton', deleteFunc);
}

//Using jQuery, append a <div> element when you click the button.
function appendDivFunc(){
  console.log('in appendDivFunc function');
  pCounter += 1;
  console.log('pCounter is at: ', pCounter);

  // Inside the <div> element you created in the previous step, create a <p> element that shows how many times you have clicked the button from the first step.
  // Inside the <div> element you created in step two, append two <button> //elements. The text of the two buttons should read "Swap" and "Delete".
  
 let appendDiv = "<div class = 'dynamicDiv'>dynamicDiv<p class = 'counterOnDom'> " + pCounter + "</p><button class = 'swapButton'>Swap</button><button class = 'deleteButton'>Delete</button></div>";

  $('.containerDiv').append(appendDiv);

}

function swapFunc() {
  $(this).parent().toggleClass('yellow');
}

//Clicking "Delete" < button > should remove its parent < div > container (and all of its contents).

function deleteFunc() {
  $(this).parent().remove();
}


 

