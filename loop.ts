//for loop
//for (initialization;condition;iteration){}
for(let a:number=1;a<=5;a++){
    console.log(a)
}


//while loop
//initialization
//while (condition){
//console.log
//iteration
//}
let b : number=1;
while (b<=5){
    console.log("string");
    b++
}
   
//do while
//initialization
//do{
//log()
//iteration
//}while(condition)
let c:number=1;
do{
    console.log(c);
    c++
}while(c<=5)


//for of - used to seperate multiple values in array
let off:string[]=["monday","tuesday","wednesday","thursday","friday"];
for (let sap of off){
    console.log(sap);
}

//for in - used to seperate multiple values in object

let objj:any={
    name:"vickey",
    place:"chennai",
    num:54354765787,
    id:987
}
for (let sapp in objj){
    console.log(objj[sapp]);//to print values
    console.log(sapp);//to print key

}
