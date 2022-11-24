
function autoMatrix(size, str = 0) {
    let martrix = []
    for (let row = 0; row < size; row++) {
        let inner_arr = []
        for (let col = 0; col < size; col++) {
            inner_arr.push(str);
        }
        martrix.push(inner_arr)
    }
    return martrix
}

let m = autoMatrix(3)




function setIndex(m, i, j, val) {
    m[i][j] = val;

}

// let arr = [0, 0, 0]
// function setNew(i, val, arr) {
//     arr[i] = val;
//     return arr;
// }
// setNew(1, 2, arr)
// setIndex(1, 1, 1, m)
// console.log(m)

/////////////////

function printMat(m) {
    for (let i = 0; i < m.length; i++) {
        console.log(...m[i])
    }
}
printMat(m)
console.log("------------------------------------")

function diagonal(m, val = 1) {
    for (let i = 0; i < m.length; i++) {
        m[i][i] = val
    }
    return m;
}

// printMat(diagonal(m))

console.log("--------------")

function diagonalT(m) {
    for (let i = 0; i < m.length; i++) {
        setIndex(m, i, m.length - 1 - i, 1)
    }

}
diagonalT(m)
printMat(m)

console.log("---------------------------")


function matrixtoArray(m) {
    let arr2 = [];
    for (let i = 0; i < m.length; i++) {
        arr2.push(...m[i]);
    }
    return arr2;
}
console.log(matrixtoArray(m))

console.log("-----------------------------------8")

function arrToMatrix(arr) {
    let matrix = autoMatrix(Math.sqrt(arr.length));
    let x = 0;
    for (let i = 0; i < Math.sqrt(arr.length); i++) {
        for (let j = 0; j < Math.sqrt(arr.length); j++) {
            matrix[i][j] = arr[x];
            x++;
        }
        return matrix;
    }
}

console.log(arrToMatrix(matrixtoArray(m)))


// function indexC(i, j, size){

// }

