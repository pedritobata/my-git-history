
// MANAGING DATES

import Commit from "../store/interfaces/commit";
import CommitsGroupedbyDate from "../store/interfaces/commitsGroupedByDate";

export function isSameYearMonthDay(date1: string, date2: string) : boolean {
    const monthAndDay1 = date1.slice(5,10); 
    const monthAndDay2 = date2.slice(5,10); 
    return monthAndDay1 === monthAndDay2;
}

export function formatDatePresentation(date: string) : string {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const castDate: Date = new Date(date);
    const formattedDate = months[castDate.getMonth()] + ' ' + +castDate.getDate() + ', ' + castDate.getFullYear()
    return formattedDate;
} 

export function extractTime(date: string) : string {
    return date.slice(11, date.length - 1);
}


/**
 * Transforming commit list to an Object containing grouped commits by date
 * @param commitList 
 */
export function buildCommitListGroupedByDate(commitList: Commit[]): CommitsGroupedbyDate{
    let result: CommitsGroupedbyDate = {};
    for(let commit of commitList){
        if(!result[formatDatePresentation(commit.commitDate)]) {
            result[formatDatePresentation(commit.commitDate)] = [commit];
        } else {
            result[formatDatePresentation(commit.commitDate)].push(commit);
        }
    }
    console.log("result****", result);
    return result;
}