import {homeTeamName} from "../main.js";

let i;
let obj;
let key;
let value;

function teamFinder(homeTeamName){
    if(homeTeamName === "red sox"){
        return 'Boston Red Sox'
    }
    if(homeTeamName === "yankees"){
        return 'New York Yankees'
    }
    if(homeTeamName === "astros"){
        return 'Houston Astros'
    }
    if(homeTeamName === "marlins"){
        return 'Miami Marlins'
    }
    if(homeTeamName === "royals"){
        return 'Kansas City Royals'
    }
    if(homeTeamName === "cubs"){
        return 'Chicago Cubs'
    }
    if(homeTeamName === "giants"){
        return 'San Francisco Giants'
    }
    if(homeTeamName === "guardians"){
        return 'Cleveland Guardians'
    }
    if(homeTeamName === "phillies"){
        return 'Philadelphia Phillies'
    }
    if(homeTeamName === "orioles"){
        return 'Baltimore Orioles'
    }
    if(homeTeamName === "rockies"){
        return 'Colorado Rockies'
    }
    if(homeTeamName === "blue jays"){
        return 'Toronto Blue Jays'
    }
    if(homeTeamName === "pirates"){
        return 'Pittsburgh Pirates'
    }
    if(homeTeamName === "angels"){
        return 'Los Angeles Angels'
    }
    if(homeTeamName === "brewers"){
        return 'Milwaukee Brewers'
    }
    if(homeTeamName === "mariners"){
        return 'Seattle Mariners'
    }
    if(homeTeamName === "cardinals"){
        return 'St. Louis Cardinals'
    }
    if(homeTeamName === "twins"){
        return 'Minnesota Twins'
    }
    if(homeTeamName === "nationals"){
        return 'Washington Nationals'
    }
    if(homeTeamName === "padres"){
        return 'San Diego Padres'
    }
    if(homeTeamName === "reds"){
        return 'Cincinnati Reds'
    }
    if(homeTeamName === "braves"){
        return 'Atlanta Braves'
    }
    if(homeTeamName === "diamond backs"){
        return 'Arizona Diamondbacks'
    }
    if(homeTeamName === "rays"){
        return 'Tampa Bay Rays'
    }
    if(homeTeamName === "a's"){
        return 'Oakland Athletics'
    }
    if(homeTeamName === "rangers"){
        return 'Texas Rangers'
    }
    if(homeTeamName === "white sox"){
        return 'Chicago White Sox'
    }
    if(homeTeamName === "dodgers"){
        return 'Los Angeles Dodgers'
    }
    if(homeTeamName === "mets"){
        return 'New York Mets'
    }
    if(homeTeamName === "tigers"){
        return 'Detroit Tigers'
    }
}

export function homeMoneyLineFinder(moneyLine) {
    for (i = 0; i < moneyLine.length; i++) {
        obj = moneyLine[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === teamFinder(homeTeamName)) {
                return obj.moneyLine;
            }
        }
    }
}