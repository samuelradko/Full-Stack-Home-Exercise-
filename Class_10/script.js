// 1
function multi2(x) {
    return x * 53;
}
console.log(multi2(5));

// 2
function strong(x, y) {
    return x ** y;
}
console.log(strong(4, 5))

// 3

function user_local (){
    let num1 = prompt(`First Number`);
    let num2 = prompt(`Second Number`);
    let num3 = prompt(`Third Number`);
    let num4 = prompt(`Forth Number`);
    let num5 = prompt(`Fifth Number`);
    alert(Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))
};
user_local()

// 4 

function input(){
    let fname = prompt(`First Name`);
    let lname = prompt(`Last Name`);
    let age = prompt(`Your age`);
    alert(`First name: ${fname}\nLast name: ${lname}\nAge: ${age} `);
    
};
input()






