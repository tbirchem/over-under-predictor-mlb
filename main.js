/*
* Author Taylor Birchem
*
* node.js (v14.17.6)
*
* last updated 06.27.22
 */

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')();
const gameNumber = prompt('Game Number:');


function awayTeamGen(games) {
    for (let i = 0; i < games.length; i++) {
        let obj = games[i];
        for (let key in obj) {
            let value = obj[key];
            if (value + '' === gameNumber) {
                return obj.awayTeam.toLowerCase();
            }
        }
    }
}

function homeTeamGen(games) {
    for (let i = 0; i < games.length; i++) {
        let obj = games[i];
        for (let key in obj) {
            let value = obj[key];
            if (value + '' === gameNumber) {
                return obj.homeTeam.toLowerCase();
            }
        }
    }
}

export const awayTeamName = awayTeamGen(games)
export const homeTeamName = homeTeamGen(games)

// export const awayTeamName = prompt('Away team:');
// export const homeTeamName = prompt('Home team:');
console.log('The', awayTeamName, 'are', aTeamOverUnder(oVoU))
console.log('The', homeTeamName, 'are', hTeamOverUnder(oVoU))
// console.log("Game time temp: ", tempFinder(temperature))
console.log("Wind direction: ", windDirection(parks))
console.log("Wind MPH: ", windMPH2(parks), windMPH(parks))
// console.log("Ball Park rating: ", espnParkRuns(espnParks))
// console.log('The', awayTeamName,"'s","sp's era is", awayEraFinder(sp) )
// console.log('The', homeTeamName,"s","sp's era is", homeEraFinder(sp))
// console.log("--- Respond with a 't' or 'f' ---")
// console.log("*if Away or Home team have a top pitcher, answer 'f' for the corresponding team having a good pitcher*")
// export const awaySpERA = prompt('Away SP era >= 4.75?:');
// export const homeSpERA = prompt('Home SP era >= 4.75?:');
// export const dayOrNight = prompt('is this a day game?:');
// const runLine = prompt('line:');
// const prsnlOpinion = prompt("Do you think the game will be 'over' or 'under'?:");

console.log("Away Team: ", awayTeamGen(games))
console.log("Home Team: ", homeTeamGen(games))
let line = runLineFinder(runLines)
let awayOdds = awayMoneyLineFinder(moneyLine)
console.log("Away moneyLine:", awayOdds)
// console.log(awayMoneyLineFinder(moneyLine))
let homeOdds = homeMoneyLineFinder(moneyLine)
console.log("Home moneyLine:", homeOdds)
// console.log(homeMoneyLineFinder(moneyLine))
// Away Team = OAK
let away = {
    awayRuns: teamAvgAway(teamRuns), // Avg Runs scored in away games
    avg3: awayTeamAvg3(teamRuns), // Avg runs scored over last 3 games
    avgR: awayTeamAvgR(teamRuns), // Avg runs scored over season
    tmERA: aTeamEra(teamEra) // Team ERA
}

// Home Team = LAA
let home = {
    homeRuns: teamAvgHome(teamRuns), // Avg Runs scored in home games
    avg3: teamAvg3(teamRuns), // Avg runs scored over last 3 games
    avgR: teamAvgR(teamRuns), // Avg runs scored over season
    tmERA: hTeamEra(teamEra), // Team ERA
}

// starting pitcher era >= 1.30 && starting pitcher era <= 3.45
let topAwayPitcher = awayEraFinder(sp);
let topHomePitcher = homeEraFinder(sp);

// starting pitcher era >= 3.46 && starting pitcher era <= 4.25
let goodAwayPitcher = awayEraFinder(sp);
let goodHomePitcher = homeEraFinder(sp);

// if Starting pitcher era is above 4.75 = true
let badAwayPitcher = awayEraFinder(sp);
let badHomePitcher = homeEraFinder(sp);

// Park factors from Ball Park Pal
let ballparkPal = (ballParkPalsRuns(parks) / 100) + 1
let wind = windDirection(parks) // 'out', 'in'
let windMph = windMPH(parks) // '15+ out', '15+ in'
let windMph2 = windMPH2(parks) //'10+ out, '10+ in

// Ball Park rating from ESPN
let ballParkRating = espnParkRuns(espnParks)

// if dome weather = 65
let temp = tempFinder(temperature)

// Based on if team has more games where it went under or over
//'under', 'way under', 'over', 'way over'
let awayTeamOU = aTeamOverUnder(oVoU)
let homeTeamOU = hTeamOverUnder(oVoU)


// No User Input needed

// implied totals

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

// Averages out score of teams last three games + Teams avg run scored in season
let awayAvg = (away.awayRuns + away.avgR + away.avg3 + home.tmERA + impliedTotalAway(awayOdds)) / 5


let homeAvg = (home.homeRuns + home.avgR + home.avg3 + away.tmERA + impliedTotalHome(homeOdds)) / 5

function awayRuns(awayAvg) {
    if (topHomePitcher >= 1.30 && topHomePitcher <= 3.45) {
        awayAvg = awayAvg - 0.85
    }
    if (goodHomePitcher >= 3.46 && goodHomePitcher <= 4.25) {
        awayAvg = awayAvg - .30
    }
    if (home.tmERA <= 3.35) {
        awayAvg = awayAvg - .28
    }
    if (home.tmERA >= 4) {
        awayAvg = awayAvg + .42
    }
    if (home.tmERA >= 3.75 && home.tmERA < 4) {
        awayAvg = awayAvg + .22
    }
    if (badHomePitcher >= 4.75) {
        awayAvg = awayAvg + .40
    }
    return awayAvg
}

function homeRuns(homeAvg) {
    if (topAwayPitcher >= 1.30 && topAwayPitcher <= 3.45) {
        homeAvg = homeAvg - .85
    }
    if (goodAwayPitcher >= 3.46 && goodAwayPitcher <= 4.25) {
        homeAvg = homeAvg - .30
    }
    if (away.tmERA <= 3.35) {
        homeAvg = homeAvg - .28
    }
    if (away.tmERA >= 4) {
        homeAvg = homeAvg + .42
    }
    if (away.tmERA >= 3.75 && away.tmERA < 4) {
        homeAvg = homeAvg + .22
    }
    if (badAwayPitcher >= 4.75) {
        homeAvg = homeAvg + .40
    }
    return homeAvg
}

// External Factors

function weather(temp) {
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

function windy(wind) {
    if (wind === 'in') {
        return 'bad';
    }
    if (wind === 'out') {
        return 'really good';
    }
    return windy
}

function windsMph(windMph, windMph2) {
    if (windMph === '15+ out') {
        return 'great'
    }
    if (windMph === '15+ in') {
        return 'yikes'
    }
    if (windMph2 === '10+ out') {
        return "pretty good"
    }
    if (windMph2 === '10+ in') {
        return "pretty yikes"
    }
    return windsMph
}

let initialPrediction = awayRuns(awayAvg) + homeRuns(homeAvg)

// console.log("Proj total team runs (bfr weather):", initialPrediction)

function myPrediction(awayTeamOU, homeTeamOU) {
    if (awayTeamOU && homeTeamOU === 'over') {
        return 'over'
    }
    if (awayTeamOU.includes('way over') || homeTeamOU.includes('way over')) {
        return 'over'
    }
    if (awayTeamOU === 'under' && homeTeamOU === 'under') {
        return 'under'
    }
    if (awayTeamOU && homeTeamOU === 'way under') {
        return 'under'
    }
    if (awayTeamOU === 'way under' && homeTeamOU === 'under') {
        return 'under'
    }
    if ((awayTeamOU === 'under') && (homeTeamOU === 'way under')) {
        return 'under'
    }
    if ((awayTeamOU === 'way over') && (homeTeamOU === 'under')) {
        return 'over'
    }
    if ((awayTeamOU === 'way under') && (homeTeamOU === 'over')) {
        return 'under'
    }
    if ((awayTeamOU === 'over') && (homeTeamOU === 'way under')) {
        return 'under'
    } else {
        return 'over'
    }
}

function finalFinalPrediction(initialPrediction) {
    if (weather(temp) === true) {
        initialPrediction = initialPrediction + 0.40
    }
    if (weather(temp) === false) {
        initialPrediction = initialPrediction - 0.40
    }
    if (weather(temp) === 'other') {
        initialPrediction = initialPrediction + 0.12
    }
    if (weather(temp) === 'cold') {
        initialPrediction = initialPrediction - 0.40
    }
    if (windy(wind) === 'bad') {
        initialPrediction = initialPrediction - .45
    }
    if (windy(wind) === 'really good') {
        initialPrediction = initialPrediction + .40
    }
    if (windsMph(windMph, windMph2) === 'great') {
        initialPrediction = initialPrediction + .45
    }
    if (windsMph(windMph, windMph2) === 'yikes') {
        initialPrediction = initialPrediction - -.75
    }
    if (windsMph(windMph, windMph2) === 'pretty good') {
        initialPrediction = initialPrediction + .25
    }
    if (windsMph(windMph, windMph2) === 'pretty yikes') {
        initialPrediction = initialPrediction - 0.25
    }
    if (myPrediction(awayTeamOU, homeTeamOU) === 'over') {
        initialPrediction = initialPrediction + .25
    }
    if (myPrediction(awayTeamOU, homeTeamOU) === 'under') {
        initialPrediction = initialPrediction - .25
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

// console.log("Proj total runs after weather):", finalFinalPrediction(initialPrediction))

let ballParkFinalRating = (ballparkPal + ballParkRating) / 2
// console.log("Ballpark Final rating: ", ballParkFinalRating)

let overUnder = finalFinalPrediction(initialPrediction) * ballParkFinalRating

const newOverUnder = overUnder.toFixed(1)

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

function computersOverPOD() {
    let counter = 0;
    if (oU(newOverUnder) === 'Over') {
        counter++;
    }
    if (myPrediction(awayTeamOU, homeTeamOU) === 'over') {
        counter++;
    }
    if (windy(wind) === 'really good') {
        counter++;
    }
    if (badHomePitcher >= 4.75) {
        counter++;
    }
    if (badAwayPitcher >= 4.75) {
        counter++;
    }
    if (ballParkRating >= 1) {
        counter++;
    }
    if (newOverUnder - 3 >= line) {
        counter++;
    }
    if (windMPH(parks) === '15+ out') {
        counter++;
    }

    return counter
}

function computersUnderPOD() {
    let counter = 0;
    if (oU(newOverUnder) === 'Under') {
        counter++;
    }
    if (myPrediction(awayTeamOU, homeTeamOU) === 'under') {
        counter++;
    }
    if (windy(wind) === 'bad') {
        counter++;
    }
    if (topHomePitcher >= 1.30 && topHomePitcher <= 3.45) {
        counter++;
    }
    if (topAwayPitcher >= 1.30 && topAwayPitcher <= 3.45) {
        counter++;
    }
    if (ballParkRating <= 0.964) {
        counter++;
    }
    if (newOverUnder + 3 <= line) {
        counter++;
    }
    if (windMPH(parks) === '15+ in') {
        counter++;
    }

    return counter
}

function pod() {
    if (computersOverPOD() >= 6) {
        return 'POD!'
    }
    if (computersOverPOD() === 5) {
        return 'Green Pick'
    }
    if (computersUnderPOD() >= 6) {
        return 'POD!'
    }
    if (computersUnderPOD() === 5) {
        return 'Green Pick'
    }
}

// -- For Debugging --
// console.log(awayAvg.toFixed(2))
// console.log(homeAvg.toFixed(2))
// console.log('Away Team Runs: ', awayRuns(awayAvg).toFixed(1))
// console.log('Home Team Runs: ', homeRuns(homeAvg).toFixed(1))
// console.log(ballParkFinalRating)
// console.log(finalFinalPrediction(initialPrediction))
// console.log(bPP(parks))
// console.log(parkName(parks))

console.log("My Prediction:", myPrediction(awayTeamOU, homeTeamOU))
console.log('')
console.log(awayTeamName, '@', homeTeamName)
console.log('Projected runs: ', newOverUnder)
console.log('The line is: ', line)
console.log(oU(newOverUnder))
console.log(pod())
console.log('')

let start = new Date()
let hrstart = process.hrtime()

setTimeout(function () {
    // execution time simulated with setTimeout function
    let end = new Date() - start, hrend = process.hrtime(hrstart)

    console.info('Execution time: %ds %dms', hrend[0], hrend[1] / 1000000)
})

import {games} from './data/gameData.js';
import {parks} from './data/ballParkPalsData.js';
import {espnParks} from './data/espnParkData.js';
import {teamRuns} from './data/runData.js';
import {teamEra} from './data/teamEraData.js';
import {oVoU} from './data/overUnderData.js';
import {runLines} from './data/runLineData.js';
import {moneyLine} from './data/moneyLineData.js';
import {sp} from "./data/spERAData.js";
import {temperature} from "./data/tempData.js";

import {
    ballParkPalsRuns, windDirection, windMPH, windMPH2
} from './functions/ballParkPalsFunctions.js';
import {
    espnParkRuns
} from './functions/espnParkFunctions.js';
import {
    teamAvgR, teamAvg3, teamAvgHome
} from './functions/homeRunsFunctions.js';
import {
    awayTeamAvgR, awayTeamAvg3, teamAvgAway
} from './functions/awayRunsFunctions.js';
import {
    hTeamEra
} from './functions/homeTeamEraFunctions.js';
import {
    aTeamEra
} from './functions/awayTeamEraFunctions.js';
import {
    hTeamOverUnder
} from './functions/homeOverUnderFunctions.js';
import {
    aTeamOverUnder
} from './functions/awayOverUnderFunctions.js';
import {
    runLineFinder
} from './functions/runLineFunctions.js';
import {
    homeMoneyLineFinder
} from './functions/homeMoneyLineFunctions.js';
import {
    awayMoneyLineFinder
} from './functions/awayMoneyLineFunctions.js';
import {
    homeEraFinder
} from './functions/homeSpERAFunctions.js';
import {
    awayEraFinder
} from './functions/awaySpERAFunctions.js';
import {
    tempFinder
} from "./functions/tempFunction.js";