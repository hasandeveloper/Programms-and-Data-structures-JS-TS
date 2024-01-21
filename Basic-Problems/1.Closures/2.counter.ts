function createCounter(n: number): () => number {
    var currentCount: number = n;
    var refOutCounter: number = 0;
    return function() {
        let count: number = currentCount + refOutCounter
        refOutCounter++
        return count
    }
}



  const counter = createCounter(10)
  console.log(counter()) // 10
  console.log(counter()) // 11
  console.log(counter()) // 12
