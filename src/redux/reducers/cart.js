
const initialState = {
    items: {},
    totalItems: 0,
    totalSum: 0,
}

export const cartReducer = (state = initialState, action) => {
    if (action.type === 'CLEAR_CART') {
        return {
            ...state,
            items: {},
            totalItems: 0,
            totalSum: 0,
        }
    }
    if (action.type === 'REMOVE_ALL_FROM_CART') {

        const totalItems = state.totalItems - state.items[action.payload].totalItemCount;
        const totalSum = state.totalSum - state.items[action.payload].totalItemSum;

        const newItems = state.items;
        delete newItems[action.payload];

        return {
            ...state,
            items: {
                ...newItems,
            },
            totalItems,
            totalSum,
        }
    }
    if (action.type === 'REMOVE_FROM_CART') {

            const totalItems = state.totalItems - 1;
            const totalSum = state.totalSum - action.payload.price;

            const totalItemCount = state.items[action.payload.id].totalItemCount - 1;
            const totalItemSum = state.items[action.payload.id].totalItemSum - action.payload.price;
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: {
                        items: [...state.items[action.payload.id].items].slice(0,-1),
                        totalItemSum,
                        totalItemCount
                    }
                },
                totalItems,
                totalSum,
            }
        }
    if (action.type === 'ADD_TO_CART') {

        const totalItemSum = (state.items[action.payload.id] && state.items[action.payload.id].totalItemSum) ? (state.items[action.payload.id].totalItemSum + action.payload.price) : action.payload.price;
        const totalItemCount = (state.items[action.payload.id] && state.items[action.payload.id].totalItemCount) ? (state.items[action.payload.id].totalItemCount + 1) : 1;

        const totalItems = state.totalItems + 1;
        const totalSum = state.totalSum + action.payload.price;

        return {
            ...state,
            items: {
                ...state.items,
                [action.payload.id]: {
                    items: state.items[action.payload.id] ? [...state.items[action.payload.id].items, action.payload] : [action.payload],
                    totalItemSum,
                    totalItemCount
                }
            },
            totalSum,
            totalItems,
        }
    }
    return state;
}