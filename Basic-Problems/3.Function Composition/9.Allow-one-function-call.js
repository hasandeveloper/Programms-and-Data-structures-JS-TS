function once(fn) {
    var atMostOnce = [];
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (atMostOnce.length === 0) {
            // debugger;
            return atMostOnce[0] = fn.apply(void 0, args);
        }
        else {
            return undefined;
        }
    };
}
var fn3 = function (a, b, c) { return (a + b + c); };
var onceFn = once(fn3);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
