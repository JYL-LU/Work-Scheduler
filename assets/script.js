// create a function onSave to find the right parent row and input

function onSave(event) {
  var pressedButton = event.target;
  var parentRow = pressedButton.parentNode;
  var textArea = parentRow.querySelector("input");
  // console.log(textArea.value);
}

//load html. css
$(document).ready(function () {
  var container = document.querySelector(".container");

  var startHour = 9;
  for (let i = 0; i < 9; i++) {
    var time = new Date();
    time.setHours(startHour + i);
    time.setMinutes(0);

    var row = document.createElement("div");
    row.className = "row";

    var hour = document.createElement("div");
    hour.className = "col-sm-2";
    hour.textContent = moment(time).format("hh:mm a");
    row.appendChild(hour);

    var textArea = document.createElement("input");
    textArea.className = "col-sm-8";
    row.appendChild(textArea);

    var saveButton = document.createElement("button");
    saveButton.className = "col-sm-2 btn";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", onSave);
    row.appendChild(saveButton);

    container.appendChild(row);
  }
});

//set current date
var currentDate = moment().format("MMMM Do YYYY");
var hour = [9, 10, 11, 12, 1, 2, 3, 4, 5];

$("#currentDay").text("Today's Date: " + currentDate);

//save button
$(".btn").on("click", function () {});

for (let i = 0; i < hour.length; i++) {
  var taskrow = "row-9";
  var task = $("");
}

// set local storage data
var hour9 = JSON.parse(localStorage.getItem("hour-9"));
