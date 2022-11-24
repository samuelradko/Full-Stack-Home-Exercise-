// lesson 27 tasks
// Task 1 + 3 - Create an input and a button, when the button is pressed, calculate how much is the input value + 10. (I used the /, I could not figure out how to do it with +)


function pop() {
    let num1 = prompt("Please enter a number and I will add it up by 10");
    if (Number(num1)) {
        document.getElementById("noice").innerHTML =
            `The Answer is  ${Number(num1) + 10}`;
    } else {
        alert("Please enter a number")
    }
}



// Task 2 - Change the content to be anything you choose on <h1 id=“hw”>Hello World</h1>

function mah() {

    document.getElementById('hw').innerHTML = "Under the little tree"
}









