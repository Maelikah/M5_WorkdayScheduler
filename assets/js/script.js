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

  // Retrieve stored values from local storage and set them as the values of the text areas
  $(".description").each(function() {
    var timeslot = $(this).closest(".time-block").attr("id");
    var storedTask = localStorage.getItem(timeslot);
    if (storedTask !== null) {
      $(this).val(storedTask);
    }
  });

  // Create a function to check the time every minute
  setInterval(function(){
    updateSchedule();
  },60000);

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing 
  // time-block as a key to save the user input in local storage

  $(".saveBtn").on("click", function() {
    // When a button is clicked, we use $(this) to refer to the specific button that was clicked. 
    // Then, we use .closest(".time-block") to find the nearest ancestor element with the class "time-block"
    // This will be the div that contains the hour id. We use .attr("id") to get the id of that div
    // This will be the hour in the format "hour-<hour>". We assign this value to the timeslot variable.
    var timeslot = $(this).closest(".time-block").attr("id"); 
    console.log(timeslot);
    // We use $(this).siblings(".description") to find the textarea that is a sibling of the button that was clicked. 
    // We use .val() to get the value of the textarea, which will be the text that the user entered. 
    // We use .trim() to remove any leading or trailing white space from the text. 
    // We assign this value to the task variable.
    var task = $(this).siblings(".description").val().trim();
    console.log(task); 
    
    // check if there is any text
    if (task !== "") {
      // Add timeslot and task values into local storage
      localStorage.setItem(timeslot, task); 
    }
  });
});

  // Create function updateSchedule() that will check the current time vs the div id value for each hour in the
  // schedule from 7 to 18.
  function updateSchedule () {

  // Declare variable to get current hour from dayjs
  var currentHour = dayjs().hour();

  // Create a loop that will check all div containers that have ids matching "hour-7 to hour-18" 
  for (var hour = 7; hour <= 18; hour++) {
    
    // Create variable that will be used to compare divid vs current hour
    var divId = "hour-" + hour;
    
    // If the div id value is lesser than the current hour, then apply limescent color from icolorpalette.com
    if (hour < currentHour) {
      $("#" + divId).css ({"background-color": "var(--pastbgc)", "color": "black"});
    // If the div id value is equal to the current hour, then apply manticore brown color from icolorpalette.com
    } else if (hour == currentHour) {
      $("#" + divId).css ({"background-color": "var(--presentbgc)", "color": "black"});
    // If the div id value is greater than the current hour, then apply Butterbrot color from icolorpalette.com
    } else {
      $("#" + divId).css ({"background-color": "var(--futurebgc)", "color": "black"});
    }
  }
}
  
// Add event listener for save button








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

