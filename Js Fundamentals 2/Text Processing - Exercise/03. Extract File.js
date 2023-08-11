function extract(text){
    let firstIndex = text.lastIndexOf("\\");
    text = text.substring(firstIndex+1);
    let secondIndex = text.lastIndexOf(".");
    let extension = text.substring(secondIndex+1)
    text = text.substring(0, secondIndex);
    console.log(`File name: ${text}`);
    console.log(`File extension: ${extension}`)
 
 
 }