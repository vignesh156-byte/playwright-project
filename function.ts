// named function
function fun1(){
    console.log("hii")
}
fun1()

//return type
function fun2(){
    return "hello"
}
console.log(fun2())

//named function with rest parameter
function fun3(a:number){
    console.log(a)
}
fun3(10);

//named function with rest parameter + return type
function add(a:number,b:number){
    return a+b;
}
console.log(add(10,5));

//named function with optional parameter
function fun4(a:string,b:number,c?:number):any{
    return a+b
}
console.log(fun4("my dob is ",1999));

//named function with default parameter
function fun5(d:string,e:number,f:number=25):any{
    return d+e+f
}
console.log(fun5("my joining date is ",20))

function fun6(d:string,e:number,f:number=25):any{
    console.log(d+e+f)
}
fun6("my joining date is ",20)

//anonymous or nameless function
let an=function(){
    console.log("name less")
}
an()

//arrow or lambda function
let aro=(hii:string)=>{console.log(hii)}
aro("arrow function")