//Declare today's date variable
var today = dayjs();
// console log to see if desired format has been achieved
console.log(today.format("dddd, MMMM D YYYY"));
// Add today's date to the header
$("#currentDay").text(today.format("dddd, MMMM D YYYY")); 

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {
  // Call the updateSchedule function when the page loads to get div styles
  updateSchedule ();
  // Create a function to check the time every minute
  setInterval(function(){
    updateSchedule();
  },60000);
  // Create function updateSchedule() that will check the current time vs the div id value for each hour in the
  // schedule from 7 to 18.

  // Declare variable to get current hour from dayjs
  var currentHour = dayjs().hour();

  // Create a loop that will check all div containers that have ids matching "hour-7 to hour-18" 
  for (var hour = 7; hour <= 18; hour++) {
    var divId = "hour-" + hour;

  }



  // If the div id value is lesser than the current hour, then apply limescent color from icolorpalette.com
  // If the div id value is equal to the current hour, then apply manticore brown color from icolorpalette.com
  // Of the div id value is greater than the current hour, then apply Butterbrot color from icolorpalette.com

});
  






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

