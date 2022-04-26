import React, {useEffect, useState} from 'react';
import {Categories} from '../components/Categories';
import {SortPopup} from '../components/SortPopup';
import {PizzaBlock} from '../components/PizzaBlock';
import axios from "axios";

export const HomePage = () => {

    const [pizzas,setPizzas] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then((res) => setPizzas(res.data.pizzas));
    },[]);
    debugger;
    return (
        <div className="container">
            <div className="content__top">
                <Categories categories={["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрытые"]}/>

                <SortPopup sort={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas &&
                    pizzas.map(item => (
                        <PizzaBlock />
                    ))
                }
            </div>
        </div>
    )
}