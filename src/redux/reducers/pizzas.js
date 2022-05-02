const initialState = {
    items: [],
    count: {},
    isLoading: false,
}

export const pizzasReducer = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            isLoading: false,
            items: action.payload
        }
    }
    if (action.type === 'IS_LOADING') {
            return {
                ...state,
                isLoading: action.payload,
            }
        }

    return state;
}
