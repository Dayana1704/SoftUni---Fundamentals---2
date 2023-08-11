function phoneBook(input){

    let phones={};
    for(let line of input){
        let[name, phone] = line.split(" ");
        phones[name] = phone;
    }
   for(let person in phones){
       console.log(`${person} -> ${phones[person]} `)
   }

}