type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let atMostOnce: object[] = []
    return function (...args) {

        if(atMostOnce.length === 0){
            return atMostOnce[0] = fn(...args)
        }else{
            return undefined
        }
 
    };
}


let fn3 = (a: number,b: number,c: number) => (a + b + c)
let onceFn = once(fn3)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn
