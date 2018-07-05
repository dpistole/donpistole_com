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

/**
 * Actions to control the open/close of the Social Links Modal
 */
export const OPEN_SOCIAL_LINKS_MODAL = 'OPEN_SOCIAL_LINKS_MODAL';
export const CLOSE_SOCIAL_LINKS_MODAL = 'CLOSE_SOCIAL_LINKS_MODAL';

export const openSocialLinksModal = () => ({
  type: OPEN_SOCIAL_LINKS_MODAL,
});

export const closeSocialLinksModal = () => ({
  type: CLOSE_SOCIAL_LINKS_MODAL,
});
