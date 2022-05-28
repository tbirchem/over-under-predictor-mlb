import {awayTeamName} from "../main.js";

function teamFinder(awayTeamName){
    if(awayTeamName === "red sox"){
        return 'Red Sox'
    }
    if(awayTeamName === "yankees"){
        return 'Yankees'
    }
    if(awayTeamName === "astros"){
        return 'Astros'
    }
    if(awayTeamName === "marlins"){
        return 'Marlins'
    }
    if(awayTeamName === "royals"){
        return 'Royals'
    }
    if(awayTeamName === "cubs"){
        return 'Cubs'
    }
    if(awayTeamName === "giants"){
        return 'Giants'
    }
    if(awayTeamName === "guardians"){
        return 'Guardians'
    }
    if(awayTeamName === "phillies"){
        return 'Phillies'
    }
    if(awayTeamName === "orioles"){
        return 'Orioles'
    }
    if(awayTeamName === "rockies"){
        return 'Rockies'
    }
    if(awayTeamName === "blue jays"){
        return 'Blue Jays'
    }
    if(awayTeamName === "pirates"){
        return 'Pirates'
    }
    if(awayTeamName === "angels"){
        return 'Angels'
    }
    if(awayTeamName === "brewers"){
        return 'Brewers'
    }
    if(awayTeamName === "mariners"){
        return 'Mariners'
    }
    if(awayTeamName === "cardinals"){
        return 'Cardinals'
    }
    if(awayTeamName === "twins"){
        return 'Twins'
    }
    if(awayTeamName === "nationals"){
        return 'Nationals'
    }
    if(awayTeamName === "padres"){
        return 'Padres'
    }
    if(awayTeamName === "reds"){
        return 'Reds'
    }
    if(awayTeamName === "braves"){
        return 'Braves'
    }
    if(awayTeamName === "diamond backs"){
        return 'D-backs'
    }
    if(awayTeamName === "rays"){
        return 'Rays'
    }
    if(awayTeamName === "a's"){
        return 'Athletics'
    }
    if(awayTeamName === "rangers"){
        return 'Ranger'
    }
    if(awayTeamName === "white sox"){
        return 'White Sox'
    }
    if(awayTeamName === "dodgers"){
        return 'Dodgers'
    }
    if(awayTeamName === "mets"){
        return 'Mets'
    }
    if(awayTeamName === "tigers"){
        return 'Tiger'
    }
}

export function awayEraFinder(sp) {
    for(let i = 0; i < sp.length; i++) {
        const obj = sp[i];
        for(const key in obj) {
            const value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === teamFinder(awayTeamName)) {
                return obj.awaySp;
            }
        }
    }
}