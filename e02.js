const array = [10, 1,  6, 19, 18, 9, 12,13, 7, 16,  5,  8, 0, 14,3, 4, 11, 15, 17,]

function insertionSort(arr){
    let j = 0;
    let temp;
    for(let i = 0; i<arr.length; i ++){
        temp = arr[i]
        j = i
        while(j > 0 && arr[j-1] > temp){
            arr[j] = arr[j-1]
            j--
            console.log(`${arr}\n`)
        }
        arr[j] = temp
        
        }
    return arr
}

console.log(insertionSort(array))