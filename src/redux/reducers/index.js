import {combineReducers} from 'redux';

import {filtersReducer} from './filters';
import {pizzasReducer} from './pizzas';
import {cartReducer} from './cart';

export const rootReducer = combineReducers({
    cart: cartReducer,
    pizzas: pizzasReducer,
    filters: filtersReducer,
});