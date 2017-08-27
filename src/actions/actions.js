export const SET_TIME_OF_DAY = 'SET_TIME_OF_DAY';

export function setTimeOfDay(timeOfDay) {
    return {
        type: SET_TIME_OF_DAY,
        timeOfDay,
    };
}