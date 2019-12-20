export const GET_PHRASE_REQUEST = 'GET_PHRASE_REQUEST';
export const GET_PHRASE_SUCCESS = 'GET_PHRASE_SUCCESS';
export const GET_PHRASE_ERROR = 'GET_PHRASE_ERROR';
export const GET_INSPIRATION_REQUEST = 'GET_INSPIRATION_REQUEST';
export const GET_INSPIRATION_SUCCESS = 'GET_INSPIRATION_SUCCESS';
export const GET_INSPIRATION_ERROR = 'GET_INSPIRATION_ERROR';
export const CLEAR_STATE = 'CLEAR_STATE';


export function getPhraseRequest() {
    return {
        type: GET_PHRASE_REQUEST,
    };
}

export function getPhraseSuccess(phrase) {
    return {
        type: GET_PHRASE_SUCCESS,
        payload: phrase,
    };
}

export function getPhraseError() {
    return {
        type: GET_PHRASE_ERROR,
    };
}

export function getInspirationRequest() {
    return {
        type: GET_INSPIRATION_REQUEST,
    };
}

export function getInspirationSuccess(phrase) {
    return {
        type: GET_INSPIRATION_SUCCESS,
        payload: phrase,
    };
}

export function getInspirationError() {
    return {
        type: GET_INSPIRATION_ERROR,
    };
}

export function clearStateAction() {
    return {
        type: CLEAR_STATE,
    };
}
