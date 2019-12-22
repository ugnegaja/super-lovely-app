import {
  getInspirationError,
  getInspirationRequest,
  getInspirationSuccess,
} from './actions';
import {INSPIRE_FRAZES} from '../constants/constants';

const randomInspirationPhrase = currentPhrase => async dispatch => {
  try {
    dispatch(getInspirationRequest());
    for (let i = 0; i < INSPIRE_FRAZES.length; i++) {
      const randomInspiration =
        INSPIRE_FRAZES[Math.floor(Math.random() * INSPIRE_FRAZES.length)];
      if (currentPhrase !== randomInspiration.fraze) {
        dispatch(getInspirationSuccess(randomInspiration));
      }
    }
  } catch (e) {
    dispatch(getInspirationError());
  }
};

export default randomInspirationPhrase;
