import { SET_LANGUAGE } from '../actionType';

export default (state = 'arm', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.language;
    default:
      return state;
  }
};

export const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: { language } });
