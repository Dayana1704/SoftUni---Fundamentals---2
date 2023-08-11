function solve(input) {

    let list = new Map();

    for (let line of input) {
        line = line.split(" -> ");
        let [company, employee] = line;
        if (!list.has(company)) {
            list.set(company, new Set)
        }
      let toAdd = list.get(company);
      toAdd.add(employee)
      list.set(company, toAdd)

    }
list = Array.from(list);
let sorted = list.sort();

for(let [company, employees] of sorted){
    employees = Array.from(employees)
        console.log(`${company}`);
        for(let i = 0; i<=employees.length-1;i++){
            console.log(`-- ${employees[i]}`);
        }
    
}
}