let employeDetails = {
    name : "sai Kumar",
    salary: 250000,
    company: "Zoho",
    role: "Developer",
    skills : ["java","System Design","Microservices"],
    address:{
        city: 'Guntur',
        zipcode: 522514
    }
}
console.log(employeDetails);
let employee = new Object({
    name : "sai Kumar",
    salary: 250000,
    company: "Zoho",
    role: "Developer",
    skills : ["java","System Design","Microservices"],
    address:{
        city: 'Guntur',
        zipcode: 522514
    }
})
console.log(employee);
//CRUD operations
employeDetails.skills.map((x)=>{
    console.log(x);
})
//Object.seal(employeDetails);//only we can update after seal
Object.freeze(employeDetails);///this used we can not also update the details
employeDetails.email = "saikumar@gmail.com";
employeDetails.phoneNo = 9988776655;
delete employeDetails.skills;
delete employeDetails.name;
console.log(employeDetails.address.city);
//Object in-built functions
console.log(Object.keys(employeDetails));
console.log(Object.values(employeDetails));
console.log(Object.entries(employeDetails));