import {homeTeamName} from "../main.js";

let i;
let obj;
let key;
let value;

function ouFinder(homeTeamName){
    if(homeTeamName === "red sox"){
        return 'Boston'
    }
    if(homeTeamName === "yankees"){
        return 'NY Yankees'
    }
    if(homeTeamName === "astros"){
        return 'Houston'
    }
    if(homeTeamName === "marlins"){
        return 'Miami'
    }
    if(homeTeamName === "royals"){
        return 'Kansas City'
    }
    if(homeTeamName === "cubs"){
        return 'Chi Cubs'
    }
    if(homeTeamName === "giants"){
        return 'SF Giants'
    }
    if(homeTeamName === "guardians"){
        return 'Cleveland'
    }
    if(homeTeamName === "phillies"){
        return 'Philadelphia'
    }
    if(homeTeamName === "orioles"){
        return 'Baltimore'
    }
    if(homeTeamName === "rockies"){
        return 'Colorado'
    }
    if(homeTeamName === "blue jays"){
        return 'Toronto'
    }
    if(homeTeamName === "pirates"){
        return 'Pittsburgh'
    }
    if(homeTeamName === "angels"){
        return 'LA Angels'
    }
    if(homeTeamName === "brewers"){
        return 'Milwaukee'
    }
    if(homeTeamName === "mariners"){
        return 'Seattle'
    }
    if(homeTeamName === "cardinals"){
        return 'St. Louis'
    }
    if(homeTeamName === "twins"){
        return 'Minnesota'
    }
    if(homeTeamName === "nationals"){
        return 'Washington'
    }
    if(homeTeamName === "padres"){
        return 'San Diego'
    }
    if(homeTeamName === "reds"){
        return 'Cincinnati'
    }
    if(homeTeamName === "braves"){
        return 'Atlanta'
    }
    if(homeTeamName === "diamond backs"){
        return 'Arizona'
    }
    if(homeTeamName === "rays"){
        return 'Tampa Bay'
    }
    if(homeTeamName === "a's"){
        return 'Oakland'
    }
    if(homeTeamName === "rangers"){
        return 'Texas'
    }
    if(homeTeamName === "white sox"){
        return 'Chi Sox'
    }
    if(homeTeamName === "dodgers"){
        return 'LA Dodgers'
    }
    if(homeTeamName === "mets"){
        return 'NY Mets'
    }
    if(homeTeamName === "tigers"){
        return 'Detroit'
    }
}

export function hTeamOverUnder(oVoU) {
    for (i = 0; i < oVoU.length; i++) {
        obj = oVoU[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === ouFinder(homeTeamName)) {
                obj.overPercentage;
                if (obj.overPercentage >= .54) {
                    return 'way over';
                } else if (obj.overPercentage >= .50 && obj.overPercentage < .54) {
                    return 'over'
                }
                for (i = 0; i < oVoU.length; i++) {
                    obj = oVoU[i];
                    for (key in obj) {
                        value = obj[key];
                        // console.log("-" + key + ": " + value);
                        if (value + '' === ouFinder(homeTeamName)) {
                            obj.underPercentage;
                            if (obj.underPercentage >= .60) {
                                return 'way under';
                            }else if(obj.underPercentage <= .59 && obj.underPercentage >= .501){
                                return 'under'
                            }
                        }
                    }
                }
            }
        }
    }
}