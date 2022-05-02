import React, {useEffect, useState} from 'react';
import {Categories} from '../components/Categories';
//import {SortPopUpContainer} from '../components/SortPopup';
import {SortPopUp} from '../components/SortPopup';
import {PizzaBlock} from '../components/PizzaBlock';
import axios from "axios";
import {connect, useDispatch, useSelector} from "react-redux";
import {setPizzas} from '../redux/actions/pizzas';
import {fetchPizzasThunkCreator} from '../redux/actions/pizzas';
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import {Button} from "../components/Button";

export const HomePage = () => {

    const { sorts, pizzas, isLoading, categories } = useSelector(state => ({
        categories: state.filters.categories,
        sorts: state.filters.sorts,
        pizzas: state.pizzas.items,
        isLoading: state.pizzas.isLoading,
    }));

    const activeCategoryName = categories.activeCategory !== null
                                ? categories.categoryTypes.find(el=> el.index === categories.activeCategory).type
                                : 'Все';

    window._state = useSelector(state => state);

    debugger;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzasThunkCreator(categories.activeCategory, sorts.activeSortType));
    },[categories.activeCategory, sorts.activeSortType]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categories={categories}/>

                {/*<SortPopUpContainer />*/}
                <SortPopUp sorts={sorts}/>
            </div>
            <h2 className="content__title">{activeCategoryName} пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? new Array(12).fill(<PizzaSkeleton/>)
                        : pizzas.map(item => (
                            <PizzaBlock key={item.id} item={item} {...item} />
                    ))
                }
            </div>
            {/*<Button load outline>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>*/}
            {/*</Button>*/}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         pizzas: state.pizzas.items,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: pizzas => dispatch(setPizzas(pizzas))
//     }
// }
//
// export const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)