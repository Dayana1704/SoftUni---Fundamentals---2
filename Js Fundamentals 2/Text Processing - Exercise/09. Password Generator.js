function solve(input){
    let firstStr = input[0];
    let secondStr = input[1];
    let thirdStr = input[2];

    let newStr = firstStr+secondStr;
    let counter = -1;
    
    
    for(let i = 0; i<=newStr.length-1;i++){
        if(newStr[i] == "a"|| newStr[i] == "e"|| newStr[i] == "i"||newStr[i] =="o"|| newStr[i]=="u"){
counter++;
if(counter> thirdStr.length-1){
    counter=0;
}
newStr = newStr.replace(newStr[i], thirdStr[counter].toUpperCase());
        }
    }
    newStr = newStr.split("").reverse().join("")
console.log(`Your generated password is ${newStr}`);
}