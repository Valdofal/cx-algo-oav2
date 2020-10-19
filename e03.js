const array = [10, 1,  6, 19, 18, 9, 12,13, 7, 16,  5,  8, 0, 14,3, 4, 11, 15, 17,]

function selectionSort(arr){
    let minIndex = arr[0];
    let temp = 0;
    for(let i = 0; i<arr.length -1; i ++){
        minIndex = i;
        for(let j = i; j < arr.length; j ++){
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if( i != minIndex){
            temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

console.log(selectionSort(array))