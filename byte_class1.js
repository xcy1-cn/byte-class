// for byte ac class

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i ++){
//         for(let i = i; i < arr.length - 1; i++) {
//           if (arr[i] > arr[i + 1])[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]  
//         }
//     }
// }

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2]));
// [1, 2, 3, 5, 8]