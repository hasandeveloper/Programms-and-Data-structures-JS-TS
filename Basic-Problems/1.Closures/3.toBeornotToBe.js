// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
function expect(val) {
    return {
        toBe: function (val1) {
            if (val === val1) {
                return true;
            }
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (val2) {
            if (val !== val2) {
                return true;
            }
            else {
                throw new Error("Equal");
            }
        }
    };
}
;
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */ 
