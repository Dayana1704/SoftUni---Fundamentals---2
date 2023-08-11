function school(input){
    let myMap = new Map();
  

    for(let line of input){
        line = line.split(" ");
         let name = line.shift();
         let grades = line.map(Number);
          
         if(!myMap.has(name)){
             myMap.set(name, []);
         }
         let add = myMap.get(name);
             for(let grade of grades){
               add.push(grade)
             }
     
    }
    let entries = Array.from(myMap.entries());
    let sorted = entries.sort((a,b) => a[0].localeCompare(b[0]));
    
    for(let [student, grades] of sorted){
        let average = 0;
        for(let grade of grades){
       average+= grade;
        }
        average = (average/grades.length).toFixed(2);
        console.log(`${student}: ${average}`)
       
    }
    

}