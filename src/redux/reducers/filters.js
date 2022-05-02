
//TO DO: switch type->index

const initialState = {
    sorts: {
        activeSortType: 'rating',
        sortTypes: [{type: 'популярністю', index: 'rating'},{type: 'ціною', index: 'price'},{type: 'алфавітом', index: 'name'}],
    },
    categories: {
        activeCategory: null,
        categoryTypes: [{type:`М'ясні`, index: 0},{type: 'Вегетаріанські', index:1},{type:'Гриль', index:2},{type:'Гострі',index:3},{type:'Преміум',index:4}]
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