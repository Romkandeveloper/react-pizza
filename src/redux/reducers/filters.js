const initialState = {
    sorts: {
        activeSortType: 'rating',
        sortTypes: ['price','rating','name'],
    },
    categories: {
        activeCategory: 0,
        categoryTypes: [{type:'Мясные', index: 0},{type: 'Вегетерианские', index:1},{type:'Гриль', index:2},{type:'Острые',index:3},{type:'Закрытые',index:4}]
    }
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
            categories: {...state.categories, activeCategory: action.payload}
        }
    }

    return state;
}