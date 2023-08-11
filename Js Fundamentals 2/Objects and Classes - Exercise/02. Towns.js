function towns(input) {
    let townsInfo= {};

    for (let town of input) {
        let token = town.split(" | ");
        let cityName = token[0];
        let latitude = Number(token[1]).toFixed(2);
        let longitude = Number(token[2]).toFixed(2);

        townsInfo.town = cityName;
        townsInfo.latitude = latitude;
        townsInfo.longitude = longitude;
        console.log(townsInfo)

    }

}