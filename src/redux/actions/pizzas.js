import axios from 'axios';

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const fetchPizzasThunkCreator = () => (dispatch) => {
    return (
        axios.get('http://localhost:3000/db.json')
             .then(res => dispatch(setPizzas(res.data.pizzas)))
    )
};