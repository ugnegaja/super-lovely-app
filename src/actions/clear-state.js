import {clearStateAction} from './actions';

const clearState = () => dispatch => {
    dispatch(clearStateAction());
};

export default clearState;
