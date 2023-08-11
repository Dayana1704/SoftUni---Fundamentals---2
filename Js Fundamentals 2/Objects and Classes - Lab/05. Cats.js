function meowCat(input){
    class Cats{
        constructor(name, age){
            this.name = name,
            this.age = age
        }
        sayMeow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    
    }
     
    for(let catInfo of input){
        let token = catInfo.split(" ");
        let catName = token[0];
        let catAge = Number(token[1]);
        let cat = new Cats(catName, catAge);
        cat.sayMeow();
    }
    
    
    
    
    }