//method over riding
class factory1{
    capital():void{
        console.log("50 lakhs");
    }
    machines():void{
        console.log("30 lakhs");
    }
    manpower():void{
        console.log("10 lakhs");
    }
    maintenance():void{
        console.log("10 lakhs");

    }
}


class factory2 extends factory1{
    capital():void{
        console.log("60 lakhs");
    }
    machines():void{
        console.log("40 lakhs");
    }
    manpower():void{
        console.log("15 lakhs");
    }
    maintenance():void{
        console.log("5 lakhs");

    }
}
const fac = new factory2();
fac.capital();