let as1: number[] = [4, 3, 2, 1, 5];

as1.sort((a, b) => b - a);

console.log(as1);   

let as2 : string="my name is vignesh kumar";
let res = as2.split(" ").map((a,b,c)=>a[0].toUpperCase()+a.slice(1)).join(" ");
console.log(res);