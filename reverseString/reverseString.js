const reverseString = function(str) {
    let indexCount = str.length - 1;
    let newWord = "";
    for (let i = indexCount; i >= 0; i--){
        newWord += str[i];
    }
    return newWord;
}

module.exports = reverseString
