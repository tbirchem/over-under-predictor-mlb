import {dayOrNight} from "../main.js";
import e from "express";

// export function aStarPitcher(awayStarPitcher){
//     if(awayStarPitcher === 't'){
//         return true;
//     }
//     if(awayStarPitcher === 'f'){
//         return false;
//     }
// }
//
// export function hStarPitcher(homeStarPitcher){
//     if(homeStarPitcher === 't'){
//         return true;
//     }
//     if(homeStarPitcher === 'f'){
//         return false;
//     }
// }
//
// export function aGoodPitcher(awayGoodPitcher){
//     if(awayGoodPitcher === 't'){
//         return true;
//     }
//     if(awayGoodPitcher === 'f'){
//         return false;
//     }
// }
//
// export function hGoodPitcher(homeGoodPitcher){
//     if(homeGoodPitcher === 't'){
//         return true;
//     }
//     if(homeGoodPitcher === 'f'){
//         return false;
//     }
// }
//
// export function aPitcherERA(awaySpERA){
//     if(awaySpERA === 't'){
//         return true;
//     }
//     if(awaySpERA === 'f'){
//         return false;
//     }
// }
//
// export function hPitcherERA(homeSpERA){
//     if(homeSpERA === 't'){
//         return true;
//     }
//     if(homeSpERA === 'f'){
//         return false;
//     }
// }

export function dayNight(dayOrNight){
    if(dayOrNight === 't'){
        return 1.015;
    }
    if(dayOrNight === 'f'){
        return 1;
    }
}
