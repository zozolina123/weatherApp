import { Platform } from "react-native";

export const getFutureHours = () => {
    const currentHour = new Date().getHours();
    let hoursArray = [];
    for(let i =0;i<=23;i++) {
        hoursArray[i] = (currentHour + i)%24;
    }
    return hoursArray;
}

function getDayName(date: Date)
{
        const dayOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const utc = date.getTime() + date.getTimezoneOffset() * 60000;
        return dayOfWeek[date.getDay()];    
}

function addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

export function getFutureWeekDayNames() {
    const date = new Date();
    const futureWeekDayNames= [];
    for(let i=0;i<=8;i++) {
        futureWeekDayNames[i] = getDayName(addDays(date, i+1));
    }
    return futureWeekDayNames;
}