/**
 * Actions to set the stage for our home page "art" (lol)
 */
export const SET_TIME_OF_DAY = 'SET_TIME_OF_DAY';

export function setTimeOfDay(timeOfDay) {
    return {
        type: SET_TIME_OF_DAY,
        timeOfDay,
    };
}
