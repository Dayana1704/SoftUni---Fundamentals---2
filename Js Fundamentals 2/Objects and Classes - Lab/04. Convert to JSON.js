function convert(name, lastName, hairColor){
 
    let person = {
        name, 
        lastName,
        hairColor
    }
   

    person = JSON.stringify(person);
    console.log(person)
    
}