// Lesson 28 
// Task 1 - 
// Create a variable that listens to the copy event. 
// Pen clicking on the button display the same event populated by the variable and display on an empty h1 tag the last text you copied.


document.addEventListener("copy", result);

function result() {
    document.getElementById("task1").textContent = `You've entered: ` + document.getSelection();
};





// task 2


document.addEventListener("keypress", pressed) 
function pressed(e) {
    document.getElementById("task2").textContent = `The key you pressed is ` + String.fromCharCode(e.keyCode)
};


