import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

// 액션타입생성
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// 액션생성
export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value,
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);

//초기값
const initialStage = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    },
};


// 리듀서생성
const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) =>
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialStage[form],
        }),
    },
    initialStage,
);

export default auth;