import {combineReducers} from 'redux';
import INITIAL_STATE from '../model/initial-state';
import {
  GET_PHRASE_REQUEST,
  GET_PHRASE_SUCCESS,
  GET_PHRASE_ERROR,
  GET_INSPIRATION_ERROR,
  GET_INSPIRATION_REQUEST,
  GET_INSPIRATION_SUCCESS,
  CLEAR_STATE,
} from '../actions/actions';

const currentPhraseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHRASE_REQUEST:
      return state;
    case GET_PHRASE_SUCCESS:
      return {
        ...state,
        currentSweetPhrase: action.payload,
        background: ['#c88597bd', '#b98b9bbf', '#c88597bd'],
      };
    case GET_PHRASE_ERROR:
      return {
        state,
      };
    case CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const currentInspirationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_INSPIRATION_REQUEST:
      return state;
    case GET_INSPIRATION_SUCCESS:
      return {
        ...state,
        currentInspirationPhrase: action.payload.fraze,
        currentInspirationImage: action.payload.image,
        background: ['#c88597bd', '#b98b9bbf', '#c88597bd'],
      };
    case GET_INSPIRATION_ERROR:
      return {
        state,
      };
    case CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default combineReducers({
  currentPhrase: currentPhraseReducer,
  currentInspiration: currentInspirationReducer,
});
