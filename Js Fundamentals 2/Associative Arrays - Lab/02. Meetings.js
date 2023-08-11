function meetings(input){

    let object = {};

    for(let line of input){
        let [day, name] = line.split(" ");

        if(object.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            
        }else{
            object[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for(let day in object){
        console.log(`${day} -> ${object[day]}`)
    }

}