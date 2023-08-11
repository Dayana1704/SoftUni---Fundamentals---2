function solve(string){
    let res = "";
   
    for(let ch of string){
        if(ch !== res[res.length-1]){
            res+= ch;
        }
    }
    console.log(res)
    

}