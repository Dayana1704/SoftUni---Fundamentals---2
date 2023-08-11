function employeesList(input){
    let list = {};

    for(let employee of input){
        let length = employee.length;
        list.employee = employee;
        list.length = length;
        console.log(`Name: ${list["employee"]} -- Personal Number: ${list["length"]}`)
    }
        

}