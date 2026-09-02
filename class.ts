class room{
    colour():void{
        console.log("I need yellow colour");
    }
    ac():void{
        console.log("fix bluestar ac in room");
    }
    table():void{
        console.log("I need wooden table");
    }
}
const ref = new room();
ref.colour()
ref.ac()
ref.table()


//method riding -transfer parent class to children class

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