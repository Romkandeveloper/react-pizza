const initialState = {
    sortBy: 'popular',
    categories: 0,
}

export const filtersReducer = (state = initialState, action) => {
    if (action.type === 'SET_SORT') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if(action.type === 'SET_CATEGORY') {
        return {
            ...state,
            categories: action.payload,
        }
    }

    return state;
}