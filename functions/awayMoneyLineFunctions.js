import {awayTeamName} from "../main.js";

let i;
let obj;
let key;
let value;

function teamFinder(awayTeamName){
    if(awayTeamName === "red sox"){
        return 'Boston Red Sox'
    }
    if(awayTeamName === "yankees"){
        return 'New York Yankees'
    }
    if(awayTeamName === "astros"){
        return 'Houston Astros'
    }
    if(awayTeamName === "marlins"){
        return 'Miami Marlins'
    }
    if(awayTeamName === "royals"){
        return 'Kansas City Royals'
    }
    if(awayTeamName === "cubs"){
        return 'Chicago Cubs'
    }
    if(awayTeamName === "giants"){
        return 'San Francisco Giants'
    }
    if(awayTeamName === "guardians"){
        return 'Cleveland Guardians'
    }
    if(awayTeamName === "phillies"){
        return 'Philadelphia Phillies'
    }
    if(awayTeamName === "orioles"){
        return 'Baltimore Orioles'
    }
    if(awayTeamName === "rockies"){
        return 'Colorado Rockies'
    }
    if(awayTeamName === "blue jays"){
        return 'Toronto Blue Jays'
    }
    if(awayTeamName === "pirates"){
        return 'Pittsburgh Pirates'
    }
    if(awayTeamName === "angels"){
        return 'Los Angeles Angels'
    }
    if(awayTeamName === "brewers"){
        return 'Milwaukee Brewers'
    }
    if(awayTeamName === "mariners"){
        return 'Seattle Mariners'
    }
    if(awayTeamName === "cardinals"){
        return 'St. Louis Cardinals'
    }
    if(awayTeamName === "twins"){
        return 'Minnesota Twins'
    }
    if(awayTeamName === "nationals"){
        return 'Washington Nationals'
    }
    if(awayTeamName === "padres"){
        return 'San Diego Padres'
    }
    if(awayTeamName === "reds"){
        return 'Cincinnati Reds'
    }
    if(awayTeamName === "braves"){
        return 'Atlanta Braves'
    }
    if(awayTeamName === "diamond backs"){
        return 'Arizona Diamondbacks'
    }
    if(awayTeamName === "rays"){
        return 'Tampa Bay Rays'
    }
    if(awayTeamName === "a's"){
        return 'Oakland Athletics'
    }
    if(awayTeamName === "rangers"){
        return 'Texas Rangers'
    }
    if(awayTeamName === "white sox"){
        return 'Chicago White Sox'
    }
    if(awayTeamName === "dodgers"){
        return 'Los Angeles Dodgers'
    }
    if(awayTeamName === "mets"){
        return 'New York Mets'
    }
    if(awayTeamName === "tigers"){
        return 'Detroit Tigers'
    }
}

export function awayMoneyLineFinder(moneyLine) {
    for (i = 0; i < moneyLine.length; i++) {
        obj = moneyLine[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === teamFinder(awayTeamName)) {
                return obj.moneyLine;
            }
        }
    }
}