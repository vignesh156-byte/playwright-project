// function go():Promise<string>{
//     return new Promise((resolve, reject) => {
//         setTimeout (()=>{
//             resolve("I am going to shop")
//         },5000);
//     })

// }
// function buy(): Promise<string>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("buy the product")
//         }, 3000);
//     })
// }
// function change(): Promise<string>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("collect the change")
//         }, 2000);
//     })
// }
// function back(): Promise<string>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("come back to home")
//         }, 5000);
//     })
// }
// go()
// .then(val =>{console.log(val);return buy()})
// .then(val=>{console.log(val);return change()})
// .then(val=>{console.log(val);return back()})
// .then(val=>{console.log(val)})


//reject type
function go1():Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            let a:boolean=true;
            if(a){
                resolve("I am going to shop")
            }
            else{
                reject("I'm not going")
            }
            
        },5000);
    })

}
function buy1(): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let b:boolean=true;
            if(b){
                resolve("buy the product")
            }
            else{
                reject("not buy the product")
            }
            
        }, 3000);
    })
}
function change1(): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let c:boolean=false;
            if(c){
                resolve("collect the change")
            }
            else{
                reject("not collect the change")
            }
            
        }, 2000);
    })
}
function back1(): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let d:boolean=true;
            if(d){
                resolve("come back to home")
            }
            else{
                reject("not come back to home")
            }
            
        }, 5000);
    })
}
// go1()
// .then(val =>{console.log(val);return buy1()})
// .then(val=>{console.log(val);return change1()})
// .catch(val=>{console.log(val);return back1()})
// .then(val=>{console.log(val)})

//async function
async function asy():Promise<void> {
    try{
        const one:string= await go1();
        console.log(one);
        const two:string= await buy1();
        console.log(two);
        const three:string= await change1();
        console.log(three);
        const four:string= await back1()
        console.log(four);
    }catch(error){
        console.log(error);
    }  
}
asy();