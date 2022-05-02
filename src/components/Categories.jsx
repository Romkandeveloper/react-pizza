import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";

import {setCategory} from '../redux/actions/filters';

export const Categories = ({categories}) => {

    const dispatch = useDispatch();

    //callback shouldn`t use
    const onSelectItem = useCallback(index => {
        dispatch(setCategory(index))
    },[]);

    return (
        <div className="categories">
            <ul>
                <li className={categories.activeCategory === null ? 'active' : ''}
                    onClick={()=>onSelectItem(null)}
                >
                    Всі
                </li>
                {
                    categories &&
                    categories.categoryTypes.map((item, index) => (
                        <li className={categories.activeCategory === index ? 'active' : ''}
                            key={`${item}_${index}`}
                            onClick={()=>onSelectItem(index)}>
                            {item.type}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}