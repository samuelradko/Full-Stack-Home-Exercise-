//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//    Home Assignment 1 - sorting algorithms 1 & string manipulation 1
// ----------------------------------------------------------------------
//              grading system: (for each question)
//       
// 1. if the code is not working - *0
// 2. if the code is working but not according to the instructions - *0.5
// 3. if there's no explanation -  *0.75
// 4. late submission - final_grade -=  10*days_late
//
// ----------------------------------------------------------------------
//  --------------- DUE DATE: 05/12/2022 at 11:59pm ---------------------
// ______________________________________________________________________


// ______________________________________________________________________
//
// ------------------------  PART 1 - 60 Points -------------------------
//_______________________________________________________________________


// 1. sorting algorithms - bubble sort, selection sort, insertion sort
// part 1 - 60 points 20 points each

/*
* write the fulling functions below - you can't any built-in methods
* click the link to see the algorithm
* try implementing the algorithm in your own words
*/

// helpfull links:
// link to visualize the sorting : https://visualgo.net/en/sorting
// https://algorithm-visualizer.org/brute-force/bubble-sort (bubble sort)
// https://algorithm-visualizer.org/brute-force/selection-sort (selection sort)
// https://algorithm-visualizer.org/brute-force/insertion-sort (insertion sort)


// 1.1 bubble sort - https://en.wikipedia.org/wiki/Bubble_sort

const bubbleSort = (arr) => {
    // The loop runs "X" times until it finds a bubble that contains the specified element 
    for (let i = 0; i < arr.length; i++) {
        // withen the loop we have the "J" that runs inside the I loop which checks the next element in the array.
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // if the condition is true then swap the number. 
                // if it's false then the loop will continue until it lands on true     
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    console.log(arr);
}
// let arr = [1, 2, 4, 3, 6, 5, 7, 8];
// bubbleSort(arr)



// 1.2 selection sort - https://en.wikipedia.org/wiki/Selection_sort

const selectionSort = (arr) => {
    // Our outer loop "for (i)" which is stored as the smallest element
    for (let i = 0; i < arr.length; i++) {
        let lowestnum = i;
        // our inner loop "for (j)", here we check that the current value is less than or equal to the lowest number
        for (let j = i + 1; j < arr.length; j++) {
            // after the inner-loop has reached the end of the array, we check to see if the lowest ever got changed; if so, we swap it with arr[i].
            if (arr[j] < arr[lowestnum]) {
                lowestnum = j;
            }
            if (lowestnum !== i) {
                // here we make the swap
                [arr[i], arr[lowestnum]] = [arr[lowestnum], arr[i]]
            }
        }
    }
    return arr
}
// 1.3 insertion sort - https://en.wikipedia.org/wiki/Insertion_sort
console.log(selectionSort([3, 3, 5, 6, 7, 4, 4, 8, 9,]))

// can't explane this 
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let current = arr[i];
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = current;
    };
    return arr
}

let arr = [3, 9, 8, 7, 5, 4, 7, 1, 2, 2, 9, 4, 4, 7, 8]
console.log(insertionSort(arr))


//_______________________________________________________________________
//
// ------------------------  PART 2 - 40 Points -------------------------
//_______________________________________________________________________




// 2. working with strings! - without using built-in methods!
// part 2 - 40 points 10 points each


// 2.1 Capitalize the first letter of a string
const capitalize = (str) => { };
// example:
// let str = "hello world";
// console.log(capitalize(str)); -> "Hello world"

// 2.2 Capitalize the first letter of each word in a string
const capitalizeWords = (str) => {

};

// example:
// let str = "hey mom";
// console.log(capitalizeWords(str)); -> "Hey Mom"

// 2.3 Reverse a string 
const reverseString = (str) => {

};
// example:
// let srt = "Pizza";
// console.log(reverseString(str)); -> "azzip" - notice that the capital P is not capitalized


// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
const trim = (str) => { };
// example:
// let str = "   hello world   ";
// console.log(trim(str)); -> "hello world"


//______________________________________________________________________
//
// ---------------------- BONUS QUESTIONS ------------------------------
//______________________________________________________________________


// Hard mode Bonus! - 15 points -> code wihout explanation will get 0 points

// fibunacci sequence - https://en.wikipedia.org/wiki/Fibonacci_number
// write a function that returns the nth number in the fibonacci sequence
//--------------------------------------------------------------------------------------------------------------------------------

//** The Fibonacci sequence begins with the following 14 integers:
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
// Each number, starting with the third, adheres to the prescribed formula.For example, the seventh number, 8, is preceded by 3 and 5, which add up to 8.
// example 1,1,2 >> 1[1 + 2] = 3 >> 1,1,2,3
const fibonacci = (n) => {
    // ** if we pass a number that is less than or equal to 1, we just return this number.
    // Otherwise, we run the fibonacci function again, passing two previous numbers.
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};
let n = 7;
console.log(fibonacci(n))


//______________________________________________________________________

// example:
// let n = 7;
// console.log(fibonacci(n)); -> 13


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !submit your homework on github and send me the link to your homework!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Good Luck!


// #####################################################################
//  ---------------------- Done? Submit! -------------------------------
// #####################################################################



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~