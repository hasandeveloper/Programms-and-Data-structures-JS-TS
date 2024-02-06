// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
function filter(arr, fn) {
    var modifiedArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            modifiedArray.push(arr[i]);
        }
    }
    return modifiedArray;
}
;
