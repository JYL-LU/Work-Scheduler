// create a function onSave to find the right parent row, input, etc

function onSave(event) {
  var pressedButton = event.target;
  var parentRow = pressedButton.parentNode;
  var textArea = parentRow.querySelector("input"); //finding the element
  var rowValue = textArea.value; //taking the value of an element and assign it to a var
  var hour = parentRow.firstChild.textContent; //assign textcontent of the first child to that var
  window.localStorage.setItem(hour, rowValue);
}

//load html. css
$(document).ready(function () {
  var container = document.querySelector(".container");

  var currentTime = new Date(); //google Date
  var currentHour = currentTime.getHours();

  //create loops for hours
  var startHour = 9;
  for (let i = 0; i < 9; i++) {
    var date = new Date();
    date.setHours(startHour + i);
    date.setMinutes(0); //simplify the scheduler, only hour no mins
    var rowHour = date.getHours();
    var rowTime = moment(date).format("hha");

    var row = document.createElement("div");
    row.className = "row";

    if (rowHour < currentHour) {
      row.classList.add("past");
    } else if (rowHour == currentHour) {
      row.classList.add("present");
    } else {
      row.classList.add("future");
    }

    var timeColumn = document.createElement("div");
    timeColumn.className = "col-sm-1";
    timeColumn.textContent = rowTime;
    row.appendChild(timeColumn);

    var textArea = document.createElement("input");
    textArea.className = "col-sm-10";
    textArea.value = window.localStorage.getItem(rowTime);
    row.appendChild(textArea);

    var saveButton = document.createElement("button");
    saveButton.className = "btn";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", onSave);
    row.appendChild(saveButton);

    container.appendChild(row);
  }
});

//set current date
var currentDate = moment().format("MMMM Do YYYY");

$("#currentDay").text("Today's Date: " + currentDate);
