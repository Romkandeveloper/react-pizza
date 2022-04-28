import axios from 'axios';

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const isLoading = (status) => ({
    type: 'IS_LOADING',
    payload: status,
});

export const fetchPizzasThunkCreator = () => (dispatch) => {
        dispatch(isLoading(true))

        //for view skeleton
        setTimeout(() => {
            axios.get('http://localhost:3000/db.json')
                     .then(res => dispatch(setPizzas(res.data.pizzas)))
        }, 1500);
};