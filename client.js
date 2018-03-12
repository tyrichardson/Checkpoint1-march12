console.log('ty js');

let P_Counter = 0;

$(document).ready(readyNow);

function readyNow(){
  console.log('in readyNow function; DOM is ready');
  onClickListerners();
}

function onClickListerners(){
  console.log('in onClickListerners function');
  $('#generateButton').on('click', appendDivFunc);

}
//Using jQuery, append a <div> element when you click the button.
function appendDivFunc(){
  console.log('in appendDivFunc function');
  let appendDiv = $('.bodyDiv').append("<div class = dynamicDiv></div>");
  P_Counter += 1;
  $('dynamicDiv').empty();
  appendP_Counter();

}

// Inside the <div> element you created in the previous step, create a <p> element that shows how many times you have clicked the button from the first step.

function appendP_Counter(){
  console.log('in appendP_Counter function');
  $('.dynamicDiv').append("<p class = P_Counter>You clicked the Generate button this many times: </div>");



}

function generateData(){
console.log('in generateData function');
let inputValue = $('#generateInput').val();
console.log(inputValue);
}
