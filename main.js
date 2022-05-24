import { createRequire } from 'node:module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')();
//

export const awayTeamName = prompt('Away team:');
export const homeTeamName = prompt('Home team:');
console.log("--- Respond with a 't' or 'f' ---")
console.log("*if Away or Home team have a top pitcher, answer 'f' for the corresponding team having a good pitcher*")
export const awayStarPitcher = prompt('Away SP a top pitcher?:');
export const homeStarPitcher = prompt('Home SP a top pitcher?:');
export const awayGoodPitcher = prompt('Away SP a good pitcher?:');
export const homeGoodPitcher = prompt('Home SP a good pitcher?:');
export const awaySpERA = prompt('Away SP era >= 4.75?:');
export const homeSpERA = prompt('Home SP era >= 4.75?:');
export const dayOrNight = prompt('is this a day game? (yes/no):');
const fahrenheit = prompt('Whats the Temp:');
const runLine = prompt('line:');
const prsnlOpinion = prompt("Do you think the game will be 'over' or 'under'?:");



let line = runLine
let awayOdds = 133
let homeOdds = -156
//Away Team = OAK
let away = {
    awayRuns: teamAvgAway(teamRuns), //Avg Runs scored in away games
    avg3: awayTeamAvg3(teamRuns), //Avg runs scored over last 3 games
    avgR: awayTeamAvgR(teamRuns), //Avg runs scored over season
    tmERA: aTeamEra(teamEra)}//Team ERA
//Home Team = LAA
let home = {
    homeRuns: teamAvgHome(teamRuns), //Avg Runs scored in home games
    avg3: teamAvg3(teamRuns), //Avg runs scored over last 3 games
    avgR: teamAvgR(teamRuns), //Avg runs scored over season
    tmERA: hTeamEra(teamEra), } //Team ERA
//if top pitcher in the league = true, else = false
let awayPitcher = aStarPitcher(awayStarPitcher);
let homePitcher = hStarPitcher(homeStarPitcher);
//if Good pitcher but not star = true
let goodAwayPitcher = aGoodPitcher(awayGoodPitcher);
let goodHomePitcher = hGoodPitcher(homeGoodPitcher);
//if Starting pitcher era is above 4.75 = true
let awayPitcherERA = aPitcherERA(awaySpERA);
let homePitcherERA = hPitcherERA(homeSpERA);
let umpireRating = '' //'hitter', 'pitcher', else ''
//Park factors from Ball Park Pal
let ballparkPal = (ballParkPalsRuns(parks)/100)+1
let wind = 'in' // 'out', 'in', 'out L/R', else ''
let windMph = '15+'// '15+ out', '15+ in', '15+ out L/R', '15+ straight L/R', else '15+'
//Ball Park rating from ESPN
let ballParkRating = espnParkRuns(espnParks)
let temp = fahrenheit //if dome weather = 65
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

function impliedTotalAway(awayOdds){
    if (awayOdds >= 1){
        return (100/(awayOdds+100)*9);
    }
    else {
        return (awayOdds/(awayOdds-100)*9);
    }
}

function impliedTotalHome(homeOdds){
    if (homeOdds >= 1){
        return (100/(homeOdds+100)*9);
    }
    else {
        return (homeOdds/(homeOdds-100)*9);
    }
}

//Averages out score of teams last three games + Teams avg run scored in season
let awayAvg = (away.awayRuns + away.avgR + away.avg3 + home.tmERA + impliedTotalAway(awayOdds))/5


let homeAvg = (home.homeRuns + home.avgR + home.avg3 + away.tmERA + impliedTotalHome(homeOdds))/5

function awayRuns(awayAvg){
    if (homePitcher === true){
        awayAvg = awayAvg - 1.10
    }
    if (goodHomePitcher === true){
        awayAvg = awayAvg - .50
    }
    if (home.tmERA <= 3.35){
        awayAvg = awayAvg - .30
    }
    if (home.tmERA >= 4){
        awayAvg = awayAvg + .47
    }
    if (home.tmERA >= 3.75 && home.tmERA < 4){
        awayAvg = awayAvg + .22
    }
    if (homePitcherERA === true){
        awayAvg = awayAvg + .45
    }
    return awayAvg
}

function homeRuns(homeAvg){
    if (awayPitcher === true){
        homeAvg = homeAvg - 1.10
    }
    if (goodAwayPitcher === true){
        homeAvg = homeAvg - .50
    }
    if (away.tmERA <= 3.35){
        homeAvg = homeAvg - .30
    }
    if (away.tmERA >= 4){
        homeAvg = homeAvg + .47
    }
    if (away.tmERA >= 3.75 && away.tmERA < 4){
        homeAvg = homeAvg + .22
    }
    if (awayPitcherERA === true){
        homeAvg = homeAvg + .45
    }
    return homeAvg
}

//External Factors

function weather(){
    if (temp >= 75){
        return true;
    }
    if (temp <= 55){
        return false;
    }
    if (temp >= 68 && temp < 75){
        return 'other';
    }
    else if (temp <= 49) {
        return 'cold';
    }
}

function windy(){
    if (wind === 'in'){
        return 'bad';
    }
    if (wind === 'out'){
        return 'really good';
    }
    if (wind === 'out L/R') {
        return 'good'
    }
    return windy
}

function windsMph(){
    if (windMph === '15+ out'){
        return 'great'
    }
    if (windMph === '15+ out L/R'){
        return 'decent'
    }
    if (windMph === '15+ in'){
        return 'yikes'
    }
    if (windMph === '15+ straight L/R') {
        return "little yikes"
    }
    return  windsMph
}

let initialPrediction = awayRuns(awayAvg) + homeRuns(homeAvg)

function finalFinalPrediction(initialPrediction){
    if (weather() === true) {
        initialPrediction = initialPrediction + 0.40
    }
    if (weather() === false) {
        initialPrediction = initialPrediction - 0.45
    }
    if (weather() === 'other') {
        initialPrediction = initialPrediction + 0.12
    }
    if (weather() === 'cold') {
        initialPrediction = initialPrediction - 0.45
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
    if (windsMph() === 'great'){
        initialPrediction = initialPrediction + .45
    }
    if (windsMph() === 'decent'){
        initialPrediction = initialPrediction + .12
    }
    if (windsMph() === 'yikes'){
        initialPrediction = initialPrediction - .55
    }
    if (windsMph() === 'little yikes'){
        initialPrediction = initialPrediction - .35
    }
    if (umpireRating === 'pitcher'){
        initialPrediction = initialPrediction - .17
    }
    if (umpireRating === 'hitter'){
        initialPrediction = initialPrediction + .20
    }
    if (myPrediction === 'over'){
        initialPrediction = initialPrediction + .45
    }
    if (myPrediction === 'under'){
        initialPrediction = initialPrediction - .35
    }
    if (awayTeamOU === 'over'){
        initialPrediction = initialPrediction + .35
    }
    if (awayTeamOU === 'way over') {
        initialPrediction = initialPrediction + .55
    }
    if (awayTeamOU === 'under'){
        initialPrediction = initialPrediction - .32
    }
    if (awayTeamOU === 'way under'){
        initialPrediction = initialPrediction - .40
    }
    if (homeTeamOU === 'over'){
        initialPrediction = initialPrediction + .35
    }
    if (homeTeamOU === 'way over'){
        initialPrediction = initialPrediction + .55
    }
    if (homeTeamOU === 'under'){
        initialPrediction = initialPrediction - .32
    }
    if (homeTeamOU === 'way under'){
        initialPrediction = initialPrediction - .40
    }
    return initialPrediction
}

let ballParkFinalRating = (ballparkPal + ballParkRating)/2

let overUnder = finalFinalPrediction(initialPrediction) * ballParkFinalRating

let final = overUnder * dayGame

const newOverUnder = final.toFixed(1)

function oU(newOverUnder){
    if (newOverUnder > line){
        return 'Over'
    }
    if (newOverUnder < line){
        return 'Under'
    }
    else {
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
    let end = new Date() - start,
        hrend = process.hrtime(hrstart)

    console.info('Execution time: %ds %dms', hrend[0], hrend[1] / 1000000)})



import {parks} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/ballParkPalsData.js';
import {espnParks} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/espnParkData.js';
import {teamRuns} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/runData.js';
import {teamEra} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/teamEraData.js';
import {oVoU} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/data/overUnderData.js';

import {ballParkPalsRuns} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/ballParkPalsFunctions.js';
import {espnParkRuns} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/espnParkFunctions.js';
import {teamAvgR, teamAvg3, teamAvgHome} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeRunsFunctions.js';
import {awayTeamAvgR, awayTeamAvg3, teamAvgAway} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awayRunsFunctions.js';
import {aStarPitcher, hStarPitcher, aGoodPitcher, hGoodPitcher, aPitcherERA, hPitcherERA, dayNight} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/inputFunctions.js';
import {hTeamEra} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeTeamEraFunctions.js';
import {aTeamEra} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awayTeamEraFunctions.js';
import {hTeamOverUnder} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/homeOverUnderFunctions.js';
import {aTeamOverUnder} from '/Users/taylorbirchem/WebstormProjects/overunderpredictormlb/functions/awayOverUnderFunctions.js';