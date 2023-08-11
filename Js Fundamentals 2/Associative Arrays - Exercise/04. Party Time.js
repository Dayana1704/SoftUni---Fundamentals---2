function party(input){

    let vip = new Set();
    let regular = new Set();

    let index = 0;
    let command = input[index];
    index++;
    let counter = 1;

    while(command!== "PARTY"){
        counter++;
        let invitation = command;
        
        if(Number.isNaN(Number(invitation[0]))){
            regular.add(invitation);
        }else{
            vip.add(invitation);
        }
        command=input[index++]
    }

    for(let i = counter; i<=input.length-1; i++){
        if(vip.has(input[i])){
            vip.delete(input[i]);
        }else if(regular.has(input[i])){
            regular.delete(input[i])
        }
    }
   let allMissing = vip.size + regular.size;
   console.log(allMissing);
   let vipKeys = vip.keys();
   vipKeys = Array.from(vipKeys);
   let regularKeys = regular.keys();
   regularKeys = Array.from(regularKeys);

   for(let key of vipKeys){
       console.log(key);
   }
   for(let key of regularKeys){
       console.log(key);
   }

}