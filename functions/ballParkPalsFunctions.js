import {homeTeamName} from "../main.js";

let i;
let obj;
let key;
let value;


function parkFinder(homeTeamName){
    if(homeTeamName === "red sox"){
        return 'Fenway Park'
    }
    if(homeTeamName === "yankees"){
        return 'Yankee Stadium'
    }
    if(homeTeamName === "astros"){
        return 'Minute Maid Park'
    }
    if(homeTeamName === "marlins"){
        return 'LoanDepot Park'
    }
    if(homeTeamName === "royals"){
        return 'Kauffman Stadium'
    }
    if(homeTeamName === "cubs"){
        return 'Wrigley Field'
    }
    if(homeTeamName === "giants"){
        return 'Oracle Park'
    }
    if(homeTeamName === "guardians"){
        return 'Progressive Field'
    }
    if(homeTeamName === "phillies"){
        return 'Citizens Bank Park'
    }
    if(homeTeamName === "orioles"){
        return 'Oriole Park'
    }
    if(homeTeamName === "rockies"){
        return 'Coors Field'
    }
    if(homeTeamName === "blue jays"){
        return 'Rogers Centre'
    }
    if(homeTeamName === "pirates"){
        return 'PNC Park'
    }
    if(homeTeamName === "angels"){
        return 'Angel Stadium'
    }
    if(homeTeamName === "brewers"){
        return 'American Family Fld'
    }
    if(homeTeamName === "mariners"){
        return 'T-Mobile Park'
    }
    if(homeTeamName === "cardinals"){
        return 'Busch Stadium'
    }
    if(homeTeamName === "twins"){
        return 'Target Field'
    }
    if(homeTeamName === "nationals"){
        return 'Nationals Park'
    }
    if(homeTeamName === "padres"){
        return 'Petco Park'
    }
    if(homeTeamName === "reds"){
        return 'Great American BP'
    }
    if(homeTeamName === "braves"){
        return 'Truist Park'
    }
    if(homeTeamName === "diamond backs"){
        return 'Chase Field'
    }
    if(homeTeamName === "rays"){
        return 'Tropicana Field'
    }
    if(homeTeamName === "a's"){
        return 'Oakland Coliseum'
    }
    if(homeTeamName === "rangers"){
        return 'Globe Life Field'
    }
    if(homeTeamName === "white sox"){
        return 'Guaranteed Rate Fld'
    }
    if(homeTeamName === "dodgers"){
        return 'Dodger Stadium'
    }
    if(homeTeamName === "mets"){
        return 'Citi Field'
    }
    if(homeTeamName === "tigers"){
        return 'Comerica Park'
    }
}

export function ballParkPalsRuns(parks) {
    for (i = 0; i < parks.length; i++) {
        obj = parks[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === parkFinder(homeTeamName)) {
                return obj.runPercentage;
            }
        }
    }
}

export function windDirection(parks) {
    for (i = 0; i < parks.length; i++) {
        obj = parks[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === parkFinder(homeTeamName)) {
                obj.wind;
                if(obj.wind.includes('Out')){
                    return 'out'
                }
                else if(obj.wind.includes('In')){
                    return 'in'
                }
            }
        }
    }
}

export function windMPH(parks) {
    for (i = 0; i < parks.length; i++) {
        obj = parks[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === parkFinder(homeTeamName)) {
                obj.windy;
                if(obj.windy.includes('Wind3') && windDirection(parks) === 'out'){
                    return '15+ out'
                }
                else if(obj.windy.includes('Wind3') && windDirection(parks) === 'in'){
                    return '15+ in'
                }
            }
        }
    }
}

export function windMPH2(parks) {
    for (i = 0; i < parks.length; i++) {
        obj = parks[i];
        for (key in obj) {
            value = obj[key];
            // console.log("-" + key + ": " + value);
            if (value + '' === parkFinder(homeTeamName)) {
                obj.windy;
                if(obj.windy.includes('Wind2') && windDirection(parks) === 'out'){
                    return '10+ out'
                }
                else if(obj.windy.includes('Wind2') && windDirection(parks) === 'in'){
                    return '10+ in'
                }
            }
        }
    }
}
