function insertionSort(arr) {
    if(arr.length === 0){
        return [];
    }
    else if(arr.length === 1){
        return arr
    }
    const newArray = [arr[0]];
    for(let i=1; i < arr.length; i++){
        let hasChanged = false;
        let nextHighest = null;
        for(let j=0; j < newArray.length; j++){
            if(!hasChanged){
                if (arr[i] > newArray[j]){
                    if(nextHighest === null || newArray[nextHighest] <= newArray[j]){
                        nextHighest = j;
                    }
                }
                if(j === (newArray.length - 1)){
                    if(nextHighest !== null){
                        newArray.splice(nextHighest, 1, newArray[nextHighest], arr[i]);
                        hasChanged = true;
                    }
                    else {
                        newArray.unshift(arr[i]);
                        hasChanged = true;
                    }
                }
            }
        }
    }
    return newArray;
}

module.exports = insertionSort;