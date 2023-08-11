function solve(input) {
    let text = input[0];
    let words = input[1];
    let counter = 0;
    for (let char of text) {
        if (char == "_") {
            counter++;
        } else if (char !== "_" && counter > 0) {
            let toReplace = "_".repeat(counter);
            for (let word of words) {
                if (word.length == counter) {
                    text = text.replace(toReplace, word)
                    counter = 0;
                }
            }

        }
    }
    console.log(text);



}