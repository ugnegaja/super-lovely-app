import {getPhraseError, getPhraseRequest, getPhraseSuccess} from './actions';
import {LOVELY_FRAZES} from '../constants/constants';

const randomSweetPhrase = currentPhrase => async dispatch => {
    try {
        dispatch(getPhraseRequest());
        for (let i = 0; i < LOVELY_FRAZES.length; i++) {
            const randomInspiration =
                LOVELY_FRAZES[Math.floor(Math.random() * LOVELY_FRAZES.length)];
            if (currentPhrase !== randomInspiration) {
                dispatch(getPhraseSuccess(randomInspiration));
            }
        }
    } catch (e) {
        dispatch(getPhraseError());
    }

};

export default randomSweetPhrase;
