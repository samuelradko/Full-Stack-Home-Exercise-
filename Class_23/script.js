// we are not allowed to use the built-in sort method, sum, max, min, average, median, mode, range, variance methods

// example mySum function:
// let sum = 0
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let mySum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     };
//     return sum;

// }
// console.log(mySum(arr));


//********************************************************/

// example myMax function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myMax = (arr) => {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) max = arr[i]; {
//         }
//     }
//     return max;
// }
// console.log(myMax(arr));

//********************************************************/

// example myMin function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myMin = (arr) => {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max > arr[i]) max = arr[i]; {
//         }
//     }
//     return max;
// };

// console.log(myMin(arr));

//********************************************************/

// example myAverage function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [1, 2, 2, 3, 4, 7, 7, 9]
// let myAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
// };
// return sum / arr.length;
// }
// console.log(myAverage(arr));
// console.log(myAverage(arr2));

// example myMedian function:
// median is the middle value of an array

let arr = [2, 1, 3, 4, 5, 6, 7, 8, 9, 10];
let myMedian = (arr) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr2[j] = arr[j + 1];
                arr2[j + 1] = arr[j];
                j++;
                if (j == arr.length - 1) arr2.push(arr.length -1)
            } else {
                arr2[j] = arr[j];
            }
            arr = fun;
            arr2 = []
        }
    }

};
console.log(myMedian(arr));
// console.log(myMedian(arr2)); -> 3.5



let myMode = (arr) => { }; // mode is the most common value of an array

let myRange = (arr) => { }; // range is the difference between the largest and smallest values of an array

let myVariance = (arr) => { }; // variance is the average of the squared differences from the Mean

let mySort = (arr) => { }; // sort an array from smallest to largest 