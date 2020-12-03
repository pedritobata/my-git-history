
// MANAGING DATES

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