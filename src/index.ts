
type Employee = {
     fullName: [string, string],
     age: number,
     department: string,
     skills: string[],
     isActive: boolean
   };

   let employee1 : Employee = {
        fullName: ["Pule", "Lebogang"],
        age: 24,
        department: "Computer Science",
        skills: ["JavaScript", "TypeScript", "Java"],
        isActive: true
   }

let employee2 : Employee = {
        fullName: ["Trudy", "Marry"],
        age: 29,
        department: "Computer Systems Engineering",
        skills: ["C++", "Python", "Java"],
        isActive: false
}

function logEmployee(employee: Employee): void {
    console.log(`Full Name: ${employee.fullName[0]} ${employee.fullName[1]}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Skills: ${employee.skills.join(", ")}`);
    console.log(`Active Status: ${employee.isActive ? "Active" : "Inactive"}`);
}

logEmployee(employee1);
logEmployee(employee2);