// for(let a : number=1;a<=5;a++){
//     console.log("vignesh");
// }

// for(let b : number=5;b>=1;b--){
//     console.log(b);
// }

//even number
// let c:number=1;
// while(c<=20){
//     if (c%2===0){

//         console.log(c)
//     }
//     c++
// }

//7th table
// let d:number=1;
// do{
//     console.log("7 x "+d+" = "+7*d)
//     d++;
// }while (d<=10);

// let objj :any={
//     name: "vignesh",
//     place: "chennai",
//     num:6474930388,
//     id:976
// }
// for (let sapp in objj){
//     console.log(sapp+" : " +objj[sapp])

// }
//reverse
// let sentence: string = "My name is vignesh";

// let words: string[] = sentence.split(" ");
// let reverse: string = "";

// for (let i = words.length - 1; i >= 0; i--) {
//     reverse = reverse + words[i] + " ";
// }

// console.log(reverse);

// //character identification

// let g: string = "vignesh kumar";

// let counts: { [key: string]: number } = {};

// for (let h: number = 0; h < g.length; h++) {
//     let ch: string = g[h];

//     if (counts[ch]) {
//         counts[ch]++;
//     } else {
//         counts[ch] = 1;
//     }
// }

// console.log("Repeated characters:");

// for (let key in counts) {
//     if (counts[key] > 1) {
//         console.log(`${key} -> ${counts[key]}`);
//     }
// }

// console.log("Unique characters:");

// for (let key in counts) {
//     if (counts[key] === 1) {
//         console.log(`${key} -> ${counts[key]}`);
//     }
// }

//palindrome
// let pal : string="hello";
// let rev : string="";
// for (let j = pal.length - 1; j >= 0; j--) {
//      rev = rev + pal[j];
//  }
// if (pal===rev){
//     console.log("palindrome");
// }else{
//     console.log("not palindrome")
// }

// //word occurance
// let o: string = "my name is vignesh kumar";
// let q : string[] =o.split(" ")
// let cou: { [key: string]: number } = {};

//  for (let p: number = 0; p < q.length; p++) {
//      let s: string = q[p];

//     if (cou[s]) {
//         cou[s]++;
//      } else {
//         cou[s] = 1;
//    }
// }
// console.log("word occurance:");

// for (let key in cou){
//     console.log(`${key}->${cou[key]}`)
// }
// //prime numbers

// let pr : number=6;
// let co:number=0

// for (let x:number=1;x <= pr;x++){
//     if(pr % x===0){
//         co++;
       
//     }

// }
// if (co ===2){
//     console.log("prime number");
// }else{
//     console.log("not prime number")
// }



//febonic series
// let n: number = 11;

// let a: number = 0;
// let b: number = 1;

// for (let i: number = 0; i < n; i++) {
//     console.log(a);

//     let c: number = a + b;

//     a = b;
//     b = c;
// }

//promise task
 function walk():Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("going to walk with dog")
        }, 5000);
        
    })
 }
 function clean():Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("clean the car")
        }, 4000);
    })
 }
 function trash():Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("put the trash out")
        }, 3000);
    })
 }
 walk()
 .then(val=>{console.log(val);return clean()})
 .then(val=>{console.log(val);return trash()})
 .then(val=>{console.log(val)});