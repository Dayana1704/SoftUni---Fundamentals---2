function solve(input){

    let map = new Map();

for(let i = 0; i<=input.length-1; i+=2){
    let resource = input[i];
    let quantity = Number(input[i+1]);
    if(!map.has(resource)){
        map.set(resource, quantity)
    }else{
    let product = map.get(resource);
    product += Number(quantity);
    map.set(resource, product)
    }
}
map = Array.from(map);

for(let [resource, quantity] of map){
    console.log(`${resource} -> ${quantity}`);
}


}