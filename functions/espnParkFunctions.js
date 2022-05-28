import {homeTeamName} from "../main.js";

let i;
let obj;
let key;
let value;

function espnParkFinder(homeTeamName){
    if(homeTeamName === "red sox"){
        return 'null(Boston, Massachusetts)'
    }
    if(homeTeamName === "yankees"){
        return 'null(Bronx, New York)'
    }
    if(homeTeamName === "astros"){
        return 'null(Houston, Texas)'
    }
    if(homeTeamName === "marlins"){
        return 'null(Miami, Florida)'
    }
    if(homeTeamName === "royals"){
        return 'null(Kansas City, Missouri)'
    }
    if(homeTeamName === "cubs"){
        return 'cubs(Chicago, Illinois)'
    }
    if(homeTeamName === "giants"){
        return 'null(San Francisco, California)'
    }
    if(homeTeamName === "guardians"){
        return 'null(Cleveland, Ohio)'
    }
    if(homeTeamName === "phillies"){
        return 'null(Philadelphia, Pennsylvania)'
    }
    if(homeTeamName === "orioles"){
        return 'null(Baltimore, Maryland)'
    }
    if(homeTeamName === "rockies"){
        return 'null(Denver, Colorado)'
    }
    if(homeTeamName === "blue jays"){
        return 'Rogers Centre(Toronto, Ontario)'
    }
    if(homeTeamName === "pirates"){
        return 'null(Pittsburgh, Pennsylvania)'
    }
    if(homeTeamName === "angels"){
        return 'null(Anaheim, California)'
    }
    if(homeTeamName === "brewers"){
        return 'null(Milwaukee, Wisconsin)'
    }
    if(homeTeamName === "mariners"){
        return 'null(Seattle, Washington)'
    }
    if(homeTeamName === "cardinals"){
        return 'null(St. Louis, Missouri)'
    }
    if(homeTeamName === "twins"){
        return 'null(Minneapolis, Minnesota)'
    }
    if(homeTeamName === "nationals"){
        return 'null(Washington, District of Columbia)'
    }
    if(homeTeamName === "padres"){
        return 'null(San Diego, California)'
    }
    if(homeTeamName === "reds"){
        return 'null(Cincinnati, Ohio)'
    }
    if(homeTeamName === "braves"){
        return 'null(Atlanta, Georgia)'
    }
    if(homeTeamName === "diamond backs"){
        return 'null(Phoenix, Arizona)'
    }
    if(homeTeamName === "rays"){
        return 'null(St. Petersburg, Florida)'
    }
    if(homeTeamName === "a's"){
        return 'null(Oakland, California)'
    }
    if(homeTeamName === "rangers"){
        return 'null(Arlington, Texas)'
    }
    if(homeTeamName === "white sox"){
        return 'null(Chicago, Illinois)'
    }
    if(homeTeamName === "dodgers"){
        return 'null(Los Angeles, California)'
    }
    if(homeTeamName === "mets"){
        return 'null(Queens, New York)'
    }
    if(homeTeamName === "tigers"){
        return 'null(Detroit, Michigan)'
    }
}

export function espnParkRuns(espnParks) {
    for (i = 0; i < espnParks.length; i++) {
        obj = espnParks[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === espnParkFinder(homeTeamName)) {
                return obj.runs;
            }
        }
    }
}

export function espnParkName(espnParks){
    for (i = 0; i < espnParks.length; i++) {
        obj = espnParks[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === espnParkFinder(homeTeamName)) {
                return obj.parkLocation;
            }
        }
    }
}