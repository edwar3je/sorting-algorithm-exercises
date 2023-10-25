function selectionSort(arr) {
    for(let i=0; i < arr.length; i++){
        let min = arr[i];
        let swappedPosition = null;
        for(let j=0; j < arr.length; j++){
            if(i === (arr.length - 1)){
                break
            }
            if(j > i && min > arr[j]){
                min = arr[j];
                swappedPosition = j;
            }
            if(j === (arr.length - 1) && swappedPosition){
                let oldNum = arr[i];
                arr[i] = arr[swappedPosition];
                arr[swappedPosition] = oldNum;
            }
        }
    }
    return arr;
}

module.exports = selectionSort;