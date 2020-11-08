const sumAll = function(min, max) {
    if (min > max){
        let tempMin = max;
        max = min;
        min = tempMin;
    }
    let i = min;
    let sum = 0;
    if (typeof min != 'number' || typeof max != 'number' || min === NaN || max === NaN ||
    min < 0 || max < 0) {
        return 'ERROR'
    } else {
        while (i <= max) {
            sum += i;
            i++;
        }

    }
    return sum;
   
}

module.exports = sumAll

sumAll(1, 4)