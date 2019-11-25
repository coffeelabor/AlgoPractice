const { performance } = require('perf_hooks')
// version 1
// function addUpTo(n){
//     let total = 0 
//     for(let i =1; i<=n; i++){
//         total +=i
//         // console.log(total)
//     }
//     return total;
// }

// addUpTo(5)
// console.log(addUpTo(3))

//version 2
function addUpTo(n){
        // console.log('n',n)
        return n * (n+1) /2;
    }
    
let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`)
    
    
// console.log(addUpTo(3))