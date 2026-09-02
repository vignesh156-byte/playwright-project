function f ():void{
    setTimeout(() => {
        console.log("loading")
    }, 5000);
}
function s ():void{
    setTimeout(() => {
        console.log("loading successfully")
    }, 1000);
}
f();
s();