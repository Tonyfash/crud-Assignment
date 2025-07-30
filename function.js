console.log("My God is good");

const calculate =(a, b, c)=>{
    new Promise((resolve, reject)=>{
        resolve(a + b * c);
    }).then((calc)=>{
        console.log(calc)
    }).catch((err)=>{
        console.log(err.message)})
}

console.log("God has done all things");

calculate(10, 13, 4);

const numberChecker = (x)=> {
    new Promise((resolve, reject)=>{
    resolve(x % 2 === 0? console.log("Even Number"): console.log("Odd number"));
    }).then((fash)=>{
        console.log(fash)
    }).catch((err)=>{
        console.log(err.message)
    })
}
numberChecker(23);
