// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
function compose(functions) {
    if (functions.length === 0) {
        return function (x) { return x; };
    }
    return function (x) {
        return functions.reduceRight(function (accumalator, currentValue) {
            debugger;
            return currentValue(accumalator);
        }, x);
    };
}
;
var fn = compose([function (x) { return x + 1; }, function (x) { return 2 * x; }]);
fn(4);
