import timesofDay from 'constants/timesOfDay';
import {
  SET_TIME_OF_DAY,
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
    default:
      return state;
  }
}

export default rootReducer;
