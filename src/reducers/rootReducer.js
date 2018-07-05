import timesofDay from 'constants/timesOfDay';
import {
  SET_TIME_OF_DAY,
  OPEN_SOCIAL_LINKS_MODAL,
  CLOSE_SOCIAL_LINKS_MODAL,
} from 'actions';

const initialState = {
  timeOfDay: timesofDay.DAY,
  isSocialLinksModalOpen: false,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_OF_DAY:
      return Object.assign({}, state, {
        timeOfDay: action.timeOfDay
      });
    case OPEN_SOCIAL_LINKS_MODAL:
      return Object.assign({}, state, {
        isSocialLinksModalOpen: true,
      });
    case CLOSE_SOCIAL_LINKS_MODAL:
      return Object.assign({}, state, {
        isSocialLinksModalOpen: false,
      })
    default:
      return state;
  }
}

export default rootReducer;
