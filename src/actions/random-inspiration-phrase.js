import {getInspirationError, getInspirationRequest, getInspirationSuccess} from './actions';
import {LOVELY_FRAZES} from '../constants/constants';

const randomInspirationPhrase = currentPhrase => async dispatch => {
    try {
        dispatch(getInspirationRequest());
        for (let i = 0; i < LOVELY_FRAZES.length; i++) {
            const randomInspiration =
                INSPIRE_FRAZES[Math.floor(Math.random() * LOVELY_FRAZES.length)];
            if (currentPhrase !== randomInspiration.fraze) {
                dispatch(getInspirationSuccess(randomInspiration));
            }
        }
    } catch (e) {
        dispatch(getInspirationError());
    }

};

export default randomInspirationPhrase;
