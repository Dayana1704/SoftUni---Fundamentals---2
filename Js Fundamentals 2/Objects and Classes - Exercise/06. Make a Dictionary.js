function inventory(input){
    let heroes = [];

    for(let token of input){
       let heroInfo = token.split(" / ");
       let name = heroInfo[0];
       heroes.push({name: name});
       let hero = heroes.find(Object => Object.name== name);
       let level = Number(heroInfo[1]);
       hero.level = level;
       let items = heroInfo[2];
       hero.Items = items;
       heroes.sort((a,b) => a.level-b.level)
    }
    
    for(let hero of heroes){
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.Items}` )
    }


    

}