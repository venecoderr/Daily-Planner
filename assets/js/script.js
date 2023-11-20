// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

let todayEl = $('#currentDay')
let saveBtn = $('.saveBtn')
let timeBlocksEl = $('.timeBlock')
let localStorageData = []
let today = dayjs().format('dddd, MMMM DD');
let rightNow = dayjs().format('hh')

function displayToday() {
  todayEl.text(today);
}

function pastOrFuture(){
  if(rightNow.isBefore(dayjs('9h 0m 0s a'))){
    console.log('works')
  }
}

function prefillEvents() { 
  for(let i = 0; i < timeBlocksEl.length; i++){
    let currentBlock = $(timeBlocksEl[i])
    let savedEvent = localStorage.getItem(currentBlock.attr('id'))
    currentBlock.children('.input').text(savedEvent)
  }
}

function saveEvent(event){
  thisHere = $(this).parent()
  eventValue = thisHere.children('.input').val()
  eventKey = thisHere.attr('id')
  
  localStorage.setItem(eventKey, eventValue)
}

displayToday()
setInterval(displayToday,1000)
prefillEvents()
pastOrFuture()

saveBtn.on('click', saveEvent)