function occurences(input){
    let token = input.split(" ");
    let arr = [];
let object = {};
    for(let word of token){
        arr.push(word.toLowerCase());
     
    }
    for(let word of arr){
if(object.hasOwnProperty(word)){
    object[word]++;
}else{
    object[word] = 1;
}
    }
let keys = [];
   for(let key in object){
       if(object[key] %2!==0){
           keys.push(key);
       }
   }
   console.log(keys.join(" "))
    
}