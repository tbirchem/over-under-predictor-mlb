import {awayTeamName} from "../main.js";

let i;
let obj;
let key;
let value;

function ouFinder(awayTeamName){
    if(awayTeamName === "red sox"){
        return 'Boston'
    }
    if(awayTeamName === "yankees"){
        return 'NY Yankees'
    }
    if(awayTeamName === "astros"){
        return 'Houston'
    }
    if(awayTeamName === "marlins"){
        return 'Miami'
    }
    if(awayTeamName === "royals"){
        return 'Kansas City'
    }
    if(awayTeamName === "cubs"){
        return 'Chi Cubs'
    }
    if(awayTeamName === "giants"){
        return 'SF Giants'
    }
    if(awayTeamName === "guardians"){
        return 'Cleveland'
    }
    if(awayTeamName === "phillies"){
        return 'Philadelphia'
    }
    if(awayTeamName === "orioles"){
        return 'Baltimore'
    }
    if(awayTeamName === "rockies"){
        return 'Colorado'
    }
    if(awayTeamName === "blue jays"){
        return 'Toronto, Ontario'
    }
    if(awayTeamName === "pirates"){
        return 'Pittsburgh'
    }
    if(awayTeamName === "angels"){
        return 'LA Angels'
    }
    if(awayTeamName === "brewers"){
        return 'Milwaukee'
    }
    if(awayTeamName === "mariners"){
        return 'Seattle'
    }
    if(awayTeamName === "cardinals"){
        return 'St. Louis'
    }
    if(awayTeamName === "twins"){
        return 'Minnesota'
    }
    if(awayTeamName === "nationals"){
        return 'Washington'
    }
    if(awayTeamName === "padres"){
        return 'San Diego'
    }
    if(awayTeamName === "reds"){
        return 'Cincinnati'
    }
    if(awayTeamName === "braves"){
        return 'Atlanta'
    }
    if(awayTeamName === "diamond backs"){
        return 'Arizona'
    }
    if(awayTeamName === "rays"){
        return 'Tampa Bay'
    }
    if(awayTeamName === "a's"){
        return 'Oakland'
    }
    if(awayTeamName === "rangers"){
        return 'Texas'
    }
    if(awayTeamName === "white sox"){
        return 'Chi Sox'
    }
    if(awayTeamName === "dodgers"){
        return 'LA Dodgers'
    }
    if(awayTeamName === "mets"){
        return 'NY Mets'
    }
    if(awayTeamName === "tigers"){
        return 'Detroit'
    }
}

export function aTeamOverUnder(oVoU) {
    for (i = 0; i < oVoU.length; i++) {
        obj = oVoU[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === ouFinder(awayTeamName)) {
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
                        if (value + '' === ouFinder(awayTeamName)) {
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