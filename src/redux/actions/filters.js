import {SET_CATEGORY, SET_SORT} from './types';

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category,
});

export const setSort = (sortBy) => ({
    type: 'SET_SORT',
    payload: sortBy,
});