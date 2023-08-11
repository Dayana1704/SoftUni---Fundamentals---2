function piccolo(input){
    let garage = new Set();

    for(let line of input){
        line = line.split(", ");
       let [command, car]  = line;
       if(command == "IN"){
           garage.add(car)
       }else{
           garage.delete(car)
       }
       if(garage.size==0){
           console.log("Parking Lot is Empty");
       }
    }
    let arr = Array.from(garage);
    let sorted = arr.sort();
    for(let car of sorted){
        console.log(car);
    }

}