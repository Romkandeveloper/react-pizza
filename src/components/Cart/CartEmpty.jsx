import React from 'react';
import {NavLink} from "react-router-dom";

import emptyCartImg from "../../assets/images/emptyCart.png"

export const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Кошик порожній <icon>😕</icon></h2>
            <p>
                Скоріш за все, ви ще не замовляли піцу.<br/>
                Для того, щоб замовити піцу, перейдіть на головну сторінку.
            </p>
            <img src={emptyCartImg} alt="Empty cart"/>
            <NavLink to={"/"} className="button button--black">
                <span>Повернутися назад</span>
            </NavLink>
        </div>
    )
}