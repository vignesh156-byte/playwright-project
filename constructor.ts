class employee{
    empname:string;
    empid:number;
    dept:string;
    experience: string;

    constructor (empname:string,empid:number,dept:string,experience: string){
        this.empname=empname;
        this.empid=empid;
        this.dept=dept;
        this.experience=experience;
    }
    employeedetails():void{
        console.log("The name of the employee",this.empname);
        console.log("The id of the employee",this.empid);
        console.log("The dept of the employee",this.dept);
        console.log("The experience of the employee",this.experience);


    }

}
const empposition = new employee("vignesh",567,"quality","5 years");
empposition.employeedetails()


//read only & optional-?
class student{
    readonly stdname:string;
    stdid?:number;//optional we can use it or not use it
    clas:string;
    rank: string;

    constructor (stdname:string,stdid:number,clas:string,rank: string){
        this.stdname=stdname;
        this.stdid?=stdid;
        this.clas=clas;
        this.rank=rank;
    }
    studentdetails():void{
        console.log("The name of the student",this.stdname);
        console.log("The id of the student",this.stdid);
        console.log("The class of the student",this.clas);
        console.log("The rank of the student",this.rank);


    }

}
const studentposition = new student("vignesh",567,"12th","5 th");
studentposition.studentdetails()