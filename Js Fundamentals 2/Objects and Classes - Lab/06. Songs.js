function solve(input){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }

    }
    let n = input.shift();
    let command = input.pop();
    for(let i=0; i<n; i++){
        let token = (input[i]).split("_");
        let typeList = token[0];
        let name = token[1];
        let time = token[2];
     
        let song = new Song(typeList, name, time);
       let result = [];
       if(command == "all"){
          console.log(song.name)
       }else{
           if(song.typeList == command){
             console.log(song.name)
           }else{

           }
           
       }
      
    }
   


}