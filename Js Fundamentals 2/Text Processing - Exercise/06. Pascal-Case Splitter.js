function solve(input){
    let str = "";
    for(let ch of input){
     let chToLower = ch.toLowerCase();
     if(ch!== chToLower){
         str+=", "+ ch
     }else{
        str+=ch;
    }

}

    console.log(str.substring(2))
   
}