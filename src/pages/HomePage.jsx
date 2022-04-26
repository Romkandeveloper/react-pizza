import React, {useEffect, useState} from 'react';
import {Categories} from '../components/Categories';
import {SortPopUpContainer} from '../components/SortPopup';
import {PizzaBlock} from '../components/PizzaBlock';
import axios from "axios";
import {connect} from "react-redux";
import {setPizzas} from '../redux/actions/pizzas';

const HomePage = ({pizzas, setPizzas}) => {
    debugger;
    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then((res) => setPizzas(res.data.pizzas));
    },[]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories categories={["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"]}/>

                <SortPopUpContainer />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas.length &&
                    pizzas.map(item => (
                        <PizzaBlock key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pizzas: state.pizzas,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: pizzas => dispatch(setPizzas(pizzas))
    }
}

export const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)