const initialState = {
    items: [],
    isLoading: false,
}

export const pizzasReducer = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload
        }
    }

    return state;
}
