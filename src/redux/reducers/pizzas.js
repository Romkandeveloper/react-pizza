import {SET_PIZZAS, LOADING} from '../actions/types';

const initialState = {
    items: [],
    count: {},
    loading: false,
}

export const pizzasReducer = (state = initialState, action) => {
    if (action.type === SET_PIZZAS) {
        return {
            ...state,
            loading: false,
            items: action.payload
        }
    }
    if (action.type === LOADING) {
            return {
                ...state,
                loading: action.payload,
            }
        }

    return state;
}
