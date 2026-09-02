let ars:number[]=[1,2,3,4,5]
ars.push(6)
ars.pop()
ars.shift()
ars.unshift(1)
console.log(ars);

let ars1:string[]=["sunday","monday","tuesday","thursday","friday","saturday"]
ars1.splice(3,2,"wednesday","s day")
console.log(ars1);

let ars2:number[]=[1,2,6,4,7,5]
console.log(ars2.sort())

//map- here we can use arithmatic operators
let m:number[]=[10,20,30,40]
let m1=m.map((a,b,c)=>a*2)
console.log(m1)

//filter-here we can use relational operator
let f:number[]=[10,20,30,40,65,75,89,65,78,56,43]
let f1=m.filter((a,b,c)=>a<50)
console.log(f1)

//reduce-here we use compiler and current value
let x:number[]=[10,20,30,40,65,75,89,65,78,56,43]
let x1=m.reduce((g,h)=>g-h)
console.log(x1)