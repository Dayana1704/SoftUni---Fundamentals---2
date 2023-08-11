function movies(input){

    let listOfMovies = [];
    
    for(let token of input){
        if(token.includes("addMovie")){
            let movieName = token.split("addMovie ")[1];
            listOfMovies.push({name: movieName});  
        }else if(token.includes("directedBy")){
            let info = token.split(" directedBy ");
            let name = info[0];
            let director = info[1];
            let isThere = listOfMovies.find(movieObject => movieObject.name == name)
            if(isThere){
                
                isThere.director = director;
            }
        }else if(token.includes("onDate")){
           let info = token.split(" onDate ");
           let name = info[0];
           let date = info[1];
           let isThere = listOfMovies.find(movieObject => movieObject.name == name);
           if(isThere){
               isThere.date = date;
           }
        }
        
            
    }
    for(let movie of listOfMovies){
        if(movie.hasOwnProperty("name")&&movie.hasOwnProperty("date")&&movie.hasOwnProperty("director"))
        console.log(JSON.stringify(movie))
     }




}