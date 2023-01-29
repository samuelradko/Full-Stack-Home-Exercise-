// Task 1





// Task 2
let arrayEven = (arr) => {
    newArr = [] 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            newArr.push(arr[i] + 1)
        }
    }
    return newArr;
}
console.log(arrayEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]))




// task 3

let stringPushed = (str) => {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
        if (str[j] < str[i]) {
            newStr.push(str[j])
    }
  }
  return newStr;
}
};
console.log(stringPushed(["pear","apple", "banana", "grape","householdtime","asdasdasdasdasdsd",]))

