function solve(input) {
    let pattern1 = /[A-Za-z]+/g;
    let pattern2 = /\d/g;
    let names = input.shift().split(", ");
    let object = {};

    let index = 0;
    let command = input[index];



    while (command !== 'end of race') {
        let name = command.match(pattern1)
        name = name.join("");
        if (names.includes(name)) {
            let digits = command.match(pattern2);
            let sum = 0;
            for (let digit of digits) {
                sum += Number(digit);
            }
            if (object.hasOwnProperty(name)) {
                object[name] += sum;
            } else {
                object[name] = sum;
            }

        }
        index++;
        command = input[index];
    }
    
    let sorted = Object.entries(object).sort((a,b) => b[1]-a[1]);

    console.log(`1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`)



}