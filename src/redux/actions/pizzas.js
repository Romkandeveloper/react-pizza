import axios from 'axios';

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const isLoading = (status) => ({
    type: 'IS_LOADING',
    payload: status,
});

export const fetchPizzasThunkCreator = (category, sortType) => (dispatch) => {
        dispatch(isLoading(true));

        //for view skeleton
        setTimeout(() => {
            axios.get(`http://localhost:3001/pizzas?category=${category}&_sort=${sortType}&_order=asc`)
                     .then(res => dispatch(setPizzas(res.data)))
        }, 1500);
};