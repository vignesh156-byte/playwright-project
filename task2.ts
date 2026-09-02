let arr: string[]=["java","hello","js","ts"];
console.log(arr.slice(2,3))

type Key = {
    name: string;
    place: string;
    age: number;
    id: number;
};

let obj: Key[] = [
    { name: "vijay", place: "Chennai", age: 26, id: 5464 },
    { name: "saravanan", place: "Coimbatore", age: 32, id: 5465 },
    { name: "john", place: "Anna Nagar", age: 35, id: 5466 },
    { name: "ravi", place: "T Nagar", age: 24, id: 5467 },
    { name: "ragul", place: "OMR", age: 27, id: 5468 }
];

let person = obj.find(a => a.name === "vijay");

if (person) {
    console.log("Name :", person.name);
    console.log("Place:", person.place);
    console.log("Age  :", person.age);
    console.log("ID   :", person.id);
} else {
    console.log("Person not found");
}