function f (callback:()=>void){
    setTimeout(() => {
        console.log("loading")
        callback()
    }, 5000);
}
function s (callback:()=>void){
    setTimeout(() => {
        console.log("loading successfully")
        callback()
    }, 4000);
}
function t (callback:()=>void){
    setTimeout(() => {
        console.log("still loading")
        callback()
    }, 3000);
}
function fo (callback:()=>void){
    setTimeout(() => {
        console.log("loaded")
        callback()
    }, 2000);
}

f(()=>{
    s(()=>{
        t(()=>{
            fo(()=>{

            });
        });
    });
    
    
});