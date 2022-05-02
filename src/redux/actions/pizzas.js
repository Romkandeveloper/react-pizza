import axios from 'axios';

import {SET_PIZZAS, LOADING} from './types';

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items,
});

export const loading = (status) => ({
    type: LOADING,
    payload: status,
});

export const fetchPizzasThunkCreator = (category, sortType) => (dispatch) => {
        dispatch(loading(true));
        debugger;
        setTimeout(() => {
            axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortType}&_order=asc`)
                     .then(res => dispatch(setPizzas(res.data)))
        }, 1500);
};