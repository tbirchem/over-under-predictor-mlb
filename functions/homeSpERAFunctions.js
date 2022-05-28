import {homeTeamName} from "../main.js";

function teamFinder(homeTeamName){
    if(homeTeamName === "red sox"){
        return 'Red Sox'
    }
    if(homeTeamName === "yankees"){
        return 'Yankees'
    }
    if(homeTeamName === "astros"){
        return 'Astros'
    }
    if(homeTeamName === "marlins"){
        return 'Marlins'
    }
    if(homeTeamName === "royals"){
        return 'Royals'
    }
    if(homeTeamName === "cubs"){
        return 'Cubs'
    }
    if(homeTeamName === "giants"){
        return 'Giants'
    }
    if(homeTeamName === "guardians"){
        return 'Guardians'
    }
    if(homeTeamName === "phillies"){
        return 'Phillies'
    }
    if(homeTeamName === "orioles"){
        return 'Orioles'
    }
    if(homeTeamName === "rockies"){
        return 'Rockies'
    }
    if(homeTeamName === "blue jays"){
        return 'Blue Jays'
    }
    if(homeTeamName === "pirates"){
        return 'Pirates'
    }
    if(homeTeamName === "angels"){
        return 'Angels'
    }
    if(homeTeamName === "brewers"){
        return 'Brewers'
    }
    if(homeTeamName === "mariners"){
        return 'Mariners'
    }
    if(homeTeamName === "cardinals"){
        return 'Cardinals'
    }
    if(homeTeamName === "twins"){
        return 'Twins'
    }
    if(homeTeamName === "nationals"){
        return 'Nationals'
    }
    if(homeTeamName === "padres"){
        return 'Padres'
    }
    if(homeTeamName === "reds"){
        return 'Reds'
    }
    if(homeTeamName === "braves"){
        return 'Braves'
    }
    if(homeTeamName === "diamond backs"){
        return 'D-backs'
    }
    if(homeTeamName === "rays"){
        return 'Rays'
    }
    if(homeTeamName === "a's"){
        return 'Athletics'
    }
    if(homeTeamName === "rangers"){
        return 'Ranger'
    }
    if(homeTeamName === "white sox"){
        return 'White Sox'
    }
    if(homeTeamName === "dodgers"){
        return 'Dodgers'
    }
    if(homeTeamName === "mets"){
        return 'Mets'
    }
    if(homeTeamName === "tigers"){
        return 'Tiger'
    }
}

export function homeEraFinder(sp) {
    for(let i = 0; i < sp.length; i++) {
        const obj = sp[i];
        for(const key in obj) {
            const value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === teamFinder(homeTeamName)) {
                return obj.homeSp;
            }
        }
    }
}