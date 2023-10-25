/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr){
    const pivotValue = arr.shift();
    const left = [];
    const right = [];
    for(let num of arr){
        if(num < pivotValue){
            left.unshift(num)
        }
        else {
            right.push(num)
        }
    }
    let pivotIndex = left.length;
    left.push(pivotValue);
    const mergedArray = left;
    for(rightNum of right){
        mergedArray.push(rightNum);
    }
    arr.unshift(pivotValue);
    for(let i = 0; i < arr.length; i++){
        arr[i] = mergedArray[i]
    }
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if(arr.length === 0){
        return arr
    } else {
        const newArray = [];
        let sort = pivot(arr);
        let left = arr.slice(0, sort);
        let mid = arr.slice(sort, (sort + 1));
        let right = arr.slice((sort + 1));
        if(left.length > 1){
            left = quickSort(left)
        }
        if(right.length > 1){
            right = quickSort(right)
        }
        if(left.length !== 0){
            for(let leftNum of left){
                newArray.push(leftNum);
            }
        }
        newArray.push(mid[0]);
        if(right.length !== 0){
            for(let rightNum of right){
                newArray.push(rightNum)
            }
        }
        return newArray
    }
}

module.exports = {
    pivot: pivot,
    quickSort: quickSort
};