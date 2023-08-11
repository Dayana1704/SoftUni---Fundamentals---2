function cityInfo(city){
  
    let keys = Object.keys(city);
   for(let key of keys){
       console.log(`${key} -> ${city[key]}`);
   }

}