import React, {useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";

import {addToCart} from "../../redux/actions/cart";
import {Button} from "../Button";

export const PizzaBlock = (props) => {

    const [activeType, setActiveType] = useState(props.item.types[0]);
    const [activeSize, setActiveSize] = useState(props.item.sizes[0]);

    const dispatch = useDispatch();
    const { itemsInCart } = useSelector(state => ({
        itemsInCart: state.cart.items[props.item.id] ? state.cart.items[props.item.id].totalItemCount: null,
    }));

    const defaultTypes = ['тонке','традиційне'];
    const defaultSizes = [26, 30, 40];

    const addPizzaToCart = (item) => {
        dispatch(addToCart(item));
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.item.imageUrl}
                alt={props.item.name}
            />
            <h4 className="pizza-block__title">{props.item.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        defaultTypes.map((item, index) => (
                            <li
                                key={item}
                                onClick={()=>setActiveType(index)}
                                className={classNames({
                                'active': index === activeType,
                                    'disabled': !props.item.types.includes(index)
                            })}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    {
                        defaultSizes.map((item, index) => (
                            <li
                                key={item}
                                onClick={()=>setActiveSize(defaultSizes[index])}
                                className={classNames({
                                    'active': defaultSizes[index] === activeSize,
                                    'disabled': !props.item.sizes.includes(defaultSizes[index])
                                })}>
                                {item} см.
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">від {props.item.price} ₴</div>

                <div onClick={()=>{addPizzaToCart(props.item)}}>
                    <Button outline add>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Додати</span>
                        {
                            itemsInCart &&
                            <i>{itemsInCart}</i>
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}