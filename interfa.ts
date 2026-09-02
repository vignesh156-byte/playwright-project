//reguler properties
interface employee{
    empname:string;
    empage:number;
}
const det :employee={
    empname:"brindha",
    empage:58
}
console.log(det)

//optional properties
interface person{
    name:string;
    age:number;
    cat:string;
}
const cv :person={
    name:"brindha",
    age:58
}
console.log(cv)

//readonly properties & function types
interface student{
   readonly stuname:string;
    stuage:number;
    sturank:string
}
const st :student={
    stuname:"brindha",
    stuage:58,
    sturank:"six"
}
console.log(st)

//extending interface
interface p1{
    land:string;
}
interface p2 extends p1{
    cash:string
}
const c1:p2={
    land:"one acre",
    cash:"50 lakhs"
}
console.log(c1)

//implements
interface person1{
    name:string;
    age:number;
}
class std implements person1{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

}
const stn = new std("vijay",23);
console.log(stn.name)