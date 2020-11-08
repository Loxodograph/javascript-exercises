const removeFromArray = function(arr, index) {
    let maxArg = arguments.length -1;
    for (let i = 1; i <= maxArg; i++){
      let deletedElement = arr.indexOf(arguments[i]);
      if (deletedElement != -1) {
        arr.splice(deletedElement, 1);
        }
    }
    return arr;
    ;
}

module.exports = removeFromArray