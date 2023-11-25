let todayEl = $('#currentDay')
let saveBtn = $('.saveBtn')
let timeBlocksEl = $('.timeBlock')
let today = dayjs().format('dddd, MMMM DD');

//Displays todays date, updates itselt over time too
function displayToday() {
  todayEl.text(today)
}

//Save fuction for user inputs, saves to local storage
function saveEvent(event){
  thisHere = $(this).parent()
  eventValue = thisHere.children('.input').val()
  eventKey = thisHere.attr('id')
  
  localStorage.setItem(eventKey, eventValue)
}

//Checks for pre-saved events and fills them upon page loading
function prefillEvents() { 
  for(let i = 0; i < timeBlocksEl.length; i++){
    let currentBlock = $(timeBlocksEl[i])
    let savedEvent = localStorage.getItem(currentBlock.attr('id'))
    currentBlock.children('.input').text(savedEvent)
  }
}

saveBtn.on('click', saveEvent)

displayToday()
prefillEvents()
setInterval(displayToday,1000)