
//TO DO: switch type->index

const initialState = {
    sorts: {
        activeSortType: 'rating',
        sortTypes: [{type: 'популярности', index: 'rating'},{type: 'цене', index: 'price'},{type: 'алфавиту', index: 'name'}],
    },
    categories: {
        activeCategory: null,
        categoryTypes: [{type:'Мясные', index: 0},{type: 'Вегетерианские', index:1},{type:'Гриль', index:2},{type:'Острые',index:3},{type:'Закрытые',index:4}]
    }
}

export const filtersReducer = (state = initialState, action) => {
    if (action.type === 'SET_SORT') {
        return {
            ...state,
            sorts: {...state.sorts, activeSortType: action.payload}
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