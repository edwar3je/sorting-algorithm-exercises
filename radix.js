function getDigit(num, decaDigit) {
    let numString = num.toString();
    let result = numString.charAt(numString.length - (1 + decaDigit));
    if(result === ""){
        return 0
    }
    return Number(result);
};

function digitCount(num) {
    let numString = num.toString();
    return numString.length;
};

function mostDigits(arr) {
    let max = 0;
    for(let num of arr){
        if(digitCount(num) > max){
            max = digitCount(num)
        }
    }
    return max
};

function radixSort(arr, currentDecaDigit=0) {
    if(arr.length <= 1){
        return arr
    }
    let max = mostDigits(arr);
    const newArr = [];
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    for(let initNum of arr){
        let digit = getDigit(initNum, currentDecaDigit);
        buckets[digit].push(initNum)
    }
    for(let i=0; i < buckets.length; i++){
        while(buckets[i].length){
            let currentValue = buckets[i].shift();
            newArr.push(currentValue);
        }
    }
    currentDecaDigit++;
    if(currentDecaDigit !== max){
        return radixSort(newArr, currentDecaDigit);
    } else {
        return newArr
    }
};

module.exports = {
    getDigit: getDigit,
    digitCount: digitCount,
    mostDigits: mostDigits,
    radixSort: radixSort
};