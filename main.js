/*
* Author Taylor Birchem
* Last updated 05/28/2022
 */

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')();
//

export const awayTeamName = prompt('Away team:');
export const homeTeamName = prompt('Home team:');
console.log('The', awayTeamName, 'are', aTeamOverUnder(oVoU))
console.log('The', homeTeamName, 'are', hTeamOverUnder(oVoU))
// console.log(tempFinder(temperature))
// console.log('The', awayTeamName,"'s","sp's era is", awayEraFinder(sp) )
// console.log('The', homeTeamName,"s","sp's era is", homeEraFinder(sp))
console.log("--- Respond with a 't' or 'f' ---")
//console.log("*if Away or Home team have a top pitcher, answer 'f' for the corresponding team having a good pitcher*")
export const awayStarPitcher = prompt('Away SP a top pitcher?:');
export const homeStarPitcher = prompt('Home SP a top pitcher?:');
export const awayGoodPitcher = prompt('Away SP a good pitcher?:');
export const homeGoodPitcher = prompt('Home SP a good pitcher?:');
// export const awaySpERA = prompt('Away SP era >= 4.75?:');
// export const homeSpERA = prompt('Home SP era >= 4.75?:');
export const dayOrNight = prompt('is this a day game?:');
const fahrenheit = prompt('Whats the Temp:');
//const runLine = prompt('line:');
const prsnlOpinion = prompt("Do you think the game will be 'over' or 'under'?:");


let line = runLineFinder(runLines)
let awayOdds = awayMoneyLineFinder(moneyLine)
console.log("Away moneyLine:", awayOdds)
//console.log(awayMoneyLineFinder(moneyLine))
let homeOdds = homeMoneyLineFinder(moneyLine)
console.log("Home moneyLine:", homeOdds)
//console.log(homeMoneyLineFinder(moneyLine))
//Away Team = OAK
let away = {
    awayRuns: teamAvgAway(teamRuns), //Avg Runs scored in away games
    avg3: awayTeamAvg3(teamRuns), //Avg runs scored over last 3 games
    avgR: awayTeamAvgR(teamRuns), //Avg runs scored over season
    tmERA: aTeamEra(teamEra)
}//Team ERA
//Home Team = LAA
let home = {
    homeRuns: teamAvgHome(teamRuns), //Avg Runs scored in home games
    avg3: teamAvg3(teamRuns), //Avg runs scored over last 3 games
    avgR: teamAvgR(teamRuns), //Avg runs scored over season
    tmERA: hTeamEra(teamEra),
} //Team ERA
//if top pitcher in the league = true, else = false
let awayPitcher = aStarPitcher(awayStarPitcher);
let homePitcher = hStarPitcher(homeStarPitcher);
//if Good pitcher but not star = true
let goodAwayPitcher = aGoodPitcher(awayGoodPitcher);
let goodHomePitcher = hGoodPitcher(homeGoodPitcher);
//if Starting pitcher era is above 4.75 = true
let awayPitcherERA = awayEraFinder(sp);
let homePitcherERA = homeEraFinder(sp);
let umpireRating = '' //'hitter', 'pitcher', else ''
//Park factors from Ball Park Pal
let ballparkPal = (ballParkPalsRuns(parks) / 100) + 1
let wind = '' // 'out', 'in', 'out L/R', else ''
let windMph = '15+'// '15+ out', '15+ in', '15+ out L/R', '15+ straight L/R', else '15+'
//Ball Park rating from ESPN
let ballParkRating = espnParkRuns(espnParks)
let temp = tempFinder(temperature)
console.log(temp)//if dome weather = 65
let myPrediction = prsnlOpinion //Will equal 'over' or 'under', based on what I think the game will end up being
//Based on if team has more games where under or over hit
let awayTeamOU = aTeamOverUnder(oVoU)//'under', 'way under', 'over', 'way over'
let homeTeamOU = hTeamOverUnder(oVoU)//'under', 'way under', 'over', 'way over'
let dayGame = dayNight(dayOrNight) //if day game = 1.04, else = 1.0
//(any start before 7pm ET)


//No User Input needed

//implied totals

// console.log(impliedTotalHome(homeOdds))
// console.log(impliedTotalAway(awayOdds))

function impliedTotalAway(awayOdds) {
    if (awayOdds >= 1) {
        return (100 / (awayOdds + 100) * 9);
    } else {
        return (awayOdds / (awayOdds - 100) * 9);
    }
}

function impliedTotalHome(homeOdds) {
    if (homeOdds >= 1) {
        return (100 / (homeOdds + 100) * 9);
    } else {
        return (homeOdds / (homeOdds - 100) * 9);
    }
}

//Averages out score of teams last three games + Teams avg run scored in season
let awayAvg = (away.awayRuns + away.avgR + away.avg3 + home.tmERA + impliedTotalAway(awayOdds)) / 5


let homeAvg = (home.homeRuns + home.avgR + home.avg3 + away.tmERA + impliedTotalHome(homeOdds)) / 5

function awayRuns(awayAvg) {
    if (homePitcher === true) {
        awayAvg = awayAvg - 1.10
    }
    if (goodHomePitcher === true) {
        awayAvg = awayAvg - .50
    }
    if (home.tmERA <= 3.35) {
        awayAvg = awayAvg - .30
    }
    if (home.tmERA >= 4) {
        awayAvg = awayAvg + .42
    }
    if (home.tmERA >= 3.75 && home.tmERA < 4) {
        awayAvg = awayAvg + .22
    }
    if (homePitcherERA >= 4.75) {
        awayAvg = awayAvg + .40
    }
    return awayAvg
}

function homeRuns(homeAvg) {
    if (awayPitcher === true) {
        homeAvg = homeAvg - 1.10
    }
    if (goodAwayPitcher === true) {
        homeAvg = homeAvg - .50
    }
    if (away.tmERA <= 3.35) {
        homeAvg = homeAvg - .30
    }
    if (away.tmERA >= 4) {
        homeAvg = homeAvg + .42
    }
    if (away.tmERA >= 3.75 && away.tmERA < 4) {
        homeAvg = homeAvg + .22
    }
    if (awayPitcherERA >= 4.75) {
        homeAvg = homeAvg + .40
    }
    return homeAvg
}

//External Factors

function weather() {
    if (temp >= 75) {
        return true;
    }
    if (temp <= 55) {
        return false;
    }
    if (temp >= 68 && temp < 75) {
        return 'other';
    } else if (temp <= 49) {
        return 'cold';
    }
}

function windy() {
    if (wind === 'in') {
        return 'bad';
    }
    if (wind === 'out') {
        return 'really good';
    }
    if (wind === 'out L/R') {
        return 'good'
    }
    return windy
}

function windsMph() {
    if (windMph === '15+ out') {
        return 'great'
    }
    if (windMph === '15+ out L/R') {
        return 'decent'
    }
    if (windMph === '15+ in') {
        return 'yikes'
    }
    if (windMph === '15+ straight L/R') {
        return "little yikes"
    }
    return windsMph
}

let initialPrediction = awayRuns(awayAvg) + homeRuns(homeAvg)

//console.log("Proj total team runs (bfr weather):", initialPrediction)

function finalFinalPrediction(initialPrediction) {
    if (weather() === true) {
        initialPrediction = initialPrediction + 0.40
    }
    if (weather() === false) {
        initialPrediction = initialPrediction - 0.40
    }
    if (weather() === 'other') {
        initialPrediction = initialPrediction + 0.12
    }
    if (weather() === 'cold') {
        initialPrediction = initialPrediction - 0.40
    }
    if (windy() === 'bad') {
        initialPrediction = initialPrediction - .60
    }
    if (windy() === 'really good') {
        initialPrediction = initialPrediction + .50
    }
    if (windy() === 'good') {
        initialPrediction = initialPrediction + .35
    }
    if (windsMph() === 'great') {
        initialPrediction = initialPrediction + .45
    }
    if (windsMph() === 'decent') {
        initialPrediction = initialPrediction + .12
    }
    if (windsMph() === 'yikes') {
        initialPrediction = initialPrediction - 1.28
    }
    if (windsMph() === 'little yikes') {
        initialPrediction = initialPrediction - .35
    }
    if (umpireRating === 'pitcher') {
        initialPrediction = initialPrediction - .17
    }
    if (umpireRating === 'hitter') {
        initialPrediction = initialPrediction + .20
    }
    if (myPrediction === 'over') {
        initialPrediction = initialPrediction + .42
    }
    if (myPrediction === 'under') {
        initialPrediction = initialPrediction - .40
    }
    if (awayTeamOU === 'over') {
        initialPrediction = initialPrediction + .40
    }
    if (awayTeamOU === 'way over') {
        initialPrediction = initialPrediction + .50
    }
    if (awayTeamOU === 'under') {
        initialPrediction = initialPrediction - .35
    }
    if (awayTeamOU === 'way under') {
        initialPrediction = initialPrediction - .40
    }
    if (homeTeamOU === 'over') {
        initialPrediction = initialPrediction + .35
    }
    if (homeTeamOU === 'way over') {
        initialPrediction = initialPrediction + .50
    }
    if (homeTeamOU === 'under') {
        initialPrediction = initialPrediction - .35
    }
    if (homeTeamOU === 'way under') {
        initialPrediction = initialPrediction - .40
    }
    return initialPrediction
}

//console.log("Proj total runs after weather):", finalFinalPrediction(initialPrediction))

let ballParkFinalRating = (ballparkPal + ballParkRating) / 2
//console.log("Ballpark Final rating: ", ballParkFinalRating)

let overUnder = finalFinalPrediction(initialPrediction) * ballParkFinalRating

let final = overUnder * dayGame

const newOverUnder = final.toFixed(1)

function oU(newOverUnder) {
    if (newOverUnder > line) {
        return 'Over'
    }
    if (newOverUnder < line) {
        return 'Under'
    } else {
        return ''
    }
}

// console.log(awayAvg.toFixed(2))
// console.log(homeAvg.toFixed(2))
// console.log('Away Team Runs: ', awayRuns(awayAvg).toFixed(1))
// console.log('Home Team Runs: ', homeRuns(homeAvg).toFixed(1))
// console.log(ballParkFinalRating)
// console.log(finalFinalPrediction(initialPrediction))
// console.log(bPP(parks))
// console.log(parkName(parks))

console.log('')
console.log('Projected runs: ', newOverUnder)
console.log('The line is: ', line)
console.log(oU(newOverUnder))


//////////////////////////////////////////////////////


console.log('')

let start = new Date()
let hrstart = process.hrtime()

setTimeout(function () {
    // execution time simulated with setTimeout function
    let end = new Date() - start, hrend = process.hrtime(hrstart)

    console.info('Execution time: %ds %dms', hrend[0], hrend[1] / 1000000)
})


import {parks} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/ballParkPalsData.js';
import {espnParks} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/espnParkData.js';
import {teamRuns} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/runData.js';
import {teamEra} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/teamEraData.js';
import {oVoU} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/overUnderData.js';
import {runLines} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/runLineData.js';
import {moneyLine} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/moneyLineData.js';
import {sp} from "./data/spERAData.js";
import {temperature} from "./data/tempData.js";

import {
    ballParkPalsRuns
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/ballParkPalsFunctions.js';
import {
    espnParkRuns
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/espnParkFunctions.js';
import {
    teamAvgR, teamAvg3, teamAvgHome
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeRunsFunctions.js';
import {
    awayTeamAvgR, awayTeamAvg3, teamAvgAway
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awayRunsFunctions.js';
import {
    aStarPitcher, hStarPitcher, aGoodPitcher, hGoodPitcher, dayNight
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/inputFunctions.js';
import {
    hTeamEra
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeTeamEraFunctions.js';
import {
    aTeamEra
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awayTeamEraFunctions.js';
import {
    hTeamOverUnder
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeOverUnderFunctions.js';
import {
    aTeamOverUnder
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awayOverUnderFunctions.js';
import {
    runLineFinder
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/runLineFunctions.js';
import {
    homeMoneyLineFinder
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeMoneyLineFunctions.js';
import {
    awayMoneyLineFinder
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awayMoneyLineFunctions.js';
import {
    homeEraFinder
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeSpERAFunctions.js';
import {
    awayEraFinder
} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awaySpERAFunctions.js';
import {
    tempFinder
} from "./functions/tempFunction.js";