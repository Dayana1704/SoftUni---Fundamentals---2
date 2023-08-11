function storeProvision(availableStock, deliveredStock){
    let store = {};
    
    for(let i = 0; i<=availableStock.length-1; i+=2){
        let product = availableStock[i];
        store[product] = Number(availableStock[i+1]);
        
    }
    for(let i=0; i<= deliveredStock.length-1; i+=2){
         let product = deliveredStock[i];
         if(!store.hasOwnProperty(product)){
         store[product] = 0;
         }
         store[product] += Number(deliveredStock[i+1])
    }
    for(let product in store){
        console.log(`${product} -> ${store[product]}`)
    }
    
    
    
    }